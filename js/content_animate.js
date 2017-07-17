$(document).ready(function() {

  //Smooth scrolling
  var $root = $('html, body');
  $(".navbar a, .titleDiv a").on('click', function(e) {
    if (this.hash !== "") {

      //prevent default actions
      e.preventDefault();

      //cache the current section
      var hash = this.hash;

      //scroll to the referenced section
      $root.animate({
        scrollTop: $(hash).offset().top
      }, 1000, function() {
          //removes anchor from url
          window.location.hash = "";
        }
      );
    }
  });
});
