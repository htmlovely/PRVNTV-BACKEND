//Imports
const express = require("express")
const route = express()
const cors = require("cors")
const database = require("./database/db")
const maquinas = require("./models/maquinas")

route.use(cors())
route.use(express.json())

//Conexao c banco de dados
database
    .authenticate()
    .then(() => {
        console.log("Conexao com o banco de dados realizada com sucesso!")
    }).catch((error) => {
        console.log(error)
    })

//CONTINUANDO ESTA CACETA 

route.get("/", (_req, res) => {
    res.send("Inicial")
})

//Rotas das API'S
route.post("/cadastro", (req, res) => {
    const { nome } = req.body
    const { fabricante } = req.body
    const { local } = req.body
    const { tipo } = req.body
    const { ultimanutencao } = req.body
    const { proximanutencao } = req.body

    console.log(nome)
    console.log(fabricante)
    console.log(local)
    console.log(tipo)
    console.log(ultimanutencao)
    console.log(proximanutencao)

    maquinas.create({
        nome: nome,
        fabricante: fabricante,
        local: local,
        tipo: tipo,
        ultimanutencao: ultimanutencao,
        proximanutencao: proximanutencao,
    }).then((dadoscadastro) => {
        console.log(dadoscadastro.toJSON())
        res.send("Dados enviado")
    }).catch((error) => {
        console.log(error)
    })

})

route.get("/cadastradas", (req, res) => {
    maquinas.findAll({
    }).then((cadastradas) => {
        console.log(cadastradas.map(cadastradas => cadastradas.toJSON()))
        res.send(cadastradas)
    }).catch((error) => {
        console.log(error)
    })
})


route.put('/cadastradas/:id', (req, res) => {
    const { id } = req.params;
    const { nome, fabricante, local, tipo, ultimanutencao, proximanutencao} = req.body;

    maquinas.update({
        nome: nome,
        fabricante: fabricante,
        local: local,
        tipo: tipo,
        ultimanutencao: ultimanutencao,
        proximanutencao: proximanutencao,
    }, {
        where: {
            id: id
        }
    }).then(() => {
        res.status(200).send('Dados atualizados com sucesso!');
    }).catch((error) => {
        console.log(error);
        res.status(500).send('Erro ao atualizar dados da máquina.');
    });
});
//Porta do servidor
route.listen(5000, () => {
    console.log("Aplicação on-line! \n Url:http://localhost:5000/cadastradas")
})      
