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

var chave = document.getElementById("chave");
var baixar = document.getElementById("baixar");
var extra = document.querySelector(".extra");

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

        
        loadGallery();

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


        if(check2.checked == true && check.checked == false && check3.checked == false && check4.checked == false) {
            let cartao = document.getElementById("cartao_c");
            cartao.appendChild(salvo)
        
            salvo.appendChild(inf1);
            salvo.appendChild(inf2);
            salvo.appendChild(logo);
        
            mcredito.visibility = "hidden";
            mcredito.style.display = "none";
        } else if(check2.checked == false && check.checked == true && check3.checked == false && check4.checked == false){
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

          block.visibility = "visible"
          block.style.display = "flex"

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

  
function toggleState3() {
  let galleryView = document.getElementById("galleryView");
  let galleryView2 = document.getElementById("galleryView2")
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
  "../assets/11.png",
];

  let textObject =[
    {
      forma: 'Delicia Leite II',
      valor: 'R$ 10,90',
    },
    // {
    //   forma: 'quadrado',
    //   recheio: 'Morango',
    //   cobertura: 'Caramelo',
    //   valor: 'R$ 15,50',
    // },
    // {
    //   forma: 'pirâmide',
    //   recheio: 'Prestigio',
    //   cobertura: 'coco ralado',
    //   valor: 'R$ 20,00',
    // },
    // {
    //   forma: 'tubo',
    //   recheio: 'Macarrão',
    //   cobertura: 'Tomate',
    //   valor: 'R$ 10,90',
    // },
    // {
    //   forma: 'redondo',
    //   recheio: 'Chocolate',
    //   cobertura: 'Chocolate',
    //   valor: 'R$ 5,50',
    // },
    // {
    //   forma: 'redondo',
    //   recheio: 'Chocolate',
    //   cobertura: 'Chocolate',
    //   valor: 'R$ 5,50',
    // },
    // {
    //   forma: 'redondo',
    //   recheio: 'Chocolate',
    //   cobertura: 'Chocolate',
    //   valor: 'R$ 5,50',
    // },
    // {
    //   forma: 'redondo',
    //   recheio: 'Chocolate',
    //   cobertura: 'Chocolate',
    //   valor: 'R$ 5,50',
    // },
    // {
    //   forma: 'redondo',
    //   recheio: 'Chocolate',
    //   cobertura: 'Chocolate',
    //   valor: 'R$ 5,50',
    // },
    // {
    //   forma: 'redondo',
    //   recheio: 'Chocolate',
    //   cobertura: 'Chocolate',
    //   valor: 'R$ 5,50',
    // },
    // {
    //   forma: 'redondo',
    //   recheio: 'Chocolate',
    //   cobertura: 'Chocolate',
    //   valor: 'R$ 5,50',
    // },
  ]
    
let mainImg = 0;
let prevImg = imgObject.length - 1;
let nextImg = 1;

let mainText = 0;
let prevText = textObject.length - 1;
let nextText = 1;

function loadGallery() {

  let mainView = document.getElementById("mainView");
  let mainView2 = document.getElementById("mainView2");
  let mainView3 = document.getElementById("mainView3");
  mainView.style.background = "url(" + imgObject[mainImg] + ")";
  mainView2.style.background = "url(" + imgObject[mainImg] + ")";
  mainView3.style.background = "url(" + imgObject[mainImg] + ")";
  mainView.style.backgroundSize = "330px";
  mainView2.style.backgroundSize = "330px";
  mainView3.style.backgroundSize = "cover";
  document.getElementById("texto").innerHTML = "Nome : " + textObject[mainText].forma + "<br>" + "<br>" + "Preço : " + textObject[mainText].valor;
  console.log("teste")
  if (check.checked == true) {

    document.getElementById("texto2").innerHTML = "Nome : " + textObject[mainText].forma + "<br>" + "<br>" + "Preço : " + textObject[mainText].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Cartão de Débito";
    document.getElementById("texto3").innerHTML = "Nome : " + textObject[mainText].forma + "<br>" + "<br>" + "Preço : " + textObject[mainText].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Cartão de Débito";
  
    extra.style.display = "none";
    chave.style.display = "none";
    baixar.style.display = "none";
  } else if(check2.checked == true) {

    document.getElementById("texto2").innerHTML = "Nome : " + textObject[mainText].forma + "<br>" + "<br>" + "Preço : " + textObject[mainText].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Cartão de Crédito";
    document.getElementById("texto3").innerHTML = "Nome : " + textObject[mainText].forma + "<br>" + "<br>" + "Preço : " + textObject[mainText].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Cartão de Crédito";
  
    extra.style.display = "none";
    chave.style.display = "none";
    baixar.style.display = "none";
  } else if (check3.checked == true) {
    document.getElementById("texto2").innerHTML = "Nome : " + textObject[mainText].forma + "<br>" + "<br>" + "Preço : " + textObject[mainText].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Pix";
    document.getElementById("texto3").innerHTML = "Nome : " + textObject[mainText].forma + "<br>" + "<br>" + "Preço : " + textObject[mainText].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Pix";
  
    chave.style.display = "flex";
    baixar.style.display = "none";
  } else if(check4.checked == true) {
    document.getElementById("texto2").innerHTML = "Nome : " + textObject[mainText].forma + "<br>" + "<br>" + "Preço : " + textObject[mainText].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Boleto Bancário";
    document.getElementById("texto3").innerHTML = "Nome : " + textObject[mainText].forma + "<br>" + "<br>" + "Preço : " + textObject[mainText].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Boleto Bancário";
 
    chave.style.display = "none";
   baixar.style.display = "flex";
  }
  
 


  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] +")";
  leftView.style.backgroundSize = "cover";
  let leftView2 = document.getElementById("leftView2");
  leftView2.style.background = "url(" + imgObject[prevImg] +")";
  leftView2.style.backgroundSize = "cover";
  let leftView3 = document.getElementById("leftView3");
  leftView3.style.background = "url(" + imgObject[prevImg] +")";
  leftView3.style.backgroundSize = "cover"
  
  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] +")";
  rightView.style.backgroundSize = "cover";
  let rightView2 = document.getElementById("rightView2");
  rightView2.style.background = "url(" + imgObject[nextImg] +")";
  rightView2.style.backgroundSize = "cover";
  let rightView3 = document.getElementById("rightView3");
  rightView3.style.background = "url(" + imgObject[nextImg] +")";
  rightView3.style.backgroundSize = "cover";
  
};

