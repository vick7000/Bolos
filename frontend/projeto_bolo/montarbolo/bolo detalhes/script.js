var id_config;

$('#service').on('change', function () {
  var value = $(this)
    .children('option:selected')
    .val()

  if (value == 1) {
    $('#valor').html('<model-viewer src="assets/formato/bolocilindro.glb" camera-controls auto-rotate ar ios-src="assets/formato/bolocilindro.glb" /> <p><a href="./abolo.html">Escolher recheio<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p> ')

  } else if (value == 10) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo rosa mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo rosa brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 60
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    }) 
  } else if (value == 16) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo rosa brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo rosa brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 59
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  } else if (value == 11) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo azul mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo azul mirtilo.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 58
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  } else if (value == 17) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo azul brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo azul brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 57
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  } else if (value == 12) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo verao mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo verao mirtilo.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 52
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })
  
  } else if (value == 18) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo verao brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo verao brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 51
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  } else if (value == 13) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo floresta mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo floresta mirtilo.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 54
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })
  
  } else if (value == 19) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo floresta brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo floresta brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 53
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })
  
  } else if (value == 14) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo ciasto mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo ciasto mirtilo.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 56
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })
  
  } else if (value == 20) {
    $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo ciasto brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo ciasto brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 55
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  } 
  
  //CILINDRO
  else if (value == 21) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro rosa mirtiloo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro neon rosa mirtiloo.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
  
  
  } else if (value == 22) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro rosa brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro rosa brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 9
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  } else if (value == 23) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro neon azul mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro neon azul mirtilo.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 8
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })
  
  } else if (value == 24) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro azul brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro azul brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 7
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  } else if (value == 25) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro verao mirtiloo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro verao mirtiloo.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 2
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })
  
  } else if (value == 26) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro verao brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro verao brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 1
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  } else if (value == 27) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro neon floresta mirtiloo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro neon floresta mirtiloo.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 4
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })
  
  } else if (value == 28) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro floresta brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro floresta brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 3
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  } else if (value == 29) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro ciasto mirtiloo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro ciasto brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 6
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })
  
  } else if (value == 30) {
    $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro ciasto brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro ciasto brigadeiro.glb"/> <p><a href="../../../home/index.html">Enviar bolo para o carrinho e voltar para home<img src="./png/bx-badge-check.png" width="70" height="70"> <img src="./png/bx-cart-add.png" width="70" height="70"></a></p>')
    id_config = 5
    fetch("http://localhost:5000/config/" + id_config)
    .then(res => { return res.json() })
    .then((data) => {
      localStorage.setItem("userConfig", JSON.stringify(data));
      
    })

  }
})


function verificarLogin() {
  let username = JSON.parse(localStorage.getItem("userdata"));
  let user = document.getElementById("user");
  let login = document.getElementById("login");
  // let user2 = document.getElementById("user2");
  // let login2 = document.getElementById("login2"); 
  let sair = document.getElementById("sair");
  let carrinho = document.getElementById("carrinho");
  let carrmob = document.querySelector(".carrmob");
  // let sair2 = document.querySelector(".sair2");

  if(username != null) {
      user.style.display = "block";
      login.style.display = "none";
      // user2.style.display = "block";
      // login2.style.display = "none";
      sair.style.display = "block";
      carrinho.style.display = "block";
      // carrmob.style.display = "block";
      // sair2.style.display = "block";

      user.innerHTML = username[0].nome;
      user.setAttribute('href', '../usuario/index.html');
      // user2.innerHTML = username[0].nome;
      // user2.setAttribute('href', '../usuario/index.html');
  } else {
      user.style.display = "none";
      login.style.display = "flex";
      user.style.display = "none";
      login.style.display = "flex";
      sair.style.display = "none";
      carrinho.style.display = "none";
      // carrmob.style.display = "none";
      // sair2.style.display = "none";
  }

}










