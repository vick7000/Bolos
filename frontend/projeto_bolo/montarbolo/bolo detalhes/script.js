$('#service').on('change', function() {
    var value = $(this)
      .children('option:selected')
      .val()
  
    if (value == 1) {
      $('#valor').html('<model-viewer src="assets/formato/bolocilindro.glb" camera-controls auto-rotate ar ios-src="assets/formato/bolocilindro.glb" /> <p><a href="./abolo.html">Escolher recheio</a></p> ')
    
    } else if (value == 10) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo rosa mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo rosa brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    } else if (value == 16) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo rosa brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo rosa brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    
    } else if (value == 11) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo azul mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo azul mirtilo.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    } else if (value == 17) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo azul brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo azul brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    
    } else if (value == 12) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo verao mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo verao mirtilo.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    } else if (value == 18) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo verao brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo verao brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    
    } else if (value == 13) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo floresta mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo floresta mirtilo.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    } else if (value == 19) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo floresta brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo floresta brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    
    } else if (value == 14) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo ciasto mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo ciasto mirtilo.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    } else if (value == 20) {
      $('#valor').html('<model-viewer src="assets/enfeite/boloretangulo ciasto brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/boloretangulo ciasto brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    
    } else if (value == 21) {
      $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro neon rosa mirtiloo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro neon rosa mirtiloo.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
    } else if (value == 22) {
       $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro rosa brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro rosa brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
      
      } else if (value == 23) {
        $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro neon azul mirtilo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro neon azul mirtilo.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
      } else if (value == 24) {
         $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro azul brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro azul brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
   
        } else if (value == 25) {
          $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro verao mirtiloo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro verao mirtiloo.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
        } else if (value == 26) {
           $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro verao brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro verao brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
   
          } else if (value == 27) {
            $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro neon floresta mirtiloo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro neon floresta mirtiloo.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
          } else if (value == 28) {
             $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro floresta brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro floresta brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
   
            } else if (value == 29) {
              $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro ciasto mirtiloo.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro ciasto brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
            } else if (value == 30) {
               $('#valor').html('<model-viewer src="assets/enfeite/bolocilindro ciasto brigadeiro.glb" camera-controls auto-rotate ar ios-src="assets/enfeite/bolocilindro ciasto brigadeiro.glb"/> <p><a href="../../../home/index.html">Finalizar bolo e voltar para home<img src="./png/bx-badge-check.png" width="60" height="60"/><img src="./png/bx-cart-add.png" width="60" height="60"/></a></p>')
           
    }
    })