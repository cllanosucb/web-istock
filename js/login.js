
document.getElementById("login-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email !== "" && password !== "") {
    window.location.href = "dashboard.html";
  }
});
