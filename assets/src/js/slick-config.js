$(document).ready(function(){
  $('.carousel').slick({
    dots: true, 
    autoplay: true,
    autoplaySpeed: 2500
  });
  $('.modal__carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  });
  $('.nav-carousel').slick({
    asNavFor: '.modal__carousel',
    arrows: true,
    focusOnSelect: true,
    adaptiveHeight: true,
    slidesToShow: 3
  });
});

$(document).ready(function(){
  $('.feedback_carousel').slick({

  });
});

$(document).ready(function(){

});
