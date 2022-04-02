var modal = document.querySelector(".modal")
var botao = document.getElementById("zz")
var bolo = document.getElementById("sss")

var imagem = document.querySelector(".bolo")

var nome1 = document.getElementById("name1")
var nome2 = document.getElementById("name2")
var nome3 = document.getElementById("name3")
var nome4 = document.getElementById("name4")
var nome5 = document.getElementById("name5")
var nome6 = document.getElementById("name6")
var nome7 = document.getElementById("name7")
var nome8 = document.getElementById("name8")

var bot = document.getElementById("bot");

var ul = document.querySelector(".ul");
var x = document.getElementById("fech");
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

    fetch("http://10.87.207.4:5000/bolo")
    // fetch("http://localhost:5000/bolo")
    
    .then(res => { return res.json() })
    .then(data => {
        console.log(data);

        data.forEach((item, index) => {
            teste(item);
            // var foto = item.img
            
            // image64 = foto;
            // imgData = getBase64Image(image64);
            // localStorage.setItem("imgData", imgData);


            // localStorage.setItem("imagem", JSON.stringify(data[0]));
            // localStorage.setItem("nome1", JSON.stringify(data[0]));

            // imagem.src = dados.img
            // console.log(item.imagem)
            // nome1.innerHTML = dados.nome
        })
    })
    
    function teste(obj){
        
        let lista = document.querySelector(".item1");

        
        let card = document.querySelector(".card").cloneNode(true);
        let img = card.querySelector("img");
      
        img.src = obj.img
       

        card.appendChild(img);
       
        lista.appendChild(card);
    }
    let produto = document.createElement("div");
    let imagemDoBolo = document.createElement("img");
    let content = document.querySelector(".content");
    imagemDoBolo.src = localStorage.getItem("imgData");
  
    imagemDoBolo.style.width = "200px";
    imagemDoBolo.style.height = "200px";

    produto.setAttribute("class", "prod")
    produto.appendChild(imagemDoBolo);
    
    content.appendChild(produto)
    
    //document.getElementById("carrinho").appendChild(imagemDoBolo)
    // if(localStorage.getItem("userdata") != null) {
    //     user.style.display = "block"
    //     login.style.display = "none";
    
    //     user.innerHTML = username.nome;
    //     user.setAttribute('href', '../usuario/index.html');
    // } else {
    //     user.style.display = "none"
    //     login.style.display = "block";
    // }
    let pagina = document.querySelector(".bloco1");
    let clonePagina = pagina.cloneNode(true);
    // let clonePagina2 = pagina.cloneNode(true);
    clonePagina.id = "copiaBloco";
    // clonePagina2.id = "copiaBloco2";
    
    // document.body.appendChild(clonePagina);
    // document.body.appendChild(clonePagina2);

    
}

function compra() {
    
    let linkImagem = document.getElementById("socorro").src;
    
    localStorage.setItem("imgData", linkImagem);
    
}

function finalizar() {
    window.location.href = "../tela de pagamento/index.html";
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



// function busque() {
//     let input = document.getElementById('buscar').value.toLowerCase();
//     //let x = document.querySelector('.content');

//     if(input == "sodie"){
//         window.scroll(0, 50);
//     }else if(input == "AAAAAA"){
//         window.scroll(0, 200);
//     }

//     // for (i = 0; i < x.length; i++) { 
//     //     if (!x[i].innerHTML.toLowerCase().includes(input)) {
//     //         x[i].parent.href="#socorro";
//     //     }
//     //     else {
//     //         x[i].style.display="list-item";                 
//     //     }
//     // }
// }