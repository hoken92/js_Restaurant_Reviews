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
const reviewsContainer = document.querySelector(".review-container");

// Runs the functions when a user submits the form
formEl.addEventListener("submit", function (evt) {
  // Prevents form from defaulting
  evt.preventDefault();

  //Runs the validate form function
  const reviewSubmission = validateForm(evt);
  console.log(reviewSubmission);

  // Creates a new div to store review information and appends to reviews container
  const newReviewDiv = reviewsContainer.appendChild(
    document.createElement("div")
  );
  newReviewDiv.classList.add("review");

  // Creates a <p> element and inserts reviewSubmission objects as a string
  // Set the review-header class
  // Append it to the reviewDiv

  // Creates a date stamp and appends into the above <p> element
  // Set the date-stamp class

  // Create another p tag to add reviewSubmission.review object and append it to the review container
  // Set the review-text class

  // 1. Grab the p tag and set it into the div
  // Place the object key/values into a variable into the p tag, like a temp literal
  const str = reviewSubmission.name + reviewSubmission.Restaurant_name;

  const ptag = doc;
  console.log(str);

  //   formEl.reset();
});

// cache objects into the below array
// Each review will be iterated to be shown on the page
// Either show the total of reviews or find the most recent review and display it separately
let reviews = [];

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
  // Inserts the reviewInfo object inside review array
  review.push(reviewInfo);
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
