let prox = document.getElementById("#prox");
var vol = document.getElementById("vol");


const pro = document.querySelector(".pro");
const bolo = document.querySelector(".bolo");
var boli = document.querySelector(".boli");
var pagamento = document.querySelector(".pagamento");
var pagimento = document.querySelector(".pagimento");
const confirmacao = document.querySelector(".confirmacao");
var confirm = document.querySelector(".confirm");
var opcaoMob = document.querySelector(".opcaoMob");
var fim = document.querySelector(".fim");
const final = document.querySelector(".final");
var check = document.getElementById("check");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");
var check4 = document.getElementById("check4");
var check5 = document.getElementById("check5");
var check6 = document.getElementById("check6");
var check7 = document.getElementById("check7");
var check8 = document.getElementById("check8");

var chave = document.getElementById("chave");
var baixar = document.getElementById("baixar");
var extra = document.querySelector(".extra");

var atual = 1;

function proximo() {

  if (atual <= 4) atual++;

  if (atual == 1) {

    bolo.visibility = "visible";
    bolo.style.display = "flex";
    boli.visibility = "visible";
    boli.style.display = "flex";


  } else if (check3.checked == true && check4.checked == true) {
    alert("Desmarque uma das opções")
    atual--
  } else if (check2.checked == true && check3.checked == true) {
    alert("Desmarque uma das opções")
    atual--
  } else if (check.checked == true && check4.checked == true) {
    alert("Desmarque uma das opções")
    atual--
  } else if (check.checked == true && check3.checked == true) {
    alert("Desmarque uma das opções")
    atual--
  } else if (check2.checked == true && check4.checked == true) {
    alert("Desmarque uma das opções")
    atual--
  } else if (atual == 2) {

    let b2 = document.getElementById("b2");

    bolo.visibility = "hidden";
    bolo.style.display = "none";
    boli.visibility = "hidden";
    boli.style.display = "none";

    pagamento.visibility = "visible";
    pagamento.style.display = "flex";
    pagimento.visibility = "visible";
    pagimento.style.display = "flex";
    pro.visibility = "hidden";
    pro.style.display = "none";


    b2.style.backgroundColor = "#7D5A5A";

  } else if (atual == 3) {
    let b3 = document.getElementById("b3");

    pagamento.visibility = "hidden";
    pagamento.style.display = "none";
    pagimento.visibility = "hidden";
    pagimento.style.display = "none";

    confirmacao.visibility = "visible";
    confirmacao.style.display = "flex";
    confirm.visibility = "visible";
    confirm.style.display = "flex";

    b3.style.backgroundColor = "#7D5A5A";


    loadGallery();

  } else if (atual == 4) {
    let b4 = document.getElementById("b4");

    confirmacao.visibility = "hidden";
    confirmacao.style.display = "none";
    confirm.visibility = "hidden";
    confirm.style.display = "none";

    final.visibility = "visible";
    final.style.display = "flex";
    fim.visibility = "visible";
    fim.style.display = "flex";

    b4.style.backgroundColor = "#7D5A5A";
  }

}

function voltar() {
  if (atual >= 2) atual--;

  console.log(atual);

  if (atual == 1) {

    let b2 = document.getElementById("b2");

    bolo.visibility = "visible";
    bolo.style.display = "flex";
    boli.visibility = "visible";
    boli.style.display = "flex";

    pagamento.visibility = "hidden";
    pagamento.style.display = "none";
    pagimento.visibility = "hidden";
    pagimento.style.display = "none";

    b2.style.backgroundColor = "#FAF2F2";
  } else if (atual == 2) {
    let b3 = document.getElementById("b3");

    bolo.visibility = "hidden";
    bolo.style.display = "none";
    boli.visibility = "hidden";
    boli.style.display = "none";

    confirmacao.visibility = "hidden";
    confirmacao.style.display = "none";

    pagamento.visibility = "visible";
    pagamento.style.display = "flex";
    pagimento.visibility = "visible";
    pagimento.style.display = "flex";

    confirmacao.visibility = "hidden";
    confirmacao.style.display = "none";
    confirm.visibility = "hidden";
    confirm.style.display = "none";

    b3.style.backgroundColor = "#FAF2F2";

  } else if (atual == 3) {
    pagamento.visibility = "hidden";
    pagamento.style.display = "none";

    confirmacao.visibility = "visible";
    confirmacao.style.display = "flex";
    confirm.visibility = "visible";
    confirm.style.display = "flex";
  }
}

function options(e) {

  var cartaod = document.getElementById("cartao_d");
  var cartaoc = document.getElementById("cartao_c");
  var cartaod2 = document.getElementById("cartao_d2");
  var cartaoc2 = document.getElementById("cartao_c2");

  if (check.checked == true) {
    cartaod.visibility = "visible";
    cartaod.style.display = "grid";

  } else {
    cartaod.visibility = "hidden";
    cartaod.style.display = "none";
  }

  if (check5.checked == true) {
    cartaod2.visibility = "visible";
    cartaod2.style.display = "grid";

  } else {
    cartaod2.visibility = "hidden";
    cartaod2.style.display = "none";
  }

  if (check2.checked == true) {
    cartaoc.visibility = "visible";
    cartaoc.style.display = "grid";
  } else {
    cartaoc.visibility = "hidden";
    cartaoc.style.display = "none";
  }

  if (check6.checked == true) {
    cartaoc2.visibility = "visible";
    cartaoc2.style.display = "grid";
  } else {
    cartaoc2.visibility = "hidden";
    cartaoc2.style.display = "none";
  }

}

function adicionar() {
  let mcredito = document.querySelector(".mcredito");
  // let menuCartao = document.querySelector(".menuCartao");

  // menuCartao.visibility = "visible";
  // menuCartao.style.display = "flex";
  mcredito.visibility = "visible";
  mcredito.style.display = "block";
}

function cancelar() {
  let mcredito = document.querySelector(".mcredito");

  mcredito.visibility = "hidden";
  mcredito.style.display = "none";
}

function options2() {

  if (check3.checked == true || check4.checked == true || check7.checked == true || check8.checked == true) {
    pro.visibility = "visible";
    pro.style.display = "grid";

    vol.visibility = "hidden";
    vol.style.display = "none";
  } else if (check3.checked == false || check4.checked == false || check7.checked == false || check8.checked == false) {
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


  if (check2.checked == true && check.checked == false && check3.checked == false && check4.checked == false) {
    let cartao = document.getElementById("cartao_c");
    cartao.appendChild(salvo)

    salvo.appendChild(inf1);
    salvo.appendChild(inf2);
    salvo.appendChild(logo);

    mcredito.visibility = "hidden";
    mcredito.style.display = "none";
  } else if (check2.checked == false && check.checked == true && check3.checked == false && check4.checked == false) {
    let cartao2 = document.getElementById("cartao_d");
    cartao2.appendChild(salvo)

    salvo.appendChild(inf1);
    salvo.appendChild(inf2);
    salvo.appendChild(logo);

    mcredito.visibility = "hidden";
    mcredito.style.display = "none";
  } else if (check5.checked == true && check6.checked == false && check7.checked == false && check8.checked == false) {
    let cartao3 = document.getElementById("cartao_d2");
    cartao3.appendChild(salvo)

    salvo.appendChild(inf1);
    salvo.appendChild(inf2);
    salvo.appendChild(logo);

    mcredito.visibility = "hidden";
    mcredito.style.display = "none";
  } else if (check5.checked == false && check6.checked == true && check7.checked == false && check8.checked == false) {
    let cartao4 = document.getElementById("cartao_c2");
    cartao4.appendChild(salvo)

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


      if (check2.checked == true && check.checked == false && check5.checked == false && check6.checked == false) {

        cartao_c.style.backgroundColor = "transparent";
        cartao_c.style.overflow = "hidden";

        bc.visibility = "hidden"
        bc.style.display = "none";

        block.visibility = "visible"
        block.style.display = "flex"

        pro.visibility = "visible";
        pro.style.display = "flex";

        vol.visibility = "hidden";
        vol.style.display = "none";

      } else if (check.checked == true && check2.checked == false && check5.checked == false && check6.checked == false) {

        cartao_d.style.backgroundColor = "transparent";
        cartao_d.style.overflow = "hidden";

        bd.visibility = "hidden"
        bd.style.display = "none";

        salvo.visibble = true;
        salvo.style.display = "inline";

        pro.visibility = "visible";
        pro.style.display = "flex";

        vol.visibility = "hidden";
        vol.style.display = "none";

      } else if (check.checked == false && check2.checked == false && check5.checked == true && check6.checked == false) {

        cartao_d2.style.backgroundColor = "transparent";
        cartao_d2.style.overflow = "hidden";

        bd.visibility = "hidden"
        bd.style.display = "none";

        salvo.visibble = true;
        salvo.style.display = "inline";

        pro.visibility = "visible";
        pro.style.display = "flex";

        vol.visibility = "hidden";
        vol.style.display = "none";
      } else if (check.checked == false && check2.checked == false && check5.checked == false && check6.checked == true) {
        cartao_c2.style.backgroundColor = "transparent";
        cartao_c2.style.overflow = "hidden";

        bc.visibility = "hidden"
        bc.style.display = "none";

        block.visibility = "visible"
        block.style.display = "flex"

        pro.visibility = "visible";
        pro.style.display = "flex";

        vol.visibility = "hidden";
        vol.style.display = "none";
      } else if (check.checked == true && check2.checked == true) {
        alert("Desmarque uma das opções")
        block.remove();
        cancel.remove();
        salvo.style.marginTop = "10px";
      }

      document.getElementById("cancel").addEventListener('click', event => {

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
      tileItem.style.background = "url(" + imgObject[i] + ")";
      tilesContainer.appendChild(tileItem);
    }
  };
}
var pedidos = localStorage.getItem("imgData");

let imgObject = [
  // "../assets/bboloCFM.png",
   pedidos,
  
  "../assets/z.png",
];

let textObject = [
  {
    forma: 'Redondo',
    recheio: 'Limão',
    cobertura: 'Ocenao Neon',
    valor: 'R$ 123,20',
  },
  {
    forma: 'Quadrado',
    recheio: 'Morango',
    cobertura: 'Chocolate',
    valor: 'R$ 219,99',
  },
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
  // mainView3.style.background = "url(" + imgObject[mainImg] + ")";
  document.getElementById("texto").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor;
  console.log("teste")
  if (check.checked == true || check5.checked == true) {

    document.getElementById("texto2").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Cartão de Débito";
    // document.getElementById("texto3").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Cartão de Débito";

    extra.style.display = "none";
    chave.style.display = "none";
    baixar.style.display = "none";
  } else if (check2.checked == true || check6.checked == true) {

    document.getElementById("texto2").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Cartão de Crédito";
    // document.getElementById("texto3").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Cartão de Crédito";

    extra.style.display = "none";
    chave.style.display = "none";
    baixar.style.display = "none";
  } else if (check3.checked == true || check7.checked == true) {
    document.getElementById("texto2").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Pix";
    // document.getElementById("texto3").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Pix";

    // chave.style.display = "flex";
    // baixar.style.display = "none";
  } else if (check4.checked == true || check8.checked == true) {
    document.getElementById("texto2").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Boleto Bancário";
    // document.getElementById("texto3").innerHTML = "Forma : " + textObject[mainText].forma + "<br>" + "<br>" + "Recheio : " + textObject[mainImg].recheio + "<br>" + "<br>" + "Cobertura : " + textObject[mainImg].cobertura + "<br>" + "<br>" + "Preço : " + textObject[nextImg].valor + "<br>" + "<br>" + "Forma de Pagamento : " + "Boleto Bancário";

    // chave.style.display = "none";
    // baixar.style.display = "flex";
  }

  mainView.style.backgroundSize = "cover";
  mainView2.style.backgroundSize = "cover";
  // mainView3.style.backgroundSize = "cover";


  let leftView = document.getElementById("leftView");
  leftView.style.background = "url(" + imgObject[prevImg] + ")";
  leftView.style.backgroundSize = "cover";
  let leftView2 = document.getElementById("leftView2");
  leftView2.style.background = "url(" + imgObject[prevImg] + ")";
  leftView2.style.backgroundSize = "cover";
  // let leftView3 = document.getElementById("leftView3");
  // leftView3.style.background = "url(" + imgObject[prevImg] +")";
  // leftView3.style.backgroundSize = "cover"

  let rightView = document.getElementById("rightView");
  rightView.style.background = "url(" + imgObject[nextImg] + ")";
  rightView.style.backgroundSize = "cover";
  let rightView2 = document.getElementById("rightView2");
  rightView2.style.background = "url(" + imgObject[nextImg] + ")";
  rightView2.style.backgroundSize = "cover";
  // let rightView3 = document.getElementById("rightView3");
  // rightView3.style.background = "url(" + imgObject[nextImg] +")";
  // rightView3.style.backgroundSize = "cover";

};

function scrollRight() {
  prevText = mainText;
  mainText = nextText;

  prevImg = mainImg;
  mainImg = nextImg;
  if (nextImg >= (imgObject.length - 1)) {
    nextImg = 0;
    nextText = 0;
  } else {
    nextImg++;
    nextText++;
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
document.getElementById("navRight2").addEventListener("click", scrollRight);
document.getElementById("navLeft2").addEventListener("click", scrollLeft);
// document.getElementById("navRight3").addEventListener("click", scrollRight);
// document.getElementById("navLeft3").addEventListener("click", scrollLeft);

document.addEventListener('keyup', function (e) {
  if (e.keyCode === 37) {
    scrollLeft();
  } else if (e.keyCode === 39) {
    scrollRight();
  }
});

loadGallery();