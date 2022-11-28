let btn = document.querySelector(".btn");

function emersion() {
  if (window.pageYOffset > 280) {
    btn.style.opacity = "1";
  } else {
    btn.style.opacity = "0";
  }
}

btn.onclick = function () {
  window.scrollTo(0, 0);
};

window.onscroll = emersion;

const swiper = new Swiper(".swiper", {
  slidesPerView: 1.4,
  slidesPerColumn: 1,
  spaceBetween: 4,
  centeredSlides: true,
  initialSlide: 2,
  loop: true,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    420: {
      spaceBetween: 30,
    },
    400: {
      spaceBetween: 35,
    },
    390: {
      spaceBetween: 35,
    },
    360: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
  },
});
