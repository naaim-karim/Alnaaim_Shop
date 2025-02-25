// Section:
// Testimonials
// ===================
const commentsContainer = document.querySelector(".comments");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");
let startingIndex = 0;
let endingIndex = 10;
let testimonialsArray = [];

async function fetchData(link) {
  try {
    const data = await (await fetch(link)).json();
    testimonialsArray = data;
    displayTestimonials(testimonialsArray.slice(startingIndex, endingIndex));
    updateButtons();
  } catch (error) {
    commentsContainer.innerHTML = `<p class="fetching-error">There was an error loading the TESTIMONIALS</p>`;
    throw new Error(error);
  }
}

function displayTestimonials(testimonials) {
  testimonials.forEach(({ name, comment, img }) => {
    const commentBox = document.createElement("article");
    commentBox.className = "comment-box";
    const imgDiv = document.createElement("div");
    imgDiv.className = "customer-img";
    const customerImg = document.createElement("img");
    customerImg.src = `../images/${img}`;
    imgDiv.append(customerImg);
    const commentText = document.createElement("p");
    commentText.className = "comment-text";
    commentText.appendChild(document.createTextNode(comment));
    const customerName = document.createElement("span");
    customerName.className = "customer-name";
    customerName.appendChild(document.createTextNode(name));

    commentBox.append(imgDiv);
    commentBox.append(commentText);
    commentBox.append(customerName);

    commentsContainer.append(commentBox);
  });
}

function updateButtons() {
  if (commentsContainer.scrollLeft <= 0) {
    prevButton.disabled = true;
    prevButton.classList.add("disabled-button");
  } else {
    prevButton.disabled = false;
    prevButton.classList.remove("disabled-button");
  }

  if (
    Math.ceil(commentsContainer.scrollLeft + commentsContainer.clientWidth) >=
    commentsContainer.scrollWidth
  ) {
    nextButton.disabled = true;
    nextButton.classList.add("disabled-button");
  } else {
    nextButton.disabled = false;
    nextButton.classList.remove("disabled-button");
  }
}

// Update buttons dynamically
commentsContainer.addEventListener("scroll", updateButtons);

prevButton.addEventListener("click", (e) => {
  commentsContainer.scrollBy({
    left: -commentsContainer.clientWidth,
    behavior: "smooth",
  });
});

nextButton.addEventListener("click", (e) => {
  if (testimonialsArray.length > endingIndex) {
    startingIndex += 10;
    endingIndex += 10;
    displayTestimonials(testimonialsArray.slice(startingIndex, endingIndex));
  }
  commentsContainer.scrollBy({
    left: commentsContainer.clientWidth,
    behavior: "smooth",
  });
});

window.addEventListener("load", fetchData("javascript/testimonials.json"));
