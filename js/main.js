$(".img-description").hide();

$(".hover").hover(
  function() {
    $(this)
      .find(".img-text")
      .animate({ bottom: 100 }, 100);
    $(this)
      .find(".img-description")
      .show();
    $(this)
      .find(".image")
      .toggleClass("brightness");
  },
  function() {
    $(this)
      .find(".img-text")
      .animate({ bottom: 8 });
    $(this)
      .find(".img-description")
      .hide();

      $(this)
      .find(".image")
      .toggleClass("brightness")
      // . css("filter","brightness(100%)");
  }
);


$(document).ready(function () {

    if($(window).width()>650){

        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
              $('.scroll-top').fadeIn();
            } else {
              $('.scroll-top').fadeOut();
            }
          });
    }

    else{

        $(".scroll-top").css("display","none")
        $
    }
    
  
    $('.scroll-top').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 800);
        return false;
    });
  
  });

  (function(){
    var timeout;
    var $window = $(window);
    var $navbar = $('.navbar');
    
    $window.on('scroll', function(e){
      clearTimeout(timeout);
      
      timeout = setTimeout(function(){
        if ($window.scrollTop() < 150) {
          $navbar.removeClass('hide');
        } else {
          $navbar.addClass('hide');
        }
      }, 100);
    });
  }());

  $(function() {
    var header = $(".navbar");
  
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.addClass("scrolled");
        } else {
            header.removeClass("scrolled");
        }
    });
  
});