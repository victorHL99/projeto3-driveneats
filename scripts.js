let pratoSelecionado = 0;
let bebidaSelecionada = 0;
let sobremesaSelecionada = 0;
let precoPrato = 0;
let precoBebida = 0;
let precoSobremesa = 0;
let valorFinal = 0;


function confirmacaoPedido() {


            const botaoFinal = document.querySelector(".texto-pedido")
            
            botaoFinal.classList.add("botao-pedido-final");
            botaoFinal.classList.add("mudarbutton");
            botaoFinal.innerHTML = 'Finalizar Pedido';

    
}

function ativarBotao(){ 
    if(selecionarPratoPrincipal() != null && selecionarBebida() != null && selecionarSobremesa() != null){
        confirmacaoPedido();
    }
}

//Selecionar o prato principal
function selecionarPratoPrincipal(classeBotaoPrato) {

    //Remover o prato selecionado caso já tenha algum
    const pratoSelecionado = document.querySelector(".selecionado-prato");
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado-prato");
    }
    
    pratoSelecionado = prato;


    //adicionou mais um prato para seleção
    const prato = document.querySelector("." + classeBotaoPrato);
    prato.classList.add("selecionado-prato");


}

//Selecionar a bebida
function selecionarBebida(classeBotaoBebida) {

    //Remover a bebida selecionada caso já tenha algum
    const bebidaSelecionada = document.querySelector(".selecionado-bebida");
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado-bebida")
    }

    const bebida = document.querySelector("." + classeBotaoBebida);
    bebida.classList.add("selecionado-bebida");

    bebidaSelecionada = bebida;
}

//Selecionar a Sobremesa
function selecionarSobremesa(classeBotaoSobremesa) {

    //Remover a bebida selecionada caso já tenha algum
    const sobremesaSelecionada = document.querySelector(".selecionado-sobremesa");
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado-sobremesa")
    }

    const sobremesa = document.querySelector("." + classeBotaoSobremesa);
    sobremesa.classList.add("selecionado-sobremesa");

    sobremesaSelecionada = sobremesa;

}


