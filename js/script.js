
  var swiper = new Swiper(".swiper-container", {
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: false,
    freeMode: false,
    grabCursor: true,
    loop: true,
    speed: 2000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    autoplay: {
      delay: 8000,
      disableOnInteraction: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    breakpoints: {
      500: {
        slidesPerView: 1
      },
      700: {
        slidesPerView: 1
      }
    }
  
  });
  
  $('.card').on('mousemove', function(e) {
    const bounds = this.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height;
  
    const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
    const deltaY = Math.floor((centerY - e.clientY)) * 0.222;
  
  
    $(this).css({
      transform: 'translate3d('+ deltaX * 0.2 +'px, '+ deltaY * 0.2 +'px, 0px)'
    });
  });
  
  
  $('.card').on('mouseleave', function(e) {
    const bounds = this.getBoundingClientRect();
  
  
    $(this).css({
      transform: 'translate3d(0px, 0px, 0px)'
    });
  
    });
  
  $('.cityname').on('mousemove', function(e) {
    const bounds = this.getBoundingClientRect();
    const centerX = bounds.left + bounds.width / 2;
    const centerY = bounds.top + bounds.height;
  
    const deltaX = Math.floor((centerX - e.clientX)) * 0.222;
    const deltaY = Math.floor((centerY - e.clientY)) * 0.333;
  
  
    $(this).css({
      transform: 'translate3d('+ deltaX * -0.7 +'px, '+ deltaY * -0.7 +'px, 0px)'
    });
  });
  
  
  $('.cityname').on('mouseleave', function(e) {
    const bounds = this.getBoundingClientRect();
  
  
    $(this).css({
      transform: 'translate3d(0px, 0px, 0px)'
    });
  
    });