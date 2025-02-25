// Gallery Filter
const filterMenu = document.querySelector(".gallery-filter");
const filterMenuItems = document.querySelectorAll(".gallery-filter li");
const imageCards = document.querySelectorAll(".gallery-container .image-card");

filterMenuItems.forEach((li) => {
  li.addEventListener("click", (e) => {
    filterMenuItems.forEach((li) => li.classList.remove("active"));
    e.currentTarget.classList.add("active");

    imageCards.forEach((card) => {
      card.style.opacity = "0";
      card.style.visibility = "hidden";
      card.style.position = "absolute";
      card.style.height = "0";
      card.style.margin = "0";
      card.style.padding = "0";
    });

    const filterDataset = e.currentTarget.dataset.filter;

    const filteredCards =
      filterDataset === "all"
        ? imageCards
        : Array.from(imageCards).filter((card) =>
            card.classList.contains(filterDataset)
          );
    filteredCards.forEach((card) => {
      card.style.visibility = "visible";
      card.style.opacity = "1";
      card.style.position = "relative";
      card.style.height = "auto"; // Restore height
      card.style.margin = ""; // Restore margin
      card.style.padding = ""; // Restore padding
    });
  });
});

// Download Button
const downloadButtons = document.querySelectorAll(".download-button");

downloadButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const img = e.target.closest(".image-card").querySelector("img");

    if (!img) return;

    const imgSrc = img.src;
    const fileName = imgSrc.split("/").pop();

    const link = document.createElement("a");
    link.href = imgSrc;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });
});

// Maximize Button
