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
    galleryView.style.display = "flex";
    tilesView.style.display = "none";
    
    
    while (tilesContainer.hasChildNodes()) {
      tilesContainer.removeChild(tilesContainer.firstChild)
      }  
  } else {
    slider.classList.add("active");
    outer.classList.add("outerActive");
    galleryView.style.display = "none";
    tilesView.style.display = "flex"
     
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
  "https://www.oetker.com.br/Recipe/Recipes/oetker.com.br/br-pt/baking/image-thumb__70184__RecipeDetailsLightBox/bolo-com-recheio-de-leite-em-po.jpg",
  "https://media.gazetadopovo.com.br/2022/03/01091229/bento-cake-960x540.jpeg",
  "https://www.tuacasa.com.br/wp-content/uploads/2020/11/bolo-aniversario-masculino-00.png",
  "https://i.pinimg.com/736x/56/28/e1/5628e1fd77a1b57ee06676e5d6a55bb5.jpg",
  "https://www.confeitariaxv.com.br/wp-content/uploads/sites/251/2016/07/IMG_3014.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfEQ2okUDfIyArfcJj3PghqyBCn6eQgU2EGQ&usqp=CAU",
  "https://img.elo7.com.br/product/zoom/2B5B92B/bolos-decorados-chocolate.jpg",
  "https://coolinary.com.br/wp-content/uploads/2020/09/Bolo-ilha-gelatina-8.jpg",
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
  document.getElementById("texto").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor;
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
  if (nextImg >= (imgObject.length -1)) {
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
   
  if (prevImg === 0 && prevText === 0) {
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