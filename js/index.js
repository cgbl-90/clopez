// Wait until the DOM is fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  // Handle the back button click event
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", function () {
      loadPage("index.html"); // Load the main page when the back button is clicked
    });
  }

  // Check if we are on the blog list page or the post page
  if (document.getElementById("blog-links")) {
    // Load all JSON files if the blog-links element exists
    loadAllJsons("../articles/");
  } else if (document.getElementById("post-content")) {
    // Load a specific JSON post if post-content element exists
    const file = getUrlParameter("file");
    if (file) {
      loadJson(file);
    }
  }

  // Define the folder and list of images to load
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
  ];

  // Load images on all pages
  loadImages(imagesFolder, images);
});

// Function to load an HTML page into the document
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

// Function to load and display JSON blog post data
async function loadJson(file, elementId = "post-content") {
  try {
    // Add a delay before loading the file
    await delay(500);

    // Fetch the JSON file
    const response = await fetch(file);
    const data = await response.json();

    if (elementId === "blog-links") {
      // Display blog post preview
      const title = data.title || "Untitled";
      const tag = data.tag || "No Tag";
      const lang = data.lang || "Unknown Language";

      // Create and append article item
      const articleDiv = document.createElement("div");
      articleDiv.classList.add("article-item");

      const titleElement = document.createElement("h3");
      titleElement.classList.add("art-title");
      titleElement.textContent = title;

      const tagElement = document.createElement("h5");
      tagElement.classList.add("tag");
      tagElement.textContent = tag;

      const langElement = document.createElement("h5");
      langElement.classList.add("lang");
      langElement.textContent = lang;

      articleDiv.appendChild(titleElement);
      articleDiv.appendChild(tagElement);
      articleDiv.appendChild(langElement);

      // Create a link to the article post
      const link = document.createElement("a");
      link.href = `post.html?file=${file}`;
      link.appendChild(articleDiv);

      const blogLinksElement = document.getElementById("blog-links");
      if (blogLinksElement) {
        blogLinksElement.appendChild(link);
        blogLinksElement.appendChild(document.createElement("br"));
      } else {
        console.error('Element with id "blog-links" not found.');
      }
    } else {
      // Display blog post content
      const htmlContent = `<h1>${data.title}</h1><div>${data.text}</div>`;
      const postContentElement = document.getElementById(elementId);
      if (postContentElement) {
        postContentElement.innerHTML = htmlContent;
      } else {
        console.error(`Element with id "${elementId}" not found.`);
      }
    }
  } catch (err) {
    console.error("Error loading JSON file:", err);
    alert("Error loading JSON file. Check console for details.");
  }
}

// Function to load all JSON files from a directory and generate links
function loadAllJsons(directory) {
  fetch(directory)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      // Parse the directory contents as HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const links = Array.from(doc.querySelectorAll("a")).filter((link) =>
        link.href.endsWith(".json")
      );

      if (links.length === 0) {
        console.warn("No JSON files found in the directory.");
      }

      // Load each JSON file and process it
      links.forEach((link) => {
        loadJson(link.href, "blog-links");
      });
    })
    .catch((err) => {
      console.error("Error loading JSON directory:", err);
      alert("Error loading JSON directory. Check console for details.");
    });
}

// Function to get a URL parameter by name
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
}

// Function to load images into the page
function loadImages(imagesFolder, imagesList) {
  const picturesDiv = document.getElementById("pictures");
  if (!picturesDiv) {
    console.error('Element with id "pictures" not found.');
    return;
  }

  imagesList.forEach((image) => {
    const img = document.createElement("img");
    img.src = `${imagesFolder}${image}`;
    img.classList.add("pic-life");
    picturesDiv.appendChild(img);
  });
}

// Function to add delay
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
