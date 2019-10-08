var swiper2 = new Swiper('.swiper-container', {
    direction: 'vertical',
    slidesPerView: 2,
    mousewheel: true,
    
    scrollbar: {
      el: '.managment-swiper-scrollbar',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    
    breakpoints: {
      // when window width is >= 320px
      0: {
        spaceBetween: 62,
      },
      // when window width is >= 640px
      680: {
        spaceBetween: 85,
      }
    },
  });

  



