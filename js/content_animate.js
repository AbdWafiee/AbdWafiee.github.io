$(document).ready(function() {
  
  // scrolling to the top of the page
  $(".to-Top").click(function(e) {
    // animates a smooth scroll to the top of the page
    $('html, body').animate({scrollTop: 0}, 500);

    //prevents default action to jump to top of page
    e.preventDefault();
  });
});
