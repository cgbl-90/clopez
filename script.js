document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.getElementById("carousel");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const carouselWidth =
    document.getElementById("carousel-container").offsetWidth;
  let scrollPosition = 0;

  prevButton.addEventListener("click", () => {
    if (scrollPosition > 0) {
      scrollPosition -= carouselWidth;
      if (scrollPosition < 0) scrollPosition = 0;
      carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
  });

  nextButton.addEventListener("click", () => {
    if (scrollPosition < carousel.scrollWidth - carouselWidth) {
      scrollPosition += carouselWidth;
      if (scrollPosition > carousel.scrollWidth - carouselWidth)
        scrollPosition = carousel.scrollWidth - carouselWidth;
      carousel.style.transform = `translateX(-${scrollPosition}px)`;
    }
  });
});
