$('#service').on('change', function() {
    var value = $(this)
      .children('option:selected')
      .val()
  
    if (value == 1) {
      $('#valor').html('<model-viewer src="assets/formato/bolocilindro.glb" camera-controls auto-rotate ar ios-src="assets/formato/bolocilindro.glb" /> <p><a href="./abolo.html">Escolher recheio<img src="./png/bx-cake.png" width="70" height="70"> <img src="./png/bxs-layer-plus.png" width="70" height="70"></a></p> ')
    } else if (value == 2) {
      $('#valor').html('<model-viewer src="assets/formato/boloretangulo.glb" camera-controls auto-rotate ar ios-src="assets/formato/boloretangulo.glb"/> <p><a href="./bbolo.html">Escolher recheio<img src="./png/bx-cake.png" width="70" height="70"> <img src="./png/bxs-layer-plus.png" width="70" height="70"></a></p>')
    } else if (value == 1.1) {
      $('#valor').html('<model-viewer src="assets/recheio/bolocilindro limao.glb" camera-controls auto-rotate ar ios-src="assets/recheio/bolocilindro limao.glb"/> <p><a href="./aabolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 1.2) {
      $('#valor').html('<model-viewer src="assets/recheio/bolocilindro choco.glb" camera-controls auto-rotate ar ios-src="assets/recheio/bolocilindro choco.glb"/> <p><a href="./aabolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 1.3) {
      $('#valor').html('<model-viewer src="assets/recheio/bolocilindro morango.glb" camera-controls auto-rotate ar ios-src="assets/recheio/bolocilindro morango.glb"/> <p><a href="./aabolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 1.4) {
      $('#valor').html('<model-viewer src="assets/recheio/bolocilindro baunilha.glb" camera-controls auto-rotate ar ios-src="assets/recheio/bolocilindro baunilha.glb"/> <p><a href="./aabolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 1.5) {
      $('#valor').html('<model-viewer src="assets/recheio/bolocilindro abacaxi.glb" camera-controls auto-rotate ar ios-src="assets/recheio/bolocilindro abacaxi.glb"/> <p><a href="./aabolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 2.1) {
      $('#valor').html('<model-viewer src="assets/recheio/boloretangulo limao.glb" camera-controls auto-rotate ar ios-src="assets/recheio/boloretangulo limao.glb"/> <p><a href="./bbbolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 2.2) {
      $('#valor').html('<model-viewer src="assets/recheio/boloretangulo choco.glb" camera-controls auto-rotate ar ios-src="assets/recheio/boloretangulo choco.glb"/> <p><a href="./bbbolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 2.3) {
      $('#valor').html('<model-viewer src="assets/recheio/boloretangulo morango.glb" camera-controls auto-rotate ar ios-src="assets/recheio/boloretangulo morango.glb"/> <p><a href="./bbbolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 2.4) {
      $('#valor').html('<model-viewer src="assets/recheio/boloretangulo baunilha.glb" camera-controls auto-rotate ar ios-src="assets/recheio/boloretangulo baunilha.glb"/> <p><a href="./bbbolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 2.5) {
      $('#valor').html('<model-viewer src="assets/recheio/boloretangulo abacaxi.glb" camera-controls auto-rotate ar ios-src="assets/recheio/boloretangulo abacaxi.glb"/> <p><a href="./bbbolo.html">Escolher cobertura<img src="./png/bxs-brush.png" width="70" height="70"> <img src="./png/bx-spray-can.png" width="70" height="70"></a></p>')
    } else if (value == 1.11) {
      $('#valor').html('<model-viewer src="assets/cobertura/bolocilindro  cobertura neon rosa.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/bolocilindro  cobertura neon rosa.glb"/> <p><a href="./bolo detalhes/r.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
    } else if (value == 1.21) {
      $('#valor').html('<model-viewer src="assets/cobertura/bolocilindro cobertura neon AZUL.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/bolocilindro cobertura neon AZUL.glb"/> <p><a href="./bolo detalhes/rr.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
    } else if (value == 1.31) {
      $('#valor').html('<model-viewer src="assets/cobertura/bolocilindro cobertura verao.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/bolocilindro cobertura verao.glb"/> <p><a href="./bolo detalhes/rrr.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
    } else if (value == 1.41) {
      $('#valor').html('<model-viewer src="assets/cobertura/bolocilindro cobertura floresta.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/bolocilindro cobertura floresta.glb"/> <p><a href="./bolo detalhes/rrrr.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
    } else if (value == 1.51) {
      $('#valor').html('<model-viewer src="assets/cobertura/bolocilindro cobertura Ciasto.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/boloretangulo ciasto.glb"/> <p><a href="./bolo detalhes/rrrrr.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
    } else if (value == 2.11) {
      $('#valor').html('<model-viewer src="assets/cobertura/boloretangulo cobertura neon ROSA.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/boloretangulo cobertura neon ROSA.glb"/> <p><a href="./bolo detalhes/1q.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
    } else if (value == 2.21) {
      $('#valor').html('<model-viewer src="assets/cobertura/boloretangulo cobertura neon azul.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/boloretangulo cobertura neon azul.glb"/> <p><a href="./bolo detalhes/2q.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
    } else if (value == 2.31) {
      $('#valor').html('<model-viewer src="assets/cobertura/boloretangulo cobertura verao.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/boloretangulo cobertura verao.glb"/> <p><a href="./bolo detalhes/3q.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
    } else if (value == 2.41) {
      $('#valor').html('<model-viewer src="assets/cobertura/boloretangulo cobertura floresta.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/boloretangulo cobertura floresta.glb"/> <p><a href="./bolo detalhes/4q.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
    } else if (value == 2.51) {
      $('#valor').html('<model-viewer src="assets/cobertura/boloretangulo ciasto.glb" camera-controls auto-rotate ar ios-src="assets/cobertura/boloretangulo ciasto.glb"/> <p><a href="./bolo detalhes/5q.html">Ecolher confeite do bolo<img src="./png/bxs-magic-wand.png" width="70" height="70"> <img src="./png/bx-bookmark-alt-plus.png" width="70" height="70"></a></p>')
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