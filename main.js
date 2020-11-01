$(function() {
    $('.anim').hover(function() {
      $('#cigbox').css('animation', 'shake 3s');
      $('#cigbox').css('animation-iteration-count', 'infinite');
    //   $('#cigbox').css('animation', 'warn 3s');
    //   $('#cigbox').css('animation-iteration-count', 'infinite');
      $('.cig').css('animation', 'warn 3s');
      $('.cig').css('animation-iteration-count', 'infinite');
    }, function() {
      // on mouseout, reset the background colour
      $('#cigbox').css('animation', 'unset');
      $('.cig').css('animation', 'unset');
    });
  });
