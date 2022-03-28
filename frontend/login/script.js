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
var tel = document.getElementById("tel");
var rua = document.getElementById("rua");
var num = document.getElementById("num");
var bairro = document.getElementById("bairro");
var cep = document.getElementById("cep");
var complemento = document.getElementById("comp"); //nao obrigatório
var nome_cartao = document.getElementById("titular");
var numero = document.getElementById("number");
var emissao = document.getElementById("dc");
var validade = document.getElementById("val");
var codigo = document.getElementById("codigo");
var pix = document.getElementById("pixis"); //nao obrigatório

// Login
var email = document.getElementById("email");
var senha = document.getElementById("psw");
var logar = document.getElementById("btn");


// Excluir
var pass = document.getElementById("psw1");
var confirm = document.getElementById("psw2");

function conection() {
    let data = JSON.stringify({
        email: email.value,
        senha: md5(senha.value),

    });

    const url = "http://localhost:3000/login";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        "body": data
    })
        .then(res => { return res.json() })
        .then(data => {
            if (data.length > 0) {
                localStorage.setItem("userdata", JSON.stringify(data[0]));
                window.location.href = "../home";
            } else {
                alert("Usuario ou senha incorretos")
            }
        });
}



async function cadas () {
    let data = JSON.stringify({
        nome: nome.value,
        email: cadEmail.value,
        senha: md5(cadSenha.value),
        telefone: tel.value,
        endereco: rua.value + " " + num.value + " " + bairro.value,
        cep: cep.value,
        complemento: complemento.value,
        nome_titular: nome_cartao.value,
        numero: numero.value,
        data_criacao: emissao.value,
        validade: validade.value,
        codigo: codigo.value,
        pix: pix.value,

    });
    await fetch("http://localhost:3000/usuario", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: data,
    })
        .then((resp) => {
            return resp.json();
        })
        .then((data) => {
            console.log(data)

            if (data.id !== undefined) {
                localStorage.setItem("userdata", JSON.stringify(data));
                window.location.href = "../home";

            } else {
                alert("Falha ao cadastrar");

            }

        });
}

function caad() {
    mod.style.display = "block";

}

dele.addEventListener("click", () => {
    mod2.style.display = "block";
})


excluir.addEventListener("click", () => {
    if (psw1.innerHTML === psw2.innerHTML) {
        //estrutura para a exclusão
    }
})

img.addEventListener("click", () => {
    mod.style.display = "none"

})
im.addEventListener("click", () => {
    mod2.style.display = "none"
})




function O() {
    window.location.href = "../usuario/index.html"
}