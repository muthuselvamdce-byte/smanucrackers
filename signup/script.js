function signup(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password1 = document.getElementById("password1").value.trim();
  const password2 = document.getElementById("password2").value.trim();
  if (name === "" || email === "" || password1 === "" || password2 === "") {
    alert("Fill the required boxes");
    return;
  } else if (password1.length < 6) {
    alert("Password must be at least 6 characters");
    return;
  } else if (password1 !== password2) {
    alert("Password must be equal");
  } else {
    window.location.href = "/loginsigninotp/otp/otp.html";
  }
}
