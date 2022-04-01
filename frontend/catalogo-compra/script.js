var modal = document.querySelector(".modal")
var menu = document.querySelector(".menu")
var img = document.querySelector(".x");
var img1 = document.querySelector(".a");
var compras = document.querySelector(".compras");
var fechar = document.querySelector(".fechar");
var imagem = document.querySelector(".bolo")
var nome1 = document.getElementById("name1")
var comp = document.querySelector(".comp")
var bot = document.getElementById("bot");


function getBase64Image(img) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}

function load(){

    // fetch("http://10.87.207.4:5000/bolo")
    fetch("http://localhost:5000/bolo")
    
    .then(res => { return res.json() })
    .then(data => {
        
        // let imagem = document.querySelectorAll('.img')
        // let nome = document.querySelectorAll('.nome')
        data.forEach((item, index) => {
            var foto = item.img
            
            image64 = foto;
            imgData = getBase64Image(image64);
            localStorage.setItem("imgData", imgData);
            // localStorage.setItem("imagem", JSON.stringify(data[0]));
            // localStorage.setItem("nome1", JSON.stringify(data[0]));

            // imagem.src = dados.img
            // console.log(item.imagem)
            // nome1.innerHTML = dados.nome
        })
    })
    
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
    let clonePagina2 = pagina.cloneNode(true);
    clonePagina.id = "copiaBloco";
    clonePagina2.id = "copiaBloco2";
    
    document.body.appendChild(clonePagina);
    document.body.appendChild(clonePagina2);

    
}

function compra(data) {
    
    
    
    let produto = document.createElement("div");
    produto.setAttribute("class", "prod")

    var dataImage = localStorage.getItem('imgData');
    boli = document.querySelector('.prod');
    boli.src = "data:image/png;base64," + dataImage;


    comp.appendChild(produto)
    
}

function modales() {
    modal.style.display = "block"
}

img.addEventListener("click", () => {
    modal.style.display = "none"
})


function show() {
    menu.style.display = "block";
}


img1.addEventListener("click", () => {
    menu.style.display = "none"
})





const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}

function carrinho() { 
    compras.style.display = "flex"

    fechar.addEventListener("click", () => {
        compras.style.display = "none"
    })
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