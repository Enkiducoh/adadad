//aos scroll animations
AOS.init();
// end of aos

//fade in animations
anime({
  targets: '.header h2',
  delay: 500,
  opacity: 1
});

anime({
  targets: '.header h2 span:first-of-type',
  delay: 1000,
  opacity: 1
});

anime({
  targets: '.header h2 span:nth-of-type(2)',
  delay: 1500,
  opacity: 1,
});
anime({
  targets: '.header h2 span:nth-of-type(3)',
  delay: 1500,
  opacity: 1,
});

anime({
  targets: '.header p',
  delay: 2000,
  opacity: 1
});

anime({
  targets: '.cta',
  delay: 2500,
  bottom: '2em'
});//end fade in animations

//MENU OPENING
  $('.menu').click(function(){
    $('.navbar').toggleClass('is-open');
    if($('.navbar').hasClass('is-open')) {
      $(this).css("transform", "rotate(90deg)"); 
  } else {
      $(this).css("transform", "rotate(360deg)"); 
    }
  });

//window scroll animations
var prev = 0;
var $window = $(window);
var nav = $('nav');

$window.scroll(function(){
  var scrollTop = $window.scrollTop();
  nav.toggleClass('nav-scroll', scrollTop > prev);
  prev = scrollTop;
});

//opacity on scroll
var target = $('header h2, header p');
var targetHeight = target.outerHeight();

$window.scroll( function(e) {
    var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
    if (scrollPercent >= 0) {
        target.css('opacity', scrollPercent);
    }
});//end of opacity on scroll

//hover on social media
$( ".icons a" ).hover(
  function() {
    $(this).siblings().addClass("hover");
  }, function() {
    $(this).siblings().removeClass("hover");
  }
);