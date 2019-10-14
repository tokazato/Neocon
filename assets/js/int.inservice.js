var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.inservice-swiper-arrow-buttons-next',
      prevEl: '.inservice-swiper-arrow-buttons-prev',
    },
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
  });

  
  swiper.on('slideChange', function () {
    let goDown = (90 / 5 * this.realIndex);
    console.log(goDown);
    document.getElementById('circle').style.transform = `translateY(-50%) rotate(${goDown}deg)`;
  });