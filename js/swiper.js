const membershipSwiper = new Swiper(".membership__swiper", {
  slidesPerView: 1.2,
  spaceBetween: 12,
  initialSlide: 1,
  centeredSlides: true,
  // настройки для разных разрешений
  breakpoints: {
    393: {
      slidesPerView: 1.3,
    },
    410: {
      slidesPerView: 1.4,
    },
    440: {
      slidesPerView: 1.5,
    },
    500: {
      slidesPerView: 1.7,
    },
    550: {
      slidesPerView: 1.8,
    },
    600: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 2.4,
    },
  },
});

const aboutSwiperMax = new Swiper(".about__swiper--max", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: false,
  },
  navigation: {
    nextEl: ".about__swiper-button-next",
    prevEl: ".about__swiper-button-prev",
  },
  effect: "fade",
  crossFade: true,
});

const aboutSwiperMin = new Swiper(".about__swiper--min", {
  slidesPerView: 1.2,
  spaceBetween: 12,
  initialSlide: 1,
  centeredSlides: true,
  // настройки для разных разрешений
});
