const figure = document.querySelector(".mouse-movements");
let mouseTimer;
let isIdle = false;

document.addEventListener("mousemove", (e) => {
  figure.style.top = `${e.clientY}px`;
  figure.style.left = `${e.clientX}px`;

  figure.classList.remove("show");
  isIdle = false;

  clearTimeout(mouseTimer);
  mouseTimer = setTimeout(() => {
    isIdle = true;
    figure.classList.add("show");
  }, 5000);
});

// Accordion for Ideas Page
document.addEventListener("DOMContentLoaded", () => {
  const articleTitles = document.querySelectorAll(".article-title-wrapper");

  if (articleTitles.length > 0) {
    articleTitles.forEach((title) => {
      title.addEventListener("click", () => {
        const wasActive = title.classList.contains("active");
        articleTitles.forEach((t) => {
          if (t !== title) {
            t.classList.remove("active");
          }
        });

        if (!wasActive) {
          title.classList.add("active");
        } else {
          title.classList.remove("active");
        }
      });
    });
  }
});
