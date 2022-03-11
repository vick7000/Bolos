// tags
var mod = document.querySelector(".modal");
var mod2 = document.querySelector(".modal2");
var img = document.getElementById("x");
var im = document.getElementById("aa");
var div1 = document.querySelector(".pessoal");
var div2 = document.querySelector(".endereco");
var div3 = document.querySelector(".pagamentos");
var cadastrar = document.getElementById("sign");
var dele = document.getElementById("del");
var excluir = document.getElementById("ex");

// Cadastro
var nome = document.getElementById("nome");
var cadEmail = document.getElementById("cadEmail");
var cadSenha = document.getElementById("senha");
var rua = document.getElementById("rua");
var bairro = document.getElementById("bairro");
var cep = document.getElementById("cep");
var complemento = document.getElementById("comp"); //nao obrigatório

// Login
var email = document.getElementById("email");
var senha = document.getElementById("psw");
var logar = document.getElementById("btn");


// Excluir
var pass = document.getElementById("psw1");
var confirm = document.getElementById("psw2");

function caad(){
    mod.style.display = "block";

}

dele.addEventListener("click", () => {
    mod2.style.display = "block";
})


excluir.addEventListener("click", () => {
    if(psw1.innerHTML == psw2.innerHTML){
        //estrutura para a exclusão
    }
})

img.addEventListener("click", () => {
    mod.style.display = "none"
    
})
im.addEventListener("click", () => {
    mod2.style.display = "none"
})


function login (){

}



function O (){
    window.location.href = "../usuario/index.html"
}