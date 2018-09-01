$(document).ready(function(){

  window.addEventListener('scroll', _.throttle(function(){
    if($(window).scrollTop() > 0){
      $('.header-public').addClass("fixed");
    }else{
      $(".header-public").removeClass("fixed");
    }
  }, 100));

  $('.fancybox').fancybox();

});
