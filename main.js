const ratings = document.querySelectorAll(".rating");
let feedbackRate = "";
//

ratings.forEach((rating) => {
  rating.addEventListener("click", (event) => {
    removeActive();
    feedbackRate = event.target.innerText || event.target.parentNode.innerText;
    event.target.classList.add("active");
    event.target.parentNode.classList.add("active");
  });
});

function removeActive() {
  ratings.forEach((rating) => {
    rating.classList.remove("active");
  });
}
btn.addEventListener("click", () => {
  //   alert("Thank you for your Feedback");
  if (feedbackRate !== "") {
    document.getElementById("container").innerHTML = `
    <strong>Thank you</strong>
    <p>Feedback: <b>${feedbackRate}</b></p>
    <p>We will take your feedback in consideration.</p>
    `;
  }
});
//
