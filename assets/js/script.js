$(document).ready(function(){

  $('.burger, .over-layer, .times').click(function(){
    $('.mob-md').toggleClass("open-nav");
    $('.over-layer').toggle();
    $('body, html').toggleClass("devo-head-body");
  });


    $('.slider-head').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed: 2000,
        dots: true, 
        arrows:false,
        
      });
      



      $('.media-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        outhight:true,
        autoplaySpeed: 2000,
        dots: true, 
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 997,
            settings: {
              slidesToShow: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 772,
            settings: {
              slidesToShow: 1,
            }
          }

        ]
      });
      
      


      $('.devo-card-img').hover(function(){
        var x = parseFloat($(this).children('.devo-info-card').css('height'));
        var y = parseFloat($(this).css('height'));
        var z = y - x;
        $(this).children('.devo-info-card').css('top' , z);
    } , function(){
         var y = parseFloat($(this).css('height'));
        var z = y - 73;
        $(this).children('.devo-info-card').css('top' , z);
    });





      $(".fancybox").fancybox();

});