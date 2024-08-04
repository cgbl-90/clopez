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

// Function to extract metadata from markdown
function extractMetadata(markdown) {
  const metadataPattern = /<!--\s*([\s\S]*?)\s*-->/;
  const match = markdown.match(metadataPattern);

  if (match) {
    const metadataString = match[1];
    const metadata = {};
    metadataString.split("\n").forEach((line) => {
      const [key, value] = line.split(":");
      if (key && value) {
        metadata[key.trim()] = value.trim().replace(/['"]/g, "");
      }
    });
    return metadata;
  }
  return {};
}

// Function to load and parse markdown file
function loadMarkdown(file, elementId = "post-content") {
  fetch(file)
    .then((response) => response.text())
    .then((markdown) => {
      if (elementId === "blog-links") {
        // Extract metadata and display article list
        const metadata = extractMetadata(markdown);
        const title = metadata.title || "Untitled";
        const tag = metadata.tag || "No Tag";
        const lang = metadata.lang || "Unknown Language";

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

        // Link to the article post
        const link = document.createElement("a");
        link.href = `post.html?file=${file}`;
        link.appendChild(articleDiv);

        document.getElementById("blog-links").appendChild(link);
        document
          .getElementById("blog-links")
          .appendChild(document.createElement("br"));
      } else {
        // Display article content
        const htmlContent = marked.parse(
          markdown.replace(/<!--[\s\S]*?-->/, "").trim()
        );
        document.getElementById(elementId).innerHTML = htmlContent;
      }
    })
    .catch((err) => {
      console.error("Error loading markdown file:", err);
      alert("Error loading markdown file. Check console for details.");
    });
}

// Function to load all markdown files from a directory and generate links
function loadAllMarkdowns(directory) {
  fetch(directory)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.text();
    })
    .then((data) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(data, "text/html");
      const links = Array.from(doc.querySelectorAll("a")).filter((link) =>
        link.href.endsWith(".md")
      );

      if (links.length === 0) {
        console.warn("No Markdown files found in the directory.");
      }

      links.forEach((link) => {
        loadMarkdown(link.href, "blog-links");
      });
    })
    .catch((err) => {
      console.error("Error loading markdown directory:", err);
      alert("Error loading markdown directory. Check console for details.");
    });
}

// Function to get URL parameter by name
function getUrlParameter(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  const regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
  const results = regex.exec(location.search);
  return results === null
    ? ""
    : decodeURIComponent(results[1].replace(/\+/g, " "));
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

// Add event listeners to buttons
document.addEventListener("DOMContentLoaded", function () {
  // Handle back button
  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.addEventListener("click", function () {
      loadPage("index.html");
    });
  }

  // Check if we are on the blog list page or the post page
  if (document.getElementById("blog-links")) {
    // Load blog list if the blog-links element exists
    loadAllMarkdowns("articles/");
  } else if (document.getElementById("post-content")) {
    // Load specific post content if post-content element exists
    const file = getUrlParameter("file");
    if (file) {
      loadMarkdown(file);
    }
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
