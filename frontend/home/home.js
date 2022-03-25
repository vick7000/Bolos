var compras = document.querySelector(".compras");
var fechar = document.querySelector(".fechar");
var body = document.querySelector(".body");
var header = document.querySelector(".header");
var ul = document.querySelector(".ul")
var url = "http://10.87.207.4:3000/usuario";

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

/*function verificarLogin() {
    fetch(url)
    .then(res => {
        return res.json();
    }).then(data => {
        if( == undefined) {
            
        }
    })

    

    /*se tiver logado aparece a opção de ir para a pagina do usuario com o nome dele
}*/