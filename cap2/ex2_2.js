function converterDuracao() {
    event.preventDefault();
    // cria referencia aos elementos da pagina
    var inTitulo = document.getElementById("inTitulo");
    var induracao = document.getElementById("induracao");
    var outTitulo = document.getElementById("outTitulo");
    var outResposta = document.getElementById("outResposta");

    // obtem conteudos dos campos de entrada 
    var titulo = inTitulo.value;
    var duracao = Number(inDuracao.value);

    // arredonda para baixo o resultado da divisão

    var horas = Math.floor(duracao / 60);

    // obtem o resto da divisão entre os numeros
    var minutos = duracao % 60;

    // altera o conteud dos paragrafos de respostas
    outTitulo.textContent = titulo;
    outResposta.textContent = horas + " hora(s) e " + minutos + " minuto(s)";
}

    // criar referencia ao elemento btconverter (botão)
    var btconverter = document.getElementById("btconverter");

    // registra um evento associado ao botão, para carregar uma função
    btconverter.addEventListener("click", converterDuracao);
