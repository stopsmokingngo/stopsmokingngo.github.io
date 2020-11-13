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
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.display = "inline-flex";
  } else {
    document.getElementById("navbar").style.display = "none";
  }
  prevScrollpos = currentScrollPos;
} 