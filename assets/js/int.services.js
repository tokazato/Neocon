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
        spaceBetween: 60,
      },
      // when window width is >= 640px
      680: {
        spaceBetween: 85,
      }
    },
  });
  
  // ---------- get active link 
  swiper2.on('slideChange', function () {
    var active = document.getElementsByClassName('swiper-pagination-current')[0].innerHTML;
    var activeItem = document.getElementById(active);  
    var activeLink = document.getElementsByClassName('active-link')[0];
    activeLink.className = '';
    activeItem.className = " active-link";
    console.log( active, activeItem);
  });



