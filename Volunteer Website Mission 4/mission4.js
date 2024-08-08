// login
document
  .getElementById("signInForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way

    // Get the form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Simple validation
    if (email && password) {
      // Redirect to the thank you page
      window.location.href = "mission4_thank.html";
    } else {
      // If form is not complete, you can show an error message or alert
      alert("Please fill in both email and password.");
    }
  });

const k_container = document.getElementById("k_container");
const k_registerBtn = document.getElementById("k_register");
const k_loginBtn = document.getElementById("k_login");

k_registerBtn.addEventListener("click", () => {
  k_container.classList.add("active");
});

k_loginBtn.addEventListener("click", () => {
  k_container.classList.remove("active");
});

document
  .getElementById("donateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const cardNumber = document.getElementById("cardNumber").value;
    let amount = document.querySelector('input[name="amount"]:checked').value;

    if (amount === "other") {
      amount = document.getElementById("otherAmount").value;
    }

    const imageUpload = document.getElementById("imageUpload").files[0];
  });
