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
  // loop: true,
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



var slideReal =  swiper.slides.index 
var slideLeng =  swiper.slides.length 

// -------------- my loop slider
swiper.on('slideChange', function(){
  if(this.realIndex == slideLeng -1 ){
  // swiper.on('slideChange', function(){
      swiper.slideTo(0)
      return false ;
      
    // }) 
  }
})



