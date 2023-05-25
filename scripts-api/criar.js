const form = document.querySelector('form');
const button = document.querySelector('#cadastro-button');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const nome = document.querySelector('#nome_cad').value;
  const fabricante = document.querySelector('#fab_cad').value;
  const local = document.querySelector('#local_cad').value;
  const tipo = document.querySelector('#tipo_cad').value;
  const ultimanutencao = document.querySelector('#ultimanutencao_cad').value;
  const proximanutencao = document.querySelector('#proximanutencao_cad').value;

  axios.post('/cadastro', { nome, fabricante, local, tipo, ultimanutencao, proximanutencao })
    .then(response => {
      console.log(response.data);
      alert('Dados enviados com sucesso!');
    })

    .catch(error => {
      alert('Ocorreu um erro ao enviar os dados! AAAAAAAAAAA');
      console.log(error);
    });
});