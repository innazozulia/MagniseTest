const swiper = new Swiper(".swiper", {
  // Optional parameters
  //   direction: "horizontal",
  //   loop: true,
  //   followFinger: true,
  //   slidesPerView: 1,
  //   centeredSlides: true,
  slidesPerView: "auto",
  centeredSlides: true,
  loop: true,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
