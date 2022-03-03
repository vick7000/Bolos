// tags
var mod = document.querySelector(".modal");
var img = document.querySelector(".x");
var div1 = document.querySelector(".pessoal");
var div2 = document.querySelector(".endereco");
var div3 = document.querySelector(".pagamentos");
var cadastrar = document.getElementById("sign");

// Cadastro
var nome = document.getElementById("nome");
var cadEmail = document.getElementById("cadEmail");
var cadSenha = document.getElementById("senha");
var rua = document.getElementById("rua");
var bairro = document.getElementById("bairro");
var cep = document.getElementById("cep");
var complemento = document.getElementById("comp"); //nao obrigatório
var nomeTitular = document.getElementById("titular");
var numeroCartao = document.getElementById("numero");
var dataEmissao = document.getElementById("emissao");
var validade = document.getElementById("validade");
var codigo = document.getElementById("cod");
var pix = document.getElementById("pix");

// Login
var email = document.getElementById("email");
var senha = document.getElementById("psw");
var logar = document.getElementById("btn");


function caad(){
    mod.style.display = "block";

}
img.addEventListener("click", () => {
    mod.style.display = "none"
})

function login (){

}



function O (){
    window.location.href = "../usuario/index.html"
}