const Sequelize = require("sequelize")
const conexaodb = require("../database/db")

const maquinas = conexaodb.define('maquinas',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement:true,
    },
    fabricante:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    localizacao:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    tipo:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    fabricante:{
        type:Sequelize.STRING,
        allowNull:false,
    },

    Ultimanutencao:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    proximanutencao:{
        type:Sequelize.STRING,
        allowNull:false,
    }

})

maquinas.sync()
module.exports = maquinas
