let rating = null;
const mainElement = document.querySelector("main");
const ratingButtons = document.querySelectorAll(".rating");
const submitButton = document.querySelector(".submit-btn");

const setRating = function chooseRating() {
  ratingButtons.forEach((btn) => btn.classList.remove("chosen"));
  this.classList.add("chosen");
  rating = +this.textContent;
};

const submitRating = function ratingSubmission() {
  mainElement.classList.add("thank-you");
  mainElement.innerHTML = `<img src="./images/illustration-thank-you.svg" alt="Phone" class="thank-you-img" />
  <div class="chosen-rating">You selected ${rating} out of 5</div>
  <div class="text">
    <h1>Thank you!</h1>
    <p>
    We appreciate you taking the time to give a rating. If you ever need
    more support, don't hesitate to get in touch!
    </p>
    </div>`;
};

ratingButtons.forEach((btn) => {
  btn.addEventListener("click", setRating);
});
submitButton.addEventListener("click", submitRating);
