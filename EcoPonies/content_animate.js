$(document).ready(function() {
  $(".to-Top").click(function(e){
    $('html, body').animate({scrollTop: 0}, 500);
    //prevents default action to jump to top of page
    e.preventDefault();

    /* for use with dynamic back-to-top button
    $(window).on('scroll', function(){
      //console.log('scrolled');
      var wndw = $(this);
      var wndwHeight = this.height();
      var wndwTop = this.scrollTop();
    });*/
  });
});
