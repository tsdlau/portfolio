$(document).ready(function() {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var s = skrollr.init({forceHeight: false});
  }

  $('#sideNav').hover(
    function() {
      $(this).css({
        'width': '240px'
      });
    },
    function() {
      $(this).css({
        'width': '60px'
      });
    }
  );

  $('.title').on('click', function () {
    var href = $(this).attr('href');
    $('body, HTML').animate({
      scrollTop: $(href).offset().top
    }, 500);
  });
});
