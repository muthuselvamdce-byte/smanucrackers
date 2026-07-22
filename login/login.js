function result(e) {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (email === "" || password === "") {
    alert("Fill the required boxes");
    return;
  } else if (password.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  } else {
    alert("logged in successfully");
  }
}
