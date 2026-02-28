const wrapper = document.querySelector(".wrapper");
const signUpBtn = document.querySelector(".signUpBtn-link");
const signInBtn = document.querySelector(".signInBtn-link");


const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

// Switch form
signUpBtn.onclick = () => wrapper.classList.add("active");
signInBtn.onclick = () => wrapper.classList.remove("active");

// SIGN UP
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = suUsername.value;
  const email = suEmail.value;
  const password = suPassword.value;

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  alert("Sign Up Success!");
  wrapper.classList.remove("active");
});

// LOGIN
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = liUsername.value;
  const password = liPassword.value;

  const savedUser = localStorage.getItem("username");
  const savedPass = localStorage.getItem("password");

  if (username === savedUser && password === savedPass) {
    alert("Login Success!");
    window.location.href = "https://codewithte.github.io/TeTech/";
    alert("Wrong Username or Password");
  }
  
});
// TOGGLE FORM OPEN / CLOSE
const toggleBtn = document.getElementById("toggleFormBtn");

// hide form at start
wrapper.classList.add("hidden");

toggleBtn.onclick = () => {
  wrapper.classList.toggle("hidden");

  if (wrapper.classList.contains("hidden")) {
    toggleBtn.innerText = "Log in";
    toggleBtn.style.background=" #0ef";
  } else {
    toggleBtn.innerText = "Log in";
    toggleBtn.style.background=" #0ef";
  }
};
