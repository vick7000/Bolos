// Alterar
var nome = document.getElementById("nome");
var cadEmail = document.getElementById("email");
var cadSenha = document.getElementById("senha");
var rua = document.getElementById("rua");
var tel = document.getElementById("tel");
var numero = document.getElementById("num");
var bairro = document.getElementById("bairro");
var cep = document.getElementById("cep");
var complemento = document.getElementById("comp"); //nao obrigatório

var nome_cartao = document.getElementById("titular");
var numero = document.getElementById("number");
var emissao = document.getElementById("dc");
var validade = document.getElementById("val");
var codigo = document.getElementById("codigo");
var pix = document.getElementById("pixis"); //nao obrigatório

var mod2 = document.querySelector(".modal2");
var im = document.getElementById("aa");

//delete
var dele = document.getElementById("del");
var excluir = document.getElementById("ex");

// Excluir
var pass = document.getElementById("psw1");
var confirm = document.getElementById("psw2");

// alterar

const host = JSON.parse(localStorage.getItem("userdata"))
// console.log(host[0].id)
// console.log(host)

// function load(){

// }

function sair () {
    localStorage.clear()
    alert("Deslogado com sucesso")
    window.location.href = "../login"
}

async function alterando () {
    let data = {
        nome: nome.value,
        email: cadEmail.value,
        senha: md5(cadSenha.value),
        telefone: tel.value,
        endereco: rua.value + " - " + num.value + " - " + bairro.value,
        cep: cep.value,
        complemento: complemento.value,
        nome_titular: nome_cartao.value,
        numero: numero.value,
        data_criacao: emissao.value,
        validade: validade.value,
        codigo: codigo.value,
        pix: pix.value,

    };
    console.log(data)
    
    await fetch("http://localhost:5000/usuario/" + host[0].id, {
        method: "PUT",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        
    })
    
        .then((resp) => {
            

            return resp.json();
            
        })
        .then((data) => {
            console.log(data)

            localStorage.setItem("userdata", JSON.stringify(data));
            window.location.href = "../home";
        });

    
}
 


im.addEventListener("click", () => {
    mod2.style.display = "none"
})

dele.addEventListener("click", () => {
    mod2.style.display = "block";
})


excluir.addEventListener("click", () => {
    if (psw1.innerHTML === psw2.innerHTML) {
        //estrutura para a exclusão
    }
})

