var nomeProduto = document.getElementById("nomeNovoProduto").value
var valorProduto = document.getElementById("valorNovoProduto")
var descProduto = document.getElementById("descNovoProduto")

var produtoBase = document.getElementById("produtoBase")
produtoBase.remove()

function openCloseAddProduto(valor){
    let areaAddProduto = document.getElementById("areaAddProduto")
    if (valor === 1) {
        areaAddProduto.style.display = 'flex'
    } else if(valor === 2) {
        areaAddProduto.style.display = 'none'
    }
}

function addProduto() {
    valorProduto = eval(valorProduto.value)
    valorProduto = valorProduto.toFixed(2)

    const newProduto = produtoBase.cloneNode(true)
    newProduto.querySelector(".tituloProduto").innerHTML = nomeProduto
    newProduto.querySelector(".Preço").innerHTML = `R$ ${valorProduto.replace(".", ",")}`

    document.getElementById("containerProdutos").append(newProduto)

    var produto = {
        "produto": newProduto
    }
}


