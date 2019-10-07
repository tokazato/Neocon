var swiper = new Swiper('.swiper-container', {

      // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    0: {
        direction: 'vertical',
    },
    // when window width is >= 640px
    900: {
        direction: 'horizontal',
    }
  },
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    scrollbar: {
        el: '.project-inside-swiper-scrollbar',
      },
});