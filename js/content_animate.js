//Smooth scrolling
var $root = $("html, body");
$(".navbar a, .titleDiv a, .education a").on('click', function(e) {
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

$(".icon").on("click", function(e) {
  $(this).children(".stats").slideToggle(300);
  e.preventDefault();
});
