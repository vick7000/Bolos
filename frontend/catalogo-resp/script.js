var modal = document.querySelector(".modal")
var menu = document.querySelector(".menu")
var img = document.querySelector(".x");
var img1 = document.querySelector(".a");

function load(){
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

    // clonePagina
    let item1 = document.createElement("div")
    let item2 = document.createElement("div")
    let card1 = document.createElement("div")
    let card2 = document.createElement("div")
    let parg1 = document.createElement("h1")
    let parg2 = document.createElement("h1")

    // clonePagina2
    let item06 = document.createElement("div")
    let item07 = document.createElement("div")
    let card3 = document.createElement("div")
    let card4 = document.createElement("div")
    let parg3 = document.createElement("h1")
    let parg4 = document.createElement("h1")


    
    // clonePagina
    let img1 = document.createElement("img");
    img1.className = "bolo"
    img1.src = "../assets/01.png"
    parg1.className = "jil"
    parg1.innerHTML = "Bolo de alguma coisa"
    card1.className = "card"
    item1.className = "item1"


    let img2 = document.createElement("img");
    img2.className = "bolo"
    img2.src = "../assets/03.png"
    item2.className = "item11"
    card2.className = "card"
    parg2.className = "jil"
    parg2.innerHTML = "Bolo de alguma coisa"

    // clonePagina2
    let img01 = document.createElement("img");
    img01.className = "bolo1"
    img01.src = "../assets/05.png"
    item06.className = "item1"
    card3.className = "card"
    parg3.className = "jil"
    parg3.innerHTML = "Bolo de alguma coisa"

    let img02 = document.createElement("img");
    img02.className = "bolo1"
    img02.src = "../assets/07.png"
    item07.className = "item11"
    card4.className = "card"
    parg4.className = "jil"
    parg4.innerHTML = "Bolo de alguma coisa"

    
    // document.body.appendChild(clonePagina);
    // document.body.appendChild(clonePagina2);
    //ClonePagina
    card1.appendChild(img1)
    card1.appendChild(parg1)
    console.log(card1)
    
    // card1.appendChild(parg1)
    card2.appendChild(img2)
    card2.appendChild(parg2)

    item1.appendChild(card1);
    item2.appendChild(card2);
    
    //ClonePagina2
    card3.appendChild(img01)
    card3.appendChild(parg3)
    
    card4.appendChild(img02)
    card4.appendChild(parg4)
    console.log(card4)

    item06.appendChild(card3);
    item07.appendChild(card4);

    clonePagina.appendChild(item1)
    clonePagina.appendChild(item2)

    clonePagina2.appendChild(item06) 
    clonePagina2.appendChild(item07) 
    console.log(clonePagina)


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