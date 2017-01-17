$(document).ready(function() {
  $( "#blogIndex" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
    animate: {
      easing: "easeOutBounce",
      duration: 700
    }
  });

  // Hide nav on scroll down
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navHeight = $('.blogNav').outerHeight();

  $(window).scroll(function(){
    didScroll = true;
  });

  setInterval(function(){
    if(didScroll){
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled(){
    var previousTop = $(this).scrollTop();

    //Scroll more than the delta
    if(Math.abs(lastScrollTop - previousTop) <= delta)
    return;

    if(previousTop > lastScrollTop && previousTop > navHeight){
      $('.blogNav').fadeOut();
    } else{
      if(previousTop + $(window).height() < $(document).height()){
        $('.blogNav').fadeIn();
      }
    }
    lastScrollTop = previousTop;
  }

});