// function scrollRight() {
//   prevText = mainText;
//   mainText = nextText;

//   prevImg = mainImg;
//   mainImg = nextImg;
//   if (nextImg >= (imgObject.length -1)) {
//     nextImg = 0;
//     nextText = 0;
//   } else {
//     nextImg++;
//     nextText ++;
//   }; 
//   loadGallery();
// };

// function scrollLeft() {
//   nextText = mainText;
//   mainText = prevText;

//   nextImg = mainImg;
//   mainImg = prevImg;
   
//   if (prevImg === 0 && prevText === 0) {
//     prevImg = imgObject.length - 1;
//     prevText = textObject.length - 1;
    
//   } else {
//     prevImg--;
//     prevText--;
//   };
//   loadGallery();
// };

// document.getElementById("navRight").addEventListener("click", scrollRight);
// document.getElementById("navLeft").addEventListener("click", scrollLeft);
// document.getElementById("navRight2").addEventListener("click", scrollRight);
// document.getElementById("navLeft2").addEventListener("click", scrollLeft);
// document.getElementById("navRight3").addEventListener("click", scrollRight);
// document.getElementById("navLeft3").addEventListener("click", scrollLeft);

// document.addEventListener('keyup',function(e){
//     if (e.keyCode === 37) {
//     scrollLeft();
//   } else if(e.keyCode === 39) {
//     scrollRight();
//   }
// });

loadGallery();