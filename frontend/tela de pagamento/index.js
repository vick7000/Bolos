let prox = document.getElementById("#prox");
let vol = document.getElementById("#vol");

const bolo = document.querySelector(".bolo");
const pagamento = document.querySelector(".pagamento");
const confirmacao = document.querySelector(".confirmacao");
const final = document.querySelector(".final");


var atual = 1;

function proximo() {
    if(atual <= 4) atual++;

    if(atual == 1) {
        
        bolo.visibility = "visible";
        bolo.style.display = "flex";

    }else if(atual == 2) {
        
        let b2 = document.getElementById("b2");

        bolo.visibility = "hidden";
        bolo.style.display = "none";
    
        pagamento.visibility = "visible";
        pagamento.style.display = "grid";

       
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
    let check = document.getElementById("check");
    let check2 = document.getElementById("check2");
    

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

function AdicionarCartao() {
    let salvo = document.createElement("div");
    let inf1 = document.createElement("span");
    let inf2 = document.createElement("span");
    let logo = document.createElement("span");
    let mcredito = document.querySelector(".mcredito");
    let check = document.getElementById("check");
    let check2 = document.getElementById("check2");

    let nome = document.getElementById("nome").value;
    let numero = document.getElementById("numero").value;
    let mes = document.getElementById("mes").value;
    let ano = document.getElementById("ano").value;

    salvo.setAttribute("id", "salvo");
    inf1.setAttribute("id", "inf1");
    inf2.setAttribute("id", "inf2");
    logo.setAttribute("id", "logo");

    inf1.innerHTML = nome
    inf2.innerHTML = numero + " " + mes + "/" + ano
    logo.innerHTML = " "

    if(check2.checked == true && check.checked == false) {
    let cartao = document.getElementById("cartao_c");
    cartao.appendChild(salvo)

    salvo.appendChild(inf1);
    salvo.appendChild(inf2);
    salvo.appendChild(logo);

    mcredito.visibility = "hidden";
    mcredito.style.display = "none";
    } else if(check2.checked == false && check.checked == true){
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
}