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
  const reviewSubmission = validateForm(evt);
  console.log(reviewSubmission);

  //   formEl.reset();
});

// Call the validation on all fields in the form
function validateForm(evt) {
  let reviewInfo = {};

  const ratingVal = ratingEl.value;
  const reviewVal = reviewInfoEl.value;

  // run Validate Name
  const nameVal = validateName();
  if (nameVal === false) {
    evt.preventDefault();
    return false;
  }

  // run Validate Restaurant Name
  const resturantVal = validateRestaurant();
  if (resturantVal === false) {
    evt.preventDefault();
    return false;
  }

  const dateVal = validateDate();
  if (dateVal === false) {
    evt.preventDefault();
    return false;
  }

  reviewInfo = {
    name: nameVal,
    Restaurant_name: resturantVal,
    rating: ratingVal,
    date_visited: dateVal,
    review: reviewVal,
  };
  //   console.log(reviewInfo);
  return reviewInfo;
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

function validateRestaurant() {
  if (restNameEl.value === "") {
    console.log("Please provide a resturant name");
    restNameEl.focus();
    return false;
  }
  return restNameEl.value;
}

function validateDate() {
  const todaysDate = new Date().toISOString().split("T", 1);

  if (dateEl.value > todaysDate) {
    console.log("Please enter a valid date.");
    return false;
  } else if (dateEl.value === "") {
    console.log("Please enter a date.");
    return false;
  }
  return dateEl.value;
}
