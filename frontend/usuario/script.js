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

function login(){
    let user = document.getElementById("user");
    let login = document.getElementById("login");
    let user2 = document.getElementById("user2");
    let login2 = document.getElementById("login2"); 
    let sair = document.getElementById("sair");
    let carrinho = document.getElementById("carrinho");
    let carrmob = document.querySelector(".carrmob");
    let sair2 = document.querySelector(".sair2");
    let username = JSON.parse(localStorage.getItem("userdata"));

    if(username != null) {
        user.style.display = "block";
        login.style.display = "none";
        user2.style.display = "block";
        login2.style.display = "none";
        sair.style.display = "block";
        carrinho.style.display = "block";
        carrmob.style.display = "block";
        sair2.style.display = "block";

        user.innerHTML = username[0].nome;
        user.setAttribute('href', '../usuario/index.html');
        user2.innerHTML = username[0].nome;
        user2.setAttribute('href', '../usuario/index.html');
    } else {
        user.style.display = "none";
        login.style.display = "flex";
        user.style.display = "none";
        login.style.display = "flex";
        sair.style.display = "none";
        carrinho.style.display = "none";
        carrmob.style.display = "none";
        sair2.style.display = "none";
    }
    
}

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
        complemento: complemento.value
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

