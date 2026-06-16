let itensSelecionados = 0;

function toggleComida(comidaEscolhida) {
    let refSelecionada = document.querySelector(".selecionado");
    if (refSelecionada !== null) {
        refSelecionada.classList.toggle("selecionado");
        itensSelecionados = itensSelecionados - 1;
    }
    comidaEscolhida.classList.add("selecionado");
    itensSelecionados = itensSelecionados + 1;
    fecharPedido(itensSelecionados);
}

function toggleBebida(bebidaEscolhida) {
    let drinkSelecionada = document.querySelector(".selecionada");
    if (drinkSelecionada !== null) {
        drinkSelecionada.classList.toggle("selecionada");
        itensSelecionados = itensSelecionados - 1;
    }
    bebidaEscolhida.classList.add("selecionada");
    itensSelecionados = itensSelecionados + 1;
    fecharPedido(itensSelecionados);
}

function toggleSobremesa(sobremesaEscolhida) {
    let desertSelecionada = document.querySelector(".selecionadoo");
    if (desertSelecionada !== null) {
        desertSelecionada.classList.toggle("selecionadoo");
        itensSelecionados = itensSelecionados - 1;
    }
    sobremesaEscolhida.classList.add("selecionadoo");
    itensSelecionados = itensSelecionados + 1;
    fecharPedido(itensSelecionados);  
}

function fecharPedido(itensSelecionados) {
    if (itensSelecionados === 3) {
        let verde = document.querySelector(".botaoFecharPedido");
        verde.innerHTML = ("Fechar Pedido");
        verde.classList.add("verdeFundo");
    }
}

function confirmarPedido() {
    const comida = document.querySelector(".selecionado");
    const bebida = document.querySelector(".selecionada");
    const sobremesa = document.querySelector(".selecionadoo");

    const nomeComida = comida.querySelector("h3").innerText;
    const precoComida = comida.querySelector(".preco").innerText;

    const nomeBebida = bebida.querySelector("h3").innerText;
    const precoBebida = bebida.querySelector(".preco").innerText;

    const nomeSobremesa = sobremesa.querySelector("h3").innerText;
    const precoSobremesa = sobremesa.querySelector(".preco").innerText;

    
    console.log(nomeComida, precoComida);
    console.log(nomeBebida, precoBebida);
    console.log(nomeSobremesa, precoSobremesa);
}