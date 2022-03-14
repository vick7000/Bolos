let prox = document.getElementById("#prox");
var vol = document.getElementById("vol");

const pro = document.querySelector(".pro");
const bolo = document.querySelector(".bolo");
var pagamento = document.querySelector(".pagamento");
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
    let check = document.getElementById("check");
    let check2 = document.getElementById("check2");
    let check6 = document.getElementById("check6");

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


    if(check6.checked == true) {
        paypal.visibility = "visible";
        paypal.style.display = "grid";
        
    } else {
        paypal.visibility = "hidden";
        paypal.style.display = "none";

        pro.visibility = "hidden";
        pro.style.display = "none";
    
        
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
    let check6 = document.getElementById("check6");

    

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

             
    
        if(check2.checked == true && check.checked == false && check6.checked == false) {

            cartao_c.style.backgroundColor = "transparent";
            cartao_c.style.overflow = "hidden";
            

            bc.visibility = "hidden"
            bc.style.display = "none";

            

            pro.visibility = "visible";
            pro.style.display = "grid";

            vol.visibility = "hidden";
            vol.style.display = "none";

        } else if(check.checked == true && check2.checked == false && check6.checked == false) {
            

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

        } else if(check.checked == true && check2.checked == true && check6.checked == false || check.checked == true && check2.checked == true && check6.checked == true || check.checked == true && check2.checked == false && check6.checked == true || check.checked == false && check2.checked == true && check6.checked == true){
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
    } 

}