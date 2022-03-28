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

function mobile() {
    if(body.style.width <= "1024px") {
        let burger = document.createElement("div")
        burger.setAttribute("class", "burger")

        header.appendChld(burger)
    }
}

/*
fetch("http://10.87.207.4:5000/login")
    .then(res => {
        return res.json();
    }).then(data => {
        if() {
            
        }
    })
*/

function verificarLogin() {
    let user = document.getElementById("user");
    let login = document.getElementById("login"); 

    if(localStorage.getItem("userdata") != null) {
        user.style.display = "block"
        login.style.display = "none";

        user.innerHTML = username.nome;
        user.setAttribute('href', '../usuario/index.html');
    } else {
        user.style.display = "none"
        login.style.display = "flex";
    }

}