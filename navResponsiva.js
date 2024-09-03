var navOcultaArea = document.getElementById("containerNavOculta")
var headerResponsivo = document.getElementById("headerResponsivo")
function navOculta(valor){
    if (valor === 1) {
        navOcultaArea.style.display = 'flex'
        headerResponsivo.setAttribute("onclick", "navOculta(2)")
    } else if(valor === 2) {
        navOcultaArea.style.display = 'none'
        headerResponsivo.setAttribute("onclick", "navOculta(1)")
    }
}