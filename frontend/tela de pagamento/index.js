let prox = document.getElementById("#prox");
var vol = document.getElementById("vol");

const pro = document.querySelector(".pro");
const bolo = document.querySelector(".bolo");
var pagamento = document.querySelector(".pagamento");
const confirmacao = document.querySelector(".confirmacao");
const final = document.querySelector(".final");
var check = document.getElementById("check");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");
var check4 = document.getElementById("check4");
var check5 = document.getElementById("check5");

var atual = 1;

function proximo() {

    if(atual <= 4) atual++;

    if(atual == 1) {
        
        bolo.visibility = "visible";
        bolo.style.display = "flex";


    } else if(check3.checked == true && check4.checked == true) {
        alert("Desmarque uma das opções")
        atual--
    } else if(check2.checked == true && check3.checked == true){
        alert("Desmarque uma das opções")
        atual--
    } else if(check.checked == true && check4.checked == true) {
        alert("Desmarque uma das opções")
        atual--
    } else if(check4.checked == true && check5.checked == true) {
        alert("Desmarque uma das opções")
        atual--
    } else if(check.checked == true && check5.checked == true) {
        alert("Desmarque uma das opções")
        atual--
    } else if(check2.checked == true && check5.checked == true) {
        alert("Desmarque uma das opções") 
        atual--
    } else if(check.checked == true && check3.checked == true) {
        alert("Desmarque uma das opções") 
        atual--
    } else if(check2.checked == true && check4.checked == true) {
        alert("Desmarque uma das opções") 
        atual--
    } else if(atual == 2) {
        
        let b2 = document.getElementById("b2");

        bolo.visibility = "hidden";
        bolo.style.display = "none";
    
        pagamento.visibility = "visible";
        pagamento.style.display = "grid";
        pro.vibility = "hidden";
        pro.style.display = "none";
        
       
        b2.style.backgroundColor = "#7D5A5A";

    }else if(atual == 3) {
        let b3 = document.getElementById("b3");

        pagamento.visibility = "hidden";
        pagamento.style.display = "none";

        confirmacao.visibility = "visible";
        confirmacao.style.display = "flex";

        b3.style.backgroundColor = "#7D5A5A";
    } else if (atual == 4){
        let b4 = document.getElementById("b4");

        confirmacao.visibility = "hidden";
        confirmacao.style.display = "none";

        final.visibility = "visible";
        final.style.display = "flex";

        b4.style.backgroundColor = "#7D5A5A";
    }
    
}

function voltar() {
    if(atual >= 2) atual--;

    console.log(atual);

    if(atual == 1) {
        
        let b2 = document.getElementById("b2");
        
        bolo.visibility = "visible";
        bolo.style.display = "flex";

        pagamento.visibility = "hidden";
        pagamento.style.display = "none";

        b2.style.backgroundColor = "#FAF2F2";
    }else if(atual == 2) {
        let b3 = document.getElementById("b3");

        bolo.visibility = "hidden";
        bolo.style.display = "none";
        
        confirmacao.visibility = "hidden";
        confirmacao.style.display = "none";
    
        pagamento.visibility = "visible";
        pagamento.style.display = "grid";
        
        b3.style.backgroundColor = "#FAF2F2";
        
    }else if(atual == 3) {
        pagamento.visibility = "hidden";
        pagamento.style.display = "none";

        confirmacao.visibility = "visible";
        confirmacao.style.display = "flex";
    }
}

function options(e) {

    var cartaod = document.getElementById("cartao_d");
    var cartaoc = document.getElementById("cartao_c");
    var paypal = document.getElementById("paypal")
    
    if(check.checked == true) {
        cartaod.visibility = "visible";
        cartaod.style.display = "grid";

    } else {
        cartaod.visibility = "hidden";
        cartaod.style.display = "none";
    }

    if(check2.checked == true) { 
        cartaoc.visibility = "visible";
        cartaoc.style.display = "grid";
    } else {
        cartaoc.visibility = "hidden";
        cartaoc.style.display = "none";
    }

    if(check5.checked == true) {
        paypal.visibility = "visible";
        paypal.style.display = "grid";
        
        vol.vibility = "hidden";
        vol.style.display = "none";
    } else {
        paypal.visibility = "hidden";
        paypal.style.display = "none";

        pro.visibility = "hidden";
        pro.style.display = "none";

        vol.vibility = "visible";
        vol.style.display = "flex";
    
    }
}

function adicionar() {
    let mcredito = document.querySelector(".mcredito");

    mcredito.visibility = "visible";
    mcredito.style.display = "flex";
}

