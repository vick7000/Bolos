let prox = document.getElementById("#prox");
let vol = document.getElementById("#vol");

const bolo = document.querySelector(".bolo");
const pagamento = document.querySelector(".pagamento");
const confirmacao = document.querySelector(".confirmacao");

var atual = 1;

function proximo() {
    if(atual < 3) atual++;

    if(atual == 1) {
        bolo.visibility = "visible";
        bolo.style.display = "flex";
    }else if(atual == 2) {
        bolo.visibility = "hidden";
        bolo.style.display = "none";
    
        pagamento.visibility = "visible";
        pagamento.style.display = "grid";
    }else if(atual == 3) {
        pagamento.visibility = "hidden";
        pagamento.style.display = "none";

        confirmacao.visibility = "visible";
        confirmacao.style.display = "flex";
    }

    // if($(bolo).is(':visible')) {
    //     let b1 = document.getElementById("b1");
    //     let b2 = document.getElementById("b2");

    //     bolo.style.visibility = "hidden";
    //     bolo.style.display = "none";

    //     pagamento.style.visibility = "visible";
    //     pagamento.style.display = "grid";

    //     b1.style.backgroundColor = "#7D5A5A";
    //     b2.style.backgroundColor = "#7D5A5A";
        
    // } else if ($(pagamento).is(':visible')) {
    //     pagamento.style.visibility = "hidden";
    //     pagamento.style.display = "none";

    //     confirmacao.style.visibility = "visible";
    //     confirmacao.style.display = "block";
    // }
}

function voltar() {
    // let b1 = document.getElementById("b1")
    // let b2 = document.getElementById("b2");

    // pagamento.style.visibility = "hidden";
    // pagamento.style.display = "none";

    // bolo.style.visibility = "visible";
    // bolo.style.display = "flex";

    // b1.style.backgroundColor = "#7D5A5A";
    // b2.style.backgroundColor = "#FAF2F2";
    if(atual >= 2) atual--;

    console.log(atual);

    if(atual == 1) {
        bolo.visibility = "visible";
        bolo.style.display = "flex";

        pagamento.visibility = "hidden";
        pagamento.style.display = "none";
    }else if(atual == 2) {
        bolo.visibility = "hidden";
        bolo.style.display = "none";
        
        confirmacao.visibility = "hidden";
        confirmacao.style.display = "none";
    
        pagamento.visibility = "visible";
        pagamento.style.display = "grid";
    }else if(atual == 3) {
        pagamento.visibility = "hidden";
        pagamento.style.display = "none";

        confirmacao.visibility = "visible";
        confirmacao.style.display = "flex";
    }
    
}

