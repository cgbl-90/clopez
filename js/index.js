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
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load page: ${response.statusText}`);
      }
      return response.text();
    })
    .then((html) => {
      document.open();
      document.write(html);
      document.close();
    })
    .catch((err) => {
      console.error("Error loading page:", err);
      alert("Error loading page. Check console for details.");
    });
}

// Function to load and display JSON blog post data
async function loadJson(file, elementId = "post-content") {
  try {
    // Add a delay before loading the file
    await delay(500);

    // Fetch the JSON file
    console.log(`Fetching JSON from: ${file}`);
    const response = await fetch(file);
    if (!response.ok) {
      throw new Error(`Failed to load JSON file: ${response.statusText}`);
    }
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
  console.log(`Fetching directory contents from: ${directory}`);
  // List of JSON files to fetch
  const jsonFiles = [
    "article1.json",
    "article2.json",
    "article3.json",
    "article4.json",
    "article5.json",
    "article6.json",
  ];

  // Load each JSON file and process it
  jsonFiles.forEach((file) => {
    const filePath = `${directory}${file}`;
    loadJson(filePath, "blog-links");
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

function loadFooter() {
  fetch("footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-container").innerHTML = data;
    })
    .catch((error) => console.error("Error loading footer:", error));
}

document.addEventListener("DOMContentLoaded", loadFooter);

function loadArticle(articleId) {
  window.location.href = `post.html?article=${articleId}`;
}

function loadPage(page) {
  window.location.href = page;
}
