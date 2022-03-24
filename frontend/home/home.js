var compras = document.querySelector(".compras");
var fechar = document.querySelector(".fechar");

function carrinho() { 
    compras.style.display = "flex"

    fechar.addEventListener("click", () => {
        compras.style.display = "none"
    })
}