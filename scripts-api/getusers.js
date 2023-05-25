
axios.get('http://localhost:5000/cadastradas')
.then(function (response) {
    var cadastradas = response.data;
    var maquinasTableBody = document.getElementById('maquinas-table-body');

    for (var i = 0; i < cadastradas.length; i++) {
        var maquina = maquina[i];
        var tr = document.createElement('tr');
        
        var idTd = document.createElement('td');
        idTd.textContent = maquina.id;
        tr.appendChild(idTd);

        var nomeTd = document.createElement('td');
        nomeTd.textContent = maquina.nome;
        tr.appendChild(nomeTd);

        var fabricanteTd = document.createElement('td');
        fabricanteTd.textContent = maquina.fabricante;
        tr.appendChild(fabricanteTd);

        
        var localTd = document.createElement('td');
        localTd.textContent = maquina.senha;
        tr.appendChild(localTd);

        var tipoTd = document.createElement('td');
       tipoTd.textContent = maquina.fabricante;
        tr.appendChild(tipoTd);

        var UltMATd = document.createElement('td');
        UltMATd.textContent = maquina.fabricante;
        tr.appendChild(UltMATd);

        var ProxTd = document.createElement('td');
        ProxTd.textContent = maquina.fabricante;
        tr.appendChild(ProxTd); 

        var acaoTd = document.createElement('td');
        var excluirButton = document.createElement('button');
        excluirButton.textContent = 'Excluir';
        excluirButton.addEventListener('click', (function(maquina) {
            return function() {
                excluirmaquina(maquina.id);
            }
        })(maquina));
        acaoTd.appendChild(excluirButton);
        tr.appendChild(acaoTd);
        maquinasTableBody.appendChild(tr);
    }
})
.catch(function (error) {
    console.log(error);
});
    