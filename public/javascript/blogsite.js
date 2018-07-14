$(document).ready(function() {

  var blogGreet = {
    strings: ["^500hi! ^1000 <br>^500<br>nice of you to visit this piece of virtual space. ^1000 <br>^500<br>in here,^800 you'll find musings of all sorts.^1000...... <br>you can scroll down now ^1800:) "],
    typeSpeed: 3,
    startDelay: 2
  }
  $(".welcome").typed(blogGreet);

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

  $('.blogTitle').click(function(){
    $(this).children('p').fadeOut('slow');
    $(this).children('.summary').fadeIn('slow');
  });

});
