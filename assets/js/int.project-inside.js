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
  loop: true,
  navigation: {
    nextEl: '.project-inside-next',
    prevEl: '.project-inside-prev',
  },
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    scrollbar: {
        el: '.managment-swiper-scrollbar',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
});