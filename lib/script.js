const gallery = document.querySelector(".js-gallery");
const slides = gallery.querySelectorAll(".js-gallery-item");

const slideCount = slides.length;
const slideWidth = slides[0].offsetWidth;

let currentSlide = 1;

const transitionSlide = () => {
  if (currentSlide < slideCount) {
    gallery.style.transform = `translateX(-${slideWidth * currentSlide}px)`;
    currentSlide++;
  } else {
    gallery.style.transform = "translateX(0px)";
    currentSlide = 1;
  }
};

setInterval(transitionSlide, 2000);.