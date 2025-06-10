//comment slide part ..........
const swiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 10,
  speed: 3000,
  autoplay: {
    delay: 1, // smooth continuous scroll
    disableOnInteraction: false,
  },
  allowTouchMove: false,
});

// Pause on hover
const swiperEl = document.querySelector(".swiper");

swiperEl.addEventListener("mouseenter", () => {
  swiper.autoplay.stop();
});

swiperEl.addEventListener("mouseleave", () => {
  swiper.autoplay.start();
});
