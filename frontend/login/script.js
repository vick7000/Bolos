// tags
var mod = document.querySelector(".modal");
var img = document.getElementById("x");
var div1 = document.querySelector(".pessoal");
var div2 = document.querySelector(".endereco");
var div3 = document.querySelector(".pagamentos");
var cadastrar = document.getElementById("sign");


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




function conection() {
    let data = JSON.stringify({
        email: email.value,
        senha: md5(senha.value),

    });

    const url = "http://localhost:5000/login";

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
                localStorage.setItem("userdata", JSON.stringify(data));
                window.location.href = "../home";
            } else {
                alert("Usuario ou senha incorretos")
            }
        });
}



function cadas () {
    let data = {
        nome: nome.value,
        email: cadEmail.value,
        senha: md5(cadSenha.value),
        telefone: tel.value,
        endereco: rua.value + " " + num.value + " " + bairro.value,
        cep: cep.value,
        complemento: complemento.value

    };
    fetch("http://localhost:5000/usuario", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        
        
    })
    .then(res => res.json())
    .then(dados => {
        console.log(dados)
        if(dados != null){
            localStorage.setItem("userdata", JSON.stringify(data));
            window.location.href = "../home";
        }
    })
}

// function del (){
//     const id = id;

//     fetch("http://localhost:5000/usuario", {
//         method: "DELETE",
//         headers: {
//             "Content-Type" : "application/json",
//         },

//         }
//     )


// }
// .then((resp) => {
//     return resp.json();
// })
// .then((data) => {
//     console.log(data)
//     console.log(user.id)
//     if (data.id !== undefined) {
//         let user = data[0]
//         localStorage.setItem("id", user.id)
        
//         localStorage.setItem("userdata", JSON.stringify(data));
        

//     } else {
//         alert("Falha ao cadastrar");

//     }

// });

function caad() {
    mod.style.display = "block";

}

img.addEventListener("click", () => {
    mod.style.display = "none"

})

