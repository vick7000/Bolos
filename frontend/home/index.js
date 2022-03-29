var compras = document.querySelector(".compras");
var fechar = document.querySelector(".fechar");
var body = document.querySelector(".body");
var header = document.querySelector(".header");
var ul = document.querySelector(".ul")
var username = JSON.parse(localStorage.getItem("userdata"));


function carrinho() { 
    compras.style.display = "flex"

    fechar.addEventListener("click", () => {
        compras.style.display = "none"
    })
}

/*function mobile() {
    if(body.style.width <= "1024px") {
        let burger = document.createElement("div")
        burger.setAttribute("class", "burger")

        header.appendChld(burger)
    }
}*/


function verificarLogin() {
    let user = document.getElementById("user");
    let login = document.getElementById("login"); 
    let sair = document.getElementById("sair");
    let carrinho = document.getElementById("carrinho")

    if(localStorage.getItem("userdata") != null) {
        user.style.display = "block"
        login.style.display = "none";
        sair.style.display = "block"
        carrinho.style.display = "block"

        user.innerHTML = username.nome;
        user.setAttribute('href', '../usuario/index.html');
    } else {
        user.style.display = "none"
        login.style.display = "flex";
        sair.style.display = "none"
        carrinho.style.display = "none"
    }

}

function sair() {
    localStorage.clear();
    window.location.href = "../home/index.html"
}