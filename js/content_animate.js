$(document).ready(function() {

  //Smooth scrolling
  var $root = $('html, body');
  $(".navbar a, .titleDiv a").on('click', function(e) {
    if (this.hash !== "") {

      //prevent default actions
      e.preventDefault();

      var hash = this.hash;

      $root.animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
          window.location.hash = hash;
        }
      );
    }
  });
});
