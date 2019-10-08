// main-swiper
var swiper = new Swiper('.main-swiper-container', {
    scrollbar: {
      el: '.main-swiper-scroll',
      hide: false,
    },
    pagination: {
      el: '.main-current-number-swiper',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.main-swiper-button-next',
      prevEl: '.main-swiper-button-prev',
    },
    spaceBetween: 100,
  });

  