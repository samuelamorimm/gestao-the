var nomeProduto = document.getElementById("nomeNovoProduto")
var valorProduto = document.getElementById("valorNovoProduto")
var descProduto = document.getElementById("descNovoProduto")

var produtoBase = document.getElementById("produtoBase")
produtoBase.remove()

function openCloseAddProduto(valor){
    let areaAddProduto = document.getElementById("areaAddProduto")
    let buttonAddProduto = document.getElementById("addProduto")
    if (valor === 1) {
        areaAddProduto.style.display = 'flex'
    } else if(valor === 2) {
        areaAddProduto.style.display = 'none'
    }
}

function addProduto() {
    const newProduto = produtoBase.cloneNode(true)
    newProduto.querySelector(".tituloProduto").innerHTML = nomeProduto.value
    newProduto.querySelector(".Preço").innerHTML = valorProduto.value

    document.getElementById("containerProdutos").append(newProduto)

    var produto = {
        "nome": nomeProduto.value,
        "desc": descProduto.value,
        "valor": valorProduto.value,
    }
    salvarDb(produto)
}

function getDb() {
    if(localStorage.getItem("produtos")){
        const produtos = JSON.parse(localStorage.getItem("produtos"))
        return produtos
    } else{
        return []
    }
}

function salvarDb(user){
    let users = getDb();
    
    users.push(user)
    localStorage.setItem("produtos", JSON.stringify(users))
}