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

  // Function to load images
  function loadImages(imagesFolder, imagesList) {
    const picturesDiv = document.getElementById("pictures");

    imagesList.forEach((image) => {
      const img = document.createElement("img");
      img.src = `${imagesFolder}${image}`;
      img.classList.add("pic-life");
      picturesDiv.appendChild(img);
    });
  }

  // Define the folder and list of images
  const imagesFolder = "images/life/";
  const images = [
    "amsterdam.jpg",
    "kotor-bay.jpg",
    "loved-ones.jpg",
    "olomouc.jpg",
    "playful.jpg",
    "sap.jpg",
    "verona.jpg",
    "wien.jpg",
    // Add more image file names here
  ];

  // Load the images
  loadImages(imagesFolder, images);
});
