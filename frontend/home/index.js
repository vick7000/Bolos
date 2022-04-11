
var compras = document.querySelector(".compras");
var bolos = document.querySelector(".informe");
var fechar = document.querySelector(".fechar");
var body = document.querySelector(".body");
var header = document.querySelector(".header");
var ul = document.querySelector(".ul")
var body = document.querySelector(".body");
var btn = document.querySelector("#botao")

var username = JSON.parse(localStorage.getItem("userdata"));
var montado = JSON.parse(localStorage.getItem("userConfig"));

console.log(username)
function logando(){
    console.log("asdasdad")
    

    let data = {
        id_config : montado[0].id,
        custo : 123.20
    }

    if(data.id > 2 && data.id_config == montado[0].id) {
        console.log("ja cadastrado")
        // {}
        
    }else {
        fetch("http://localhost:5000/item", {
        method : "POST",
        headers : {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })
    .then((res) => {return res.json()})
    .then((data) => {
        console.log(data);

        if(data =! null){
            localStorage.setItem("userItem", JSON.stringify(data));
            console.log("FOI")
            btn.addEventListener("click", () => {
                
                window.location.href = "../tela de pagamento"
            })
        }else{
            console.log("nao cadastrado")
        }
    })
    }

}

if(montado[0].id == 54){
    let imagem = document.getElementById("tente")
    imagem.src = "../assets/bolo.png"
}
else if(montado[0].id == 9){
    let im1 = document.createElement("img")
    im1.src = "../assets/boloCilindroRosaBrig.png"
    bolos.appendChild(im1)
}
else if(montado[0].id == 4){
    let im1 = document.createElement("img")
    im1.src = "../assets/boloCFM.png"
    bolos.appendChild(im1)
}

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

    if(username != null) {
        user.style.display = "block";
        login.style.display = "none";
        user2.style.display = "block";
        login2.style.display = "none";
        sair.style.display = "block";
        carrinho.style.display = "block";
        carrmob.style.display = "block";
        sair2.style.display = "block";

        user.innerHTML = username[0].nome;
        user.setAttribute('href', '../usuario/index.html');
        user2.innerHTML = username[0].nome;
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
