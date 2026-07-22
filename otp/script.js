const inputs = document.querySelectorAll(".otp");
const para = document.getElementById("info");
let OTP = "";
function sendotp() {
  OTP = String(Math.floor(1000 + Math.random() * 9000));
  para.textContent = "We've sent an OTP to your email";
  setTimeout(() => {
    alert("Your OTP is: " + OTP);
  }, 300);
}
inputs.forEach((input, index) => {
  input.addEventListener("input", () => {
    input.value = input.value.replace(/[^0-9]/g, "");
    if (input.value && index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
  });
});
function verifyotp() {
  if (!OTP) {
    alert("Please send OTP first");
    return;
  }
  let verify = "";
  inputs.forEach((input) => {
    verify += input.value;
  });
  if (verify.length !== 4) {
    alert("Please enter complete OTP");
    return;
  }
  if (verify === OTP) {
    alert("Your account has been verified successfully!");
    clearOTPs();
  } else {
    alert("Your verification failed!");
  }
}
function clearOTPs() {
  inputs.forEach((input) => (input.value = ""));
  inputs[0].focus();
}
