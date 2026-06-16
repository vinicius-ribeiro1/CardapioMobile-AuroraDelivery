let itensSelecionados = 0;

function toggleComida(comidaEscolhida) {
    let refSelecionada = document.querySelector(".selecionado");
    if (refSelecionada !== null) {
        refSelecionada.classList.toggle("selecionado");
    }
    comidaEscolhida.classList.add("selecionado");
    itensSelecionados = itensSelecionados + 1;
    fecharPedido(itensSelecionados);
}

function toggleBebida(bebidaEscolhida) {
    let drinkSelecionada = document.querySelector(".selecionada");
    if (drinkSelecionada !== null) {
        drinkSelecionada.classList.toggle("selecionada");
    }
    bebidaEscolhida.classList.add("selecionada");
    itensSelecionados = itensSelecionados + 1;
    fecharPedido(itensSelecionados);
}

function toggleSobremesa(sobremesaEscolhida) {
    let desertSelecionada = document.querySelector(".selecionadoo");
    if (desertSelecionada !== null) {
        desertSelecionada.classList.toggle("selecionadoo");
    }
    sobremesaEscolhida.classList.add("selecionadoo");
    itensSelecionados = itensSelecionados + 1;
    fecharPedido(itensSelecionados);
}


function fecharPedido(itensSelecionados) {
    if (itensSelecionados === 3) {
        let verde = document.querySelector(".verde");
        verde.innerHTML = ("Fechar Pedido")
    }
}
