var compras = document.querySelector(".compras");
var fechar = document.querySelector(".fechar");
var body = document.querySelector(".body");
var header = document.querySelector(".header");
var ul = document.querySelector(".ul")
var body = document.querySelector(".body");
var username = JSON.parse(localStorage.getItem("userdata"));


function carrinho() { 
    compras.style.display = "flex"
    body.style.overflow = "hidden"

    fechar.addEventListener("click", () => {
        compras.style.display = "none"
        body.style.overflow = ""
    })
}

function submenu() {
    let submenu = document.querySelector(".submenu");
    let fech = document.getElementById("fech");
    let fundo = document.querySelector(".fundo");

    submenu.style.display = "block";
    fundo.style.display = "block";
    body.style.overflow = "hidden"

    fech.addEventListener("click", () => {
        submenu.style.display = "none";
        fundo.style.display = "none";
        body.style.overflow = ""
    })
    
}

function verificarLogin() {
    let user = document.getElementById("user");
    let login = document.getElementById("login");
    let user2 = document.getElementById("user2");
    let login2 = document.getElementById("login2"); 
    let sair = document.getElementById("sair");
    let carrinho = document.getElementById("carrinho");
    let carrmob = document.querySelector(".carrmob");
    let sair2 = document.querySelector(".sair2");

    if(localStorage.getItem("userdata") != null) {
        user.style.display = "block";
        login.style.display = "none";
        user2.style.display = "block";
        login2.style.display = "none";
        sair.style.display = "block";
        carrinho.style.display = "block";
        carrmob.style.display = "block";
        sair2.style.display = "block";

        user.innerHTML = username.nome;
        user.setAttribute('href', '../usuario/index.html');
        user2.innerHTML = username.nome;
        user2.setAttribute('href', '../usuario/index.html');
    } else {
        user.style.display = "none";
        login.style.display = "flex";
        user.style.display = "none";
        login.style.display = "flex";
        sair.style.display = "none";
        carrinho.style.display = "none";
        carrmob.style.display = "none";
        sair2.style.display = "none";
    }

}

function sair() {
    localStorage.clear();
    window.location.href = "../home/index.html"
}