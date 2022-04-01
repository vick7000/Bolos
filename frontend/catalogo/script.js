var modal = document.querySelector(".modal")
var botao = document.getElementById("zz")
var bolo = document.getElementById("sss")


var imagem1 = document.querySelector(".bb")
var imagem2 = document.querySelector("#aa")
var imagem3 = document.querySelector(".um")
var imagem4 = document.querySelector(".dois")
var imagem5 = document.querySelector(".tres")
var imagem6 = document.querySelector(".quatro")
var imagem7 = document.querySelector(".cinco")
var imagem8 = document.querySelector(".seis")

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

    let username = JSON.parse(localStorage.getItem("userdata"));

    if(username !== undefined){
        login.innerHTML = username.nome;
        login.setAttribute('href', '../usuario/index.html');
    }else{

    }
    
    fetch("http://localhost:5000/bolo")
    
    .then(res => { return res.json() })
    .then(data => {
        console.log(data);
        console.log(data[1].img)
        imagem2.src = data[1].img;
        nome2.innerHTML = data[1].nome;

        data.forEach(e => {
            // console.log(e.img)
            let section = document.querySelector(".bloco1")
            let item1 = document.querySelector(".item1")
            let item3 = document.querySelector(".item3")
            let img = item1.querySelector("img")
            let imm4 = item3.querySelector("img")
            let h1 = section.querySelector("h1")

            console.log(e.nome)
            
            img.src = e.img;
            imm4.src = e.img;
            h1.innerHTML = e.nome;

        })

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

