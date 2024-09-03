document.getElementById("editColorProfile").addEventListener("click", function(){
    let areaCores = document.getElementById("areaCores")
    areaCores.style.display = 'grid'
})

function mudarCorProfile(cor, display) {
    let areaCores = document.getElementById("areaCores")
    let areaProfile = document.getElementById("areaProfile")
    areaProfile.style.background = cor
    areaCores.style.display = display
}

let nome = document.getElementById("nameProfile")
let iconEditName = document.getElementById("iconEditName")
let containerNameNone = document.getElementById("containerNameNone")

function alterarNameProfile() {
    nome.style.display = 'none'
    iconEditName.style.display = 'none'
    containerNameNone.style.display = 'flex'
}

var inputMudarNome = document.getElementById("inputNameProfileNone").value
function confirmar(valor) {
    if (valor === 1) {
        nome.style.display = 'block'
    } else {
        containerNameNone.style.display = 'none'
    }
}

