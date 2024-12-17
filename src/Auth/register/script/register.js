let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let usernameSpan = document.getElementById("usernameSpan");
let emailSpan = document.getElementById("emailSpan");
let passwordSpan = document.getElementById("passwordSpan");
let registerForm = document.getElementById("registerForm");
let user = {
  username: "",
  email: "",
  password: "",
};

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify([]));
}
username.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value != null) {
    user.username = value;
    usernameSpan.style.display = "none";

    console.log(user);
  } else {
    // error span for username
    username.style.display = "block";
    console.log("username error");
  }
});
email.addEventListener("input", (event) => {
  let value = event.target.value;
  if (/^[A-Za-z0-9]+@[A-Za-z0-9]+.com/.test(value)) {
    user.email = value;
    emailSpan.style.display = "none";
    console.log(user);
  } else {
    // error span for email
    emailSpan.style.display = "block";
    console.log("email error");
  }
});

password.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value.length >= 8) {
    user.password = value;
    passwordSpan.style.display = "none";

    console.log(user);
  } else {
    // error span for password
    passwordSpan.style.display = "block";
    console.log("error password");
  }
});

registerForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (user.email != null && user.password != null && user.username != null) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.push(user);
    registerForm.reset();
    user = {};
    console.log("user add");
    localStorage.setItem("users", JSON.stringify(users));
  }
});

// let getUser
