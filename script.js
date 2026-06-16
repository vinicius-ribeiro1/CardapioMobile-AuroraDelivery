let itensSelecionados = 0;

function toggleItem(itemEscolhido, seletor) {
    let refSelecionada = document.querySelector("." + seletor);
    if (refSelecionada !== null) {
        refSelecionada.classList.toggle(seletor);
        itensSelecionados = itensSelecionados - 1;
    }
    itemEscolhido.classList.add(seletor);
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

    const nomeComida = comida.querySelector("h3").innerHTML;
    const precoComida = parseInt(comida.querySelector(".preco").innerHTML);

    const nomeBebida = bebida.querySelector("h3").innerHTML;
    const precoBebida = parseInt(bebida.querySelector(".preco").innerHTML);

    const nomeSobremesa = sobremesa.querySelector("h3").innerHTML;
    const precoSobremesa = parseInt(sobremesa.querySelector(".preco").innerHTML);

    const total = precoComida + precoBebida + precoSobremesa;

    const mensagem = `Olá, gostaria de fazer o pedido:

- Prato: ${nomeComida}
- Bebida: ${nomeBebida}
- Sobremesa: ${nomeSobremesa}

Total: R$ ${total.toFixed(2)}`;

    const url = `https://wa.me/5522999372504?text=${encodeURIComponent(mensagem)}`;

    window.open(url);
}