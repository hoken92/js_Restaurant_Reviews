// Selectors

// Form
const formEl = document.getElementById("review-form");
const nameEl = document.getElementById("name");
const restNameEl = document.getElementById("restaurant-name");
const ratingEl = document.getElementById("rating");
const dateEl = document.getElementById("visit-date");
const reviewInfoEl = document.getElementById("review-info");
const submitBtn = formEl.lastElementChild;
const messageBox = document.getElementById("alertMessage");

// Reviews
const reviewsContainer = document.querySelector("#review-container");

// Runs the functions when a user submits the form
formEl.addEventListener("submit", function (evt) {
  // Prevents form from defaulting
  evt.preventDefault();

  //Runs the validate form function
  const reviewSubmission = validateForm(evt);

  // If reviewSubmission contains a false value, focus on the empty input field and throw a message
  if (reviewSubmission === false) {
    return;
  } else {
    // Captures reviewer info into a variable
    const reviewerString = `${reviewSubmission.name} | ${reviewSubmission.Restaurant_name} | Rating: ${reviewSubmission.rating} | Visit Date: ${reviewSubmission.date_visited}`;
    const reviewString = `${reviewSubmission.review}`;
    console.log(reviewString);

    // Creates a new div to store review information and appends to reviews container
    const newReviewDiv = reviewsContainer.appendChild(
      document.createElement("div")
    );
    newReviewDiv.classList.add("review");

    // Creates a <p> element and inserts reviewSubmission objects as a string
    // Set the review-header class
    // Append it to the reviewDiv
    const newReviewHeader = newReviewDiv.appendChild(
      document.createElement("p")
    );
    newReviewHeader.classList.add("review-header");
    newReviewHeader.textContent = reviewerString;

    // Creates a date stamp and appends into the above <p> element
    // Set the date-stamp class
    const timeStamp = newReviewHeader.appendChild(
      document.createElement("span")
    );
    timeStamp.classList.add("date-stamp");
    timeStamp.textContent = new Date().toLocaleString();

    // Create another p tag to add reviewSubmission.review object and append it to the review container
    // Set the review-text class
    const newReviewInfo = newReviewDiv.appendChild(document.createElement("p"));
    newReviewInfo.classList.add("review-text");
    newReviewInfo.textContent = reviewString;

    // formEl.reset();
  }
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

  // Inserts the reviewInfo object inside review array
  //   review.push(reviewInfo);
  return reviewInfo;
}

// Define Validate functions
function validateName() {
  if (nameEl.value === "") {
    displayMessage("Please provide a name");
    nameEl.focus();
    return false;
  }
  return nameEl.value;
}

function validateRestaurant() {
  if (restNameEl.value === "") {
    displayMessage("Please provide a resturant name");
    restNameEl.focus();
    return false;
  }
  return restNameEl.value;
}

function validateDate() {
  const todaysDate = new Date().toISOString().split("T", 1);

  if (dateEl.value > todaysDate) {
    displayMessage("Please enter a valid date.");
    return false;
  } else if (dateEl.value === "") {
    displayMessage("Please enter a date.");
    return false;
  }
  return dateEl.value;
}

function displayMessage(message) {
  messageBox.style.display = "flex";
  messageBox.style.textAlign = "center";
  messageBox.style.alignItems = "center";
  messageBox.style.justifyContent = "center";
  messageBox.textContent = message;
  setTimeout(() => {
    messageBox.style.display = "none";
  }, 2000);
}
