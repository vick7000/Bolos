$('#service').on('change', function() {
    var value = $(this)
      .children('option:selected')
      .val()
  
    if (value == 1) {
      $('#valor').html('<model-viewer src="assets/formato/bolocilindro.glb" camera-controls auto-rotate ar ios-src="assets/formato/bolocilindro.glb" />')
    } else if (value == 2) {
      $('#valor').html('<model-viewer src="assets/formato/boloretangulo.glb" />')
    }
    })