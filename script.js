// Project carousel
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

// Load error
function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((html) => {
      document.open();
      document.write(html);
      document.close();
    })
    .catch((err) => console.warn("Something went wrong.", err));
}

// Function to load HTML page
function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((html) => {
      document.open();
      document.write(html);
      document.close();
    })
    .catch((err) => console.warn("Something went wrong.", err));
}

// Function to load HTML page
function loadPage(page) {
  fetch(page)
    .then((response) => response.text())
    .then((html) => {
      document.open();
      document.write(html);
      document.close();
    })
    .catch((err) => console.warn("Something went wrong.", err));
}

// Function to load and parse markdown file
function loadMarkdown(file, elementId = "post-content") {
  fetch(file)
    .then((response) => response.text())
    .then((markdown) => {
      const htmlContent = marked.parse(markdown);
      document.getElementById(elementId).innerHTML = htmlContent;
    })
    .catch((err) => console.error("Error loading markdown file:", err));
}

// Function to load all markdown files from a directory and extract titles
function loadAllMarkdowns(directory) {
  fetch(directory)
    .then((response) => response.text())
    .then((data) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const links = Array.from(doc.querySelectorAll("a")).filter((link) =>
        link.href.endsWith(".md")
      );

      const container = document.getElementById("blog-links");
      links.forEach((link) => {
        fetch(link.href)
          .then((response) => response.text())
          .then((markdown) => {
            const title = markdown.split("\n")[0].replace("# ", "");
            const a = document.createElement("a");
            a.textContent = title;
            a.href = `post.html?file=${link.href}`;
            container.appendChild(a);
            container.appendChild(document.createElement("br"));
          });
      });
    })
    .catch((err) => console.error("Error loading markdown directory:", err));
}

// Function to get URL parameter
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Load initial content on page load if necessary
document.addEventListener("DOMContentLoaded", function () {
  if (document.getElementById("blog-links")) {
    loadAllMarkdowns("articles/");
  } else if (document.getElementById("post-content")) {
    const file = getUrlParameter("file");
    if (file) {
      loadMarkdown(file);
    }
  }
});
