// Section:
// Menu Bar Button
// ===================
const menuBarButton = document.querySelector(".menubar-button");
const navLinksContainer = document.querySelector("header ul");

menuBarButton.addEventListener("click", (e) => {
  e.currentTarget.classList.toggle("menu-open");
  navLinksContainer.classList.toggle("menu-open");

  if (menuBarButton.classList.contains("menu-open")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }

  navLinksContainer.querySelectorAll("li a").forEach((link) => {
    link.addEventListener("click", () => {
      menuBarButton.classList.remove("menu-open");
      navLinksContainer.classList.remove("menu-open");
      document.body.style.overflowY = "visible";
    });
  });
});

// Add Lazy Loading To All Images
// ===================
const images = document.images;

for (let img of images) {
  img.setAttribute("loading", "lazy");
}
