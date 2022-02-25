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

    var cartaod = document.getElementById("cartao_d");
    var cartaoc = document.getElementById("cartao_c");
    
    if(e.checked == true) {
        cartaod.visibility = "visible";
        cartaod.style.display = "grid";

        cartaoc.visibility = "visible";
        cartaoc.style.display = "grid";
    } else {
        cartaod.visibility = "hidden";
        cartaod.style.display = "none";

        cartaoc.visibility = "hidden";
        cartaoc.style.display = "none";
    }
}