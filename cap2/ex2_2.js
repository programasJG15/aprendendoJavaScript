function converterDuracao() {
    event.preventDefault();
    // cria referencia aos elementos da pagina
    var inTitulo = document.getElementById("inTitulo");
    var inDuracao = document.getElementById("inDuracao");
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
    var btConverter = document.getElementById("btConverter");

    // registra um evento associado ao botão, para carregar uma função
    btConverter.addEventListener("click", converterDuracao);