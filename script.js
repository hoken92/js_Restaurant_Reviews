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

// Runs the functions when a user submits the form
formEl.addEventListener("submit", function (evt) {
  evt.preventDefault();
  validateForm(evt);
});

// Call the validation on all fields in the form
function validateForm(evt) {
  // run Validate Name
  const nameVal = validateName();
  if (nameVal === false) {
    evt.preventDefault();
    return false;
  }

  console.log(nameVal);
}

// Define Validate functions
function validateName() {
  if (nameEl.value === "") {
    console.log("Please provide a name");
    nameEl.focus();
    return false;
  }
  return nameEl.value;
}
