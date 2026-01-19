// Override carousel autoplay speed to 10 seconds
// This runs after the theme's script initializes the carousel
setTimeout(function() {
  if (jQuery && jQuery('.story-slider').hasClass('slick-initialized')) {
    jQuery('.story-slider').slick('slickSetOption', 'autoplaySpeed', 10000, true);
  }
}, 100);
