$(document).ready(function(){

  window.addEventListener('scroll', _.throttle(function(){
    if($(window).scrollTop() > 0){
      $('.header-public').addClass("fixed");
    }else{
      $(".header-public").removeClass("fixed");
    }
  }, 100));

  $('.fancybox').fancybox();

  progressively.init({
    delay: 10,
    throttle: 100,
    smBreakpoint: 600,
    onLoad: function(elem) {
      console.log(elem);
    },
    onLoadComplete: function() {
      console.log('All images have finished loading!');
    }
  });

});
