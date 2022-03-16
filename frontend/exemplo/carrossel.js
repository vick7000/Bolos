
    
function toggleState3() {
  let galleryView = document.getElementById("galleryView")
  let tilesView = document.getElementById("tilesView")
  let outer = document.getElementById("outer3");
  let slider = document.getElementById("slider3");
  let tilesContainer = document.getElementById("tilesContainer");
  if (slider.classList.contains("active")) {
    slider.classList.remove("active");
    outer.classList.remove("outerActive");
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex";
     
    for (let i = 0; i < imgObject.length - 1; i++) {
      let tileItem = document.createElement("div");
      let tile = document.createElement("div");
      tileItem.classList.add("tileItem");
      tile.classList.add("tile");
      tileItem.style.background =  "url(" + imgObject[i] + ")";
      tile.style.background = "url(" + textObject[i] + ")";
      tileItem.style.backgroundSize = "contain";  
      tilesContainer.appendChild(tileItem);
      tilesContainer.appendChild(tile);  
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
  "https://picsum.photos/id/5/450/450",
];

let textObject = {
  a: 'bolo',
  b: 'ar',
}
  
console.log(Object.values(textObject))

let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

let mainText = 0;
let prevText = textObject.length - 1
let nextText = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";

  let texto = document.getElementById("texto")
  texto.textContent = textObject[mainText]; ;

  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + textObject[prevText] + ")";
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + textObject[nextText] + ")";
  
  let linkTag = document.getElementById("linkTag")
  linkTag.href = imgObject[mainImg];

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



