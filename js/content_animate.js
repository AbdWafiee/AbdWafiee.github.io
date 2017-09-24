// Smooth scrolling
var root = $("html, body");
$(".navbar a, .titleDiv a, .education a").on('click', function(e) {
  if (this.hash !== "") {

    // prevent default actions
    e.preventDefault();

    // scroll to the referenced section
    root.animate({
      scrollTop: $(this.hash).offset().top
    }, 1000, function() {
        // removes anchor from url
        window.location.hash = "";
      }
    );
  }
});

// Star rating activation
$(".icon").on("click", function(e) {
  //toggle the star ratings
  $(this).children(".stats").slideToggle(300);
  e.preventDefault();
});
