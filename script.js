// Selectors

// Form
const formEl = document.getElementById("review-form");
const nameEl = document.getElementById("name");
const restNameEl = document.getElementById("restaurant-name");
const ratingEl = document.getElementById("rating");
const dateEl = document.getElementById("visit-date");
const reviewInfoEl = document.getElementById("review-info");
const submitBtn = formEl.lastElementChild;

// Reviews
const reviewDiv = document.querySelector(".review-container");

// formEl.addEventListener("submit");

function validateForm() {}

function validateName() {
  if (name.value === "") {
    console.log("Please provide a name");
    name.focus();
    return false;
  }
  return name.value;
}
