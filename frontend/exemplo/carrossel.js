document.getElementById("outer3").addEventListener("click", toggleState3);
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      tileItem.classList.add("tileItem");
      tile.classList.add("tile");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tilesContainer.appendChild(tileItem);
    }
  };
}

let imgObject = [
  "https://cdn.folhape.com.br/img/pc/1100/1/dn_arquivo/2021/10/0910sa2120.jpg",
  "../assets/pedido.png",
  "https://placeimg.com/450/450/architecture",
  "https://placeimg.com/450/450/nature",
  "https://placeimg.com/450/450/people",
  "https://placeimg.com/450/450/tech",
  "https://picsum.photos/id/1/450/450",
  "https://picsum.photos/id/8/450/450",
  "https://picsum.photos/id/12/450/450",
  "https://picsum.photos/id/15/450/450",
];

let testeObject = [
  "Um belissimo bolo cortado",
  "../assets/pedido.png",
  "https://placeimg.com/450/450/architecture",
  "https://placeimg.com/450/450/nature",
  "https://placeimg.com/450/450/people",
  "https://placeimg.com/450/450/tech",
  "https://picsum.photos/id/1/450/450",
  "https://picsum.photos/id/8/450/450",
  "https://picsum.photos/id/12/450/450",
  "https://picsum.photos/id/15/450/450",
  "https://picsum.photos/id/5/450/450",
];



  let textObject =[
    {
      forma: 'redondo',
      recheio: 'Chocolate',
      cobertura: 'Chocolate',
      valor: 'R$ 5,50',
    },
    {
      forma: 'quadrado',
      recheio: 'Morango',
      cobertura: 'Caramelo',
      valor: 'R$ 15,50',
    },
    {
      forma: 'pirâmide',
      recheio: 'Prestigio',
      cobertura: 'coco ralado',
      valor: 'R$ 20,00',
    },
    {
      forma: 'tubo',
      recheio: 'Macarrão',
      cobertura: 'Tomate',
      valor: 'R$ 10,90',
    },
    {
      forma: 'redondo',
      recheio: 'Chocolate',
      cobertura: 'Chocolate',
      valor: 'R$ 5,50',
    },
    {
      forma: 'redondo',
      recheio: 'Chocolate',
      cobertura: 'Chocolate',
      valor: 'R$ 5,50',
    },
    {
      forma: 'redondo',
      recheio: 'Chocolate',
      cobertura: 'Chocolate',
      valor: 'R$ 5,50',
    },
    {
      forma: 'redondo',
      recheio: 'Chocolate',
      cobertura: 'Chocolate',
      valor: 'R$ 5,50',
    },
    {
      forma: 'redondo',
      recheio: 'Chocolate',
      cobertura: 'Chocolate',
      valor: 'R$ 5,50',
    },
    {
      forma: 'redondo',
      recheio: 'Chocolate',
      cobertura: 'Chocolate',
      valor: 'R$ 5,50',
    },
    {
      forma: 'redondo',
      recheio: 'Chocolate',
      cobertura: 'Chocolate',
      valor: 'R$ 5,50',
    },
  ]
    


let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

let mainText = 0;
let prevText = textObject.length - 1;
let nextText = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";
  document.getElementById("texto").innerHTML = "forma : " + textObject[mainImg].forma + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "Preço : " + textObject[nextImg].valor;
  mainView.style.backgroundSize = "cover";

  for (i = 0, i < textObject.length - 1; i++;) {
    let texto = document.getElementById("texto")

    console.log(textObject) 
    texto.textContent = (textObject.join(' '));
  }

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] +")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] +")";
  
};

function scrollRight() {
  prevText = mainText;
  mainText = nextText;

  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length -1) && nextText >= (textObject.length -1)) {
    nextImg = 0;
    nextText = 0;
  } else {
    nextImg++;
    nextText ++;
  }; 
  loadGallery();
};

function scrollLeft() {
  nextText = mainText;
  mainText = prevText;

  nextImg = mainImg;
  mainImg = prevImg;
   
  if (prevImg === 0 && prevText) {
    prevImg = imgObject.length - 1;
    prevText = textObject.length - 1;
  } else {
    prevImg--;
    prevText--;
  };
  loadGallery();
};

document.getElementById("navRight").addEventListener("click", scrollRight);
document.getElementById("navLeft").addEventListener("click", scrollLeft);
document.getElementById("rightView").addEventListener("click", scrollRight);
document.getElementById("leftView").addEventListener("click", scrollLeft);
document.addEventListener('keyup',function(e){
    if (e.keyCode === 37) {
    scrollLeft();
  } else if(e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();



