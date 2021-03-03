$(function(){

   $('.slideshow').each(function(){

     var $slides =$(this).find('img'),
         slideCount =$slides.length,
         currentIndex =0;

    $slides.eq(currentIndex).fadeIn();

    setInterval(showNextSlide, 6500);

    function showNextSlide(){

      var nextIndex =(currentIndex +1) % slideCount;

      $slides.eq(currentIndex).fadeOut();

      $slides.eq(nextIndex).fadeIn();

      currentIndex = nextIndex;
    }
  })
$('.page-header').each(function () {

    var $window = $(window),
        $header = $(this),
        headerOffsetTop = $header.offset().top;

    $window.on('scroll', function () {
        if ($window.scrollTop() > headerOffsetTop) {
            $header.addClass('sticky');
        } else {
            $header.removeClass('sticky');
        }
    });

    $window.trigger('scroll');
  });
});
$(function(){

  var duration =300;

  var $works =$('#works p');


  $works.on('mouseover', function(){
    $(this).find('strong').stop(true).animate({
      opacity:1,
      left: '0%'
    }, duration);
    $(this).find('span').stop(true).animate({
      opacity: 1
    }, duration);
  })
  .on('mouseout', function(){
    $(this).find('strong').stop(true).animate({
      opacity: 0,
      left: '-200%'
    }, duration);
    $(this).find('span').stop(true).animate({
      opacity: 0
    }, duration);
});
});
