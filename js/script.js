$(window).scroll(function () {
   if ($(this).scrollTop() > 200) {
      $('header').css('padding', '10px 0').css('background-color', '#eff0f2');
   }
});

$(".service__btn").click(function () {
   let btn = $(this);
   let service = $(this).parents(".service");

   if (!service.hasClass("active")) {
      service.addClass("active");
      btn.html("X");
      btn.removeClass("more").addClass("close");
   } else {
      service.removeClass("active");
      btn.html("Know more");
      btn.removeClass("close").addClass("more");
   }
});

$(document).ready(function () {
   $('.slider').slick({
      arrows: false,
      dots: true,
      adaptiveHeight: false,
      variableWidth: true,
      centerMode: true,
   });
   $('.slider__wide').slick({
      arrows: true,
      dots: true,
      cssEase: 'linear'
   });
});