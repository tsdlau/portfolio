$(document).ready(function() {
  if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    var s = skrollr.init({forceHeight: false});
  }


  // scroll to top button
  var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1300,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) {
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

  $('#sideNav').hover(
    function(){
      $(this).css({
        'width': '180px'
      });
    },
    function(){
      $(this).css({
        'width': '60px'
      });
    }
  );

  var hellos = {
    strings: ["", "Hello!", "你好!", "Hola!", "안녕하세요!", "नमस्ते!", "What's good?"]
  }
  $(".greeting").typed(hellos);

  $('.title').on('click', function (){
    var href = $(this).attr('href');
    $('body, HTML').animate({
      scrollTop: $(href).offset().top
    }, 500);
  });

  $( "#projectIndex" ).accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
    animate: {
      easing: "easeOutBounce",
      duration: 700
    }
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
  var vis = ['adirondack','bobert','briana','reminiscent','bos','jzsmoke','esplanade','butterfly','league','fouryears','david','ferrari','fanboy','lookup','ked','edemame','harvard','nemo','painter','pumpkins','ichigo','parrot','castaway','charlesautumn','fountain','jessapples','wesley','nyfruit','hocr','rain','pianokeys','statesswim','demboiz','packing','grandmaster','sarah','speared','thomas','commave','bu'];
  var invis = ['riho','otherked','mya','bee','bronze','flower','georgelaughing','guru','josephnyc','karina','peekingred','pistachio','raspberrysnowman','saltypig','zenbonsakura','tsdlau'];

  function automagick(){
    var vanish = vis[Math.floor(Math.random()*vis.length)];
    var vanishIndex=vis.indexOf(vanish);
    if (vanishIndex > -1){
      vis.splice(vanishIndex, 1);
    }

    var appear = invis[Math.floor(Math.random()*invis.length)];
    var appearIndex=invis.indexOf(appear);
    if (appearIndex > -1){
      invis.splice(appearIndex, 1);
    }

    vis.push(appear);
    invis.push(vanish);

    var appearLeft = $('#'+vanish).css("left");
    var appearTop = $('#'+vanish).css("top");

    $('#'+appear).css({
      left: appearLeft,
      top: appearTop,
      border: "1px solid black"
    }).animate({
      opacity: 1.0},{duration: 1000
      },"easeIn");

    $('#'+vanish).animate({
      opacity: 0},{duration: 1000},"easeOut");

    setTimeout(automagick, 1500);
  }
  automagick();
});
