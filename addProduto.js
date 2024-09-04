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
    var nomeProduto = document.getElementById("nomeNovoProduto").value
    var valorProduto = parseFloat(document.getElementById("valorNovoProduto").value)

    valorProduto = valorProduto.toFixed(2)
    valorProduto = valorProduto.replace(".", ",")
    
    console.log(valorProduto)
    const newProduto = produtoBase.cloneNode(true)
    newProduto.querySelector(".tituloProduto").innerHTML = nomeProduto
    newProduto.querySelector(".Preço").innerHTML = `R$ ${valorProduto}`
    document.getElementById("containerProdutos").append(newProduto)

}