function cancelar() {
    let mcredito = document.querySelector(".mcredito");

    mcredito.visibility = "hidden";
    mcredito.style.display = "none";
}

function options2() {

    if(check3.checked == true || check4.checked == true) {
        pro.visibility = "visible";
        pro.style.display = "grid";

        vol.visibility = "hidden";
        vol.style.display = "none";
    } else if (check3.checked == false || check4.checked == false) {
        pro.visibility = "hidden";
        pro.style.display = "none";

        vol.visibility = "visible";
        vol.style.display = "grid";
    } 

}


function AdicionarCartao() {
    let salvo = document.createElement("div");
    let inf1 = document.createElement("span");
    let inf2 = document.createElement("span");
    let logo = document.createElement("span");
    let mcredito = document.querySelector(".mcredito");
    

    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;

    salvo.setAttribute("class", "salvo");
    salvo.setAttribute("id", "salvo");
    inf1.setAttribute("id", "inf1");
    inf2.setAttribute("id", "inf2");
    logo.setAttribute("id", "logo");
    

    inf1.innerHTML = nome
    inf2.innerHTML = numero + " " + mes + "/" + ano
    logo.innerHTML = " "


        if(check2.checked == true && check.checked == false && check5.checked == false && check3.checked == false && check4.checked == false) {
            let cartao = document.getElementById("cartao_c");
            cartao.appendChild(salvo)
        
            salvo.appendChild(inf1);
            salvo.appendChild(inf2);
            salvo.appendChild(logo);
        
            mcredito.visibility = "hidden";
            mcredito.style.display = "none";
        } else if(check2.checked == false && check.checked == true  && check5.checked == false && check3.checked == false && check4.checked == false){
            let cartao2 = document.getElementById("cartao_d");
            cartao2.appendChild(salvo)
        
            salvo.appendChild(inf1);
            salvo.appendChild(inf2);
            salvo.appendChild(logo);
        
            mcredito.visibility = "hidden";
            mcredito.style.display = "none";


        } else {
            alert("Desmarque uma das opções")
        }

   document.querySelectorAll(".salvo").forEach(item => {
    
    
    let bc = document.getElementById("bc");
    let bd = document.getElementById("bd");
    
    
    item.addEventListener('click', event => {

        salvo.visibility = "visible";
        salvo.style.display = "inline";
        salvo.style.marginTop = 0;


        let block = document.createElement("div");
        let cancel = document.createElement("button");

        cancel.setAttribute("id", "cancel");
        cancel.textContent = "Cancelar";
        block.setAttribute("id", "block");

        pagamento.appendChild(block);
        pagamento.appendChild(cancel);

             
        if(check2.checked == true && check.checked == false) {

            cartao_c.style.backgroundColor = "transparent";
            cartao_c.style.overflow = "hidden";
            
            bc.visibility = "hidden"
            bc.style.display = "none";

            pro.visibility = "visible";
            pro.style.display = "grid";

            vol.visibility = "hidden";
            vol.style.display = "none";

        } else if(check.checked == true && check2.checked == false) {
            
            cartao_d.style.backgroundColor = "transparent";
            cartao_d.style.overflow = "hidden";
            
            bd.visibility = "hidden"
            bd.style.display = "none";

            salvo.visibble = true;
            salvo.style.display = "inline";
            
            pro.visibility = "visible";
            pro.style.display = "grid";

            vol.visibility = "hidden";
            vol.style.display = "none";

        } else if(check.checked == true && check2.checked == true){
            alert("Desmarque uma das opções")
            block.remove();
            cancel.remove();
            salvo.style.marginTop = "10px";
        } 
         
        document.getElementById("cancel").addEventListener('click', event =>{
        
           salvo.style.marginTop = "10px";

           block.remove();
        
            cartao_c.style.backgroundColor = "#FAF2F2";
            cartao_c.style.overflow = "auto";
        
            cartao_d.style.backgroundColor = "#FAF2F2";
            cartao_d.style.overflow = "auto";
            
            bc.visibility = "visible"
            bc.style.display = "grid";
        
            bd.visibility = "visible"
            bd.style.display = "grid";
        
            pro.visibility = "hidden";
            pro.style.display = "none";
        
            vol.visibility = "visible";
            vol.style.display = "flex";
        
            cancel.remove();
        })

    })
   })

}

function addConta() {
    if(window.confirm("Você abrirá a página de login do paypal, tem certeza?")) {
        window.open("https://www.paypal.com/signin");

        pro.visibility = "visible";
        pro.style.display = "grid";

        vol.visibility = "hidden";
        vol.style.display = "none";
    } 

}


    
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