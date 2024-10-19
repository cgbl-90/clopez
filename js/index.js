function showContainer(containerId) {
  const containers = document.querySelectorAll(".container");
  containers.forEach((container) => {
    container.style.display = "none";
  });
  const activeContainer = document.getElementById(containerId);
  activeContainer.style.display = "block";
}
