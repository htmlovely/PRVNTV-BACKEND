function atualizarMaquina() {
    var maquinaId = prompt('Digite a ID da máquina que deseja atualizar:');
    var novoNome = prompt('Digite o novo nome:');
    var novoFabricante = prompt('Digite o nome do Fabricante:');
    var novoLocal = prompt('Digite o novo Local:');
    var novoTipo = prompt('Digite o tipo da máquina:');
    var novoUltimaData = prompt('Digite a última data da manutenção:');
    var novoProximaData = prompt('Digite a próxima data da manutenção:');
  
    axios.put('http://localhost:5000/cadastros' + maquinaId, {
      nome: novoNome,
      fabricante: novoFabricante,
      local: novoLocal,
      tipo: novoTipo,
      UltimaData : novoUltimaData,
      ProximaData: novoProximaData,
    }).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.log(error);
    });
  }

