const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

const login_btn = document.querySelector(".sign-in-form .btn");

login_btn.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior
  window.location.href = "home.html"; // Replace with the path to your other HTML file
});
