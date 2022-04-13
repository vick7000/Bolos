var modal = document.querySelector(".modal")
var zz = document.getElementById("zz")
var botao = document.getElementById("carrb")
var peça = document.getElementById("bot")
var bolo = document.getElementById("sss")

var imagem1 = document.querySelector(".bolo1")
var imagem2 = document.querySelector(".bolo2")
var imagem3 = document.querySelector(".bolo3")
var imagem4 = document.querySelector(".bolo4")
var imagem5 = document.querySelector(".bolo5")
var imagem6 = document.querySelector(".bolo6")
var imagem7 = document.querySelector(".bolo7")
var imagem8 = document.querySelector(".bolo8")

var nome1 = document.getElementById("name1")
var nome2 = document.getElementById("name2")
var nome3 = document.getElementById("name3")
var nome4 = document.getElementById("name4")
var nome5 = document.getElementById("name5")
var nome6 = document.getElementById("name6")
var nome7 = document.getElementById("name7")
var nome8 = document.getElementById("name8")

var ul = document.querySelector(".ul");
var x = document.getElementById("fech");
var body = document.querySelector(".body");
var body = document.querySelector(".body");
var login = document.getElementById("login");
var header = document.querySelector(".header");
var compras = document.querySelector(".compras");
var fechar = document.querySelector(".fechar");

// function compra() {
//     let produto = document.createElement("div");
//     let imagemDoBolo = document.createElement("img");
//     let infoDoBolo = document.createElement("text");
//     let content = document.querySelector(".content");
//     imagemDoBolo.src = localStorage.getItem("imgData");
//     infoDoBolo.src = localStorage.getItem("textData");
    
//     infoDoBolo.style.fontSize = "20px";
//     imagemDoBolo.style.width = "200px";
//     imagemDoBolo.style.height = "200px";
    
//     produto.setAttribute("class", "prod")
//     produto.appendChild(infoDoBolo);
//     produto.appendChild(imagemDoBolo);
    
//     content.appendChild(produto)
    
//     let linkImagem = document.getElementById("sss").src;
//     let linkTexto = document.getElementById("ddd").innerHTML;
    
//     localStorage.setItem("imgData", linkImagem);
//     localStorage.setItem("textData", linkTexto);
// }


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
    let fundo = document.querySelector(".fundo");

    submenu.style.display = "block";
    fundo.style.display = "block";
    body.style.overflow = "hidden";

    x.addEventListener("click", () => {
        submenu.style.display = "none";
        fundo.style.display = "none";
        body.style.overflow = ""
    })
    
}

function load(){
    let user = document.getElementById("user");
    let login = document.getElementById("login");
    let user2 = document.getElementById("user2");
    let login2 = document.getElementById("login2"); 
    let sair = document.getElementById("sair");
    let carrinho = document.getElementById("carrinho");
    let carrmob = document.querySelector(".carrmob");
    let sair2 = document.querySelector(".sair2");
    let username = JSON.parse(localStorage.getItem("userdata"));

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
    
    fetch("http://10.87.207.4:5000/bolo")
    
    .then(res => { return res.json() })
    .then(data => {
        console.log(data);
        peça.addEventListener("click", () => {
            let imagem = document.getElementById("tente");
            imagem.src = "../assets/z.png"
            alert("Bolo adicionado no carrinho")
            botao.addEventListener("click", () => {
                localStorage.setItem("usercake", JSON.stringify(data))
                console.log(localStorage.setItem("usercake", JSON.stringify(data)))
                window.location.href = "../tela de pagamento"
            })
        })
        let card = document.querySelector(".info");
        let h2 = card.querySelector(".texto");
        let img = card.querySelector("#sss");
        h2.innerHTML = data[4].descricao;
        img.src = data[4].img
    
        imagem1.src = data[0].img;
        imagem2.src = data[1].img;
        imagem3.src = data[2].img;
        imagem4.src = data[3].img;
        imagem5.src = data[4].img;
        imagem6.src = data[5].img;
        imagem7.src = data[6].img;
        imagem8.src = data[7].img;
    
        nome1.innerHTML = data[0].nome;
        nome2.innerHTML = data[1].nome;
        nome3.innerHTML = data[2].nome;
        nome4.innerHTML = data[3].nome;
        nome5.innerHTML = data[4].nome;
        nome6.innerHTML = data[5].nome;
        nome7.innerHTML = data[6].nome;
        nome8.innerHTML = data[7].nome;
    
        

        for (let i = 0; i < data.length; i++){
            
        }
        // imagem2.src = data[1].img;
        // nome2.innerHTML = data[1].nome;

        // data.forEach(e => {
        //     console.log(e.img)
        //     let section = document.querySelector(".bloco1")
        //     let item1 = document.querySelector(".item1")
        //     let item3 = document.querySelector(".item3")
        //     let img = item1.querySelector("img")
        //     let imm4 = item3.querySelector("img")
        //     let h1 = section.querySelector("h1")

        //     console.log(e.nome)
            
        //     img.src = e.img;
        //     imm4.src = e.img;
        //     h1.innerHTML = e.nome;

        // })


    })




    let pagina = document.querySelector(".bloco1");
    let clonePagina = pagina.cloneNode(true);
    // let clonePagina2 = pagina.cloneNode(true);
    clonePagina.id = "copiaBloco";
    // clonePagina2.id = "copiaBloco2";


    
    document.body.appendChild(clonePagina);
    // document.body.appendChild(clonePagina2);


}



function modales() {
    modal.style.display = "block"
}

zz.addEventListener("click", () => {
    modal.style.display = "none"
})



const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.carrousel");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}
