function comprar() {
    let quantidade = document.getElementById("qtd").value;
    let tipoIngresso = document.getElementById("tipo-ingresso");

    if(quantidade <= 0) {
        alert("Quantidade inválida")
        limparCampoQuantidade()
        return
    } else {
        if (quantidade != parseInt(quantidade)) {
            alert("Quantidade inválida")
            limparCampoQuantidade()
            return
        }
    }

    if(document.getElementById("qtd").value == "") {
        alert("Quantidade inválida")
        limparCampoQuantidade()
        return
    }

    if(tipoIngresso.value == "pista") {
        comprarPista(quantidade);
    } else {
        if(tipoIngresso.value == "inferior") {
        comprarInferior(quantidade);
        } else {
        comprarSuperior(quantidade);
        }
    }
}

function comprarPista(quantidade) {
    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);

    if (quantidade > quantidadePista) {
        alert ("Quantidade indisponível para tipo pista.");
        limparCampoQuantidade();
    } else {
        quantidadePista = quantidadePista - quantidade;
        document.getElementById("qtd-pista").textContent = quantidadePista;
        alert ("Compra realizada com sucesso!");
        limparCampoQuantidade();
    }
}

function comprarInferior(quantidade) {
    let quantidadeInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (quantidade > quantidadeInferior) {
        alert ("Quantidade indisponível para tipo inferior.");
        limparCampoQuantidade();
    } else {
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById("qtd-inferior").textContent = quantidadeInferior;
        alert ("Compra realizada com sucesso!");
        limparCampoQuantidade();
    }
}

function comprarSuperior(quantidade) {
    let quantidadeSuperior = parseInt(document.getElementById("qtd-superior").textContent);

    if (quantidade > quantidadeSuperior) {
        alert ("Quantidade indisponível para tipo superior.");
        limparCampoQuantidade();
    } else {
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById("qtd-superior").textContent = quantidadeSuperior;
        alert ("Compra realizada com sucesso!");
        limparCampoQuantidade();
    }
}

function limparCampoQuantidade() {
    document.getElementById("qtd").value = ""
}