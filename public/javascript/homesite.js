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

  $('.modal-trigger').leanModal({
      dismissible: true, // Modal can be dismissed by clicking outside of the modal
      opacity: .6, // Opacity of modal background
      in_duration: 400, // Transition in duration
      out_duration: 200, // Transition out duration
      starting_top: '4%', // Starting top style attribute
      ending_top: '10%', // Ending top style attribute
    }
  );
});
