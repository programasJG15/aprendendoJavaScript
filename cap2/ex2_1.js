//declara a função mostrarOla
function monstrarOla() { 
  //obtem o conteudo do campo (com id=) nome
  var nome = document.getElementById("nome").value;
  // exibe no paragrafo (resposta): "olá" e o nome informado
  document.getElementById("resposta").textContent = "Olá " + nome;
}
// criar uma referencia ao botão (com id=) mostrar
var mostrar = document.getElementById("mostrar");
//registra para o botão "mostrar" um ouvinte para o evento click
// que a ao ser clicado irá chamar a função mostrarola
mostrar.addEventListener("click", mostrarOla);
