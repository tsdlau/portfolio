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

  $(window).scroll(
    {
      previousTop: 0
    },

    function(){
      var currentTop = $(window).scrollTop();
      if (currentTop < this.previousTop){
        $(".blogNav").fadeIn();
      }else{
        $(".blogNav").fadeOut();
      }
      this.previousTop = currentTop;
    });

});
