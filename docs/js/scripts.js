$(document).ready(function() {
  $(".menu-link").click(function(event) {
    event.preventDefault();
    $(".mobile-nav").toggleClass("is-closed");
    $(".menu").toggleClass("open");
  });
});


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.project-container').offset().top - ($(window).height() / 1.5)) {
    $('.project-container figure').each(function(i){
      setTimeout(function(){
        $('.project-container figure').eq(i).addClass('is-showing');
      }, 150 * (i+1));
    });
  }

});
