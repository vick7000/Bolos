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
        let jil = document.querySelector(".jil").cloneNode(true);
        let img = card.querySelector("img");
        let inf = jil.querySelector("h1");
      
        img.src = obj.img
        inf.src= obj.text 

        card.appendChild(img);
        jil.appendChild(inf);
       
        lista.appendChild(card);
        lista.appendChild(jil);
    }
    
    
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
    let produto = document.createElement("div");
    let imagemDoBolo = document.createElement("img");
    let infoDoBolo = document.createElement("text");
    let content = document.querySelector(".content");
    imagemDoBolo.src = localStorage.getItem("imgData");
    infoDoBolo.src = localStorage.getItem("textData");
  
    infoDoBolo.style.fontSize = "20px";
    imagemDoBolo.style.width = "200px";
    imagemDoBolo.style.height = "200px";

    produto.setAttribute("class", "prod")
    produto.appendChild(infoDoBolo);
    produto.appendChild(imagemDoBolo);
    
    content.appendChild(produto)
    
    let linkImagem = document.getElementById("sss").src;
    let linkTexto = document.getElementById("ddd").src;
    
    localStorage.setItem("imgData", linkImagem);
    localStorage.setItem("textData", linkTexto);
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

function sair() {
    localStorage.clear();
    window.location.href = "../home/index.html"
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

// for (let i = 0; i < data.length; i++){
            
//     let card = document.querySelector(".info");
//     let h2 = card.querySelector(".texto");
//     let img = card.querySelector("#sss");
//     h2.innerHTML = data[4].descricao;
//     img.src = data[4].img

//     imagem1.src = data[0].img;
//     imagem2.src = data[1].img;
//     imagem3.src = data[2].img;
//     imagem4.src = data[3].img;
//     imagem5.src = data[4].img;
//     imagem6.src = data[5].img;
//     imagem7.src = data[6].img;
//     imagem8.src = data[7].img;

//     nome1.innerHTML = data[0].nome;
//     nome2.innerHTML = data[1].nome;
//     nome3.innerHTML = data[2].nome;
//     nome4.innerHTML = data[3].nome;
//     nome5.innerHTML = data[4].nome;
//     nome6.innerHTML = data[5].nome;
//     nome7.innerHTML = data[6].nome;
//     nome8.innerHTML = data[7].nome;

//     localStorage.setItem("usercake", JSON.stringify(data))
//     botao.addEventListener("click", () => {
//         window.location.href = "../tela de pagamento"
//     })

// }