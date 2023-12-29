
let listaNumerosSorteados = [];
let numeroMaximo = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Portuguese Female', {rate:1.2} );
}

function exibirMensagem(){
    exibirTextoNaTela("h1", "Jogo Do Número Secreto");
    exibirTextoNaTela("p", "Escolha um número de 1 a 10");
}

exibirMensagem();

function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if(chute == numeroSecreto){
        let palavraTentativa = tentativas > 1 ? "tentativas": "tentativa";
        let mensagemTentativa = `Você descobriu o número secreto com apenas ${tentativas} ${palavraTentativa}!`;

        
        exibirTextoNaTela("h1", "Acertou!");
        exibirTextoNaTela("p", mensagemTentativa);

        document.getElementById("reiniciar").removeAttribute("disabled");

    }else{
    if(chute > numeroSecreto){
        exibirTextoNaTela("p", "O número secreto é menor!");
    }else{
        exibirTextoNaTela("p", "o número secreto é maior!");
    }
    tentativas++;
    limparTela();
    }
}
function gerarNumeroAleatorio(){
    let numeroSorteado = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeNumerosSorteados = listaNumerosSorteados.length;

    if (quantidadeNumerosSorteados == numeroMaximo){
        listaNumerosSorteados = [];
    }
    
    if(listaNumerosSorteados.includes(numeroSorteado)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroSorteado);
        return numeroSorteado
        
    }
}

function limparTela(){
    chute = document.querySelector("input");
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparTela();
    tentativas = 1;
    exibirMensagem();
    document.getElementById("reiniciar").setAttribute("disabled",true);
}




