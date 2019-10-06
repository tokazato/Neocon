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
    // spaceBetween: 100,
  });

  $(document).ready(function(){
    //   var active = $('.swiper-slide-active');
    //   if(active == true) {
    //       alert('sada')
    //   }

    // $('.swiper-slide-active').on('click', function(){
    //     alert('adsas')
    // })
  });



