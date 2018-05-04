// carrossel
$(window).scroll(function() {
  $('#animatedElement').each(function() {
    var imagePos = $(this).offset().top;

    var topOfWindow = $(window).scrollTop();
    if (imagePos < topOfWindow + 400) {
      $(this).addClass('slideUp');
    }
  });
});

// scroll fotos
$('#botao-fotos').on('click', function(event) {
  event.preventDefault();
  $('html, body').animate({ scrollTop: $('#portifolio').position().top }, 1200);
});
