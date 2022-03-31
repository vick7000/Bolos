var modal = document.querySelector(".modal")
var menu = document.querySelector(".menu")
var img = document.querySelector(".x");
var img1 = document.querySelector(".a");

var imagem = document.querySelector(".bolo")
var nome1 = document.getElementById(".name1")


function load(){

    fetch("http://localhost:5000/bolo")
    
    .then(res => { return res.json() })
    .then(data => {
        console.log(data);
        data.forEach(dados => {
            
            imagem.src = dados.img
            
            nome1.innerHTML = dados.nome
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