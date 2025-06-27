document.getElementById("feedbackForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const message = document.getElementById("message").value.trim();
  const error = document.getElementById("error");

  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  const mobilePattern = /^[0-9]{10}$/;

  if (!name || !email || !mobile || !message) {
    error.textContent = "Please fill in all fields.";
  } else if (!emailPattern.test(email)) {
    error.textContent = "Enter a valid email address.";
  } else if (!mobilePattern.test(mobile)) {
    error.textContent = "Mobile number should be 10 digits.";
  } else {
    error.textContent = "";
    alert("Thanks for your feedback!");
    document.getElementById("feedbackForm").reset();
  }
});
