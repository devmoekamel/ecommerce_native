let username = document.getElementById("username");
let password = document.getElementById("password");
let usernameSpan = document.getElementById("usernameSpan");
let passwordSpan = document.getElementById("passwordSpan");
let loginform = document.getElementById("login-form");

let flag = false;

let userData = {
  username: "",
  password: "",
};

function CheckUser() {
  let users = JSON.parse(localStorage.getItem("users"));
  let flag = false;
  users.forEach((user) => {
    if (user.username == userData.username) {
      flag = true;
    }
  });
  return flag;
}

username.addEventListener("input", (event) => {
  let value = event.target.value;
  if (value) {
    usernameSpan.style.display = "none";
    userData.username = value;
  } else {
    usernameSpan.style.display = "block";
    console.log("username error");
  }
});

password.addEventListener("input", (event) => {
  let value = event.target.value;

  if (value) {
    passwordSpan.style.display = "none";
    userData.password = value;
  } else {
    // error span for password
    passwordSpan.style.display = "block";
    console.log("error password");
  }
});

loginform.addEventListener("submit", (event) => {
  event.preventDefault();
  if (userData.username && userData.password) {
    let user = CheckUser();
    console.log(user);

    if (user) {
      location.href = "/src/home/home.html";
      localStorage.setItem("user", JSON.stringify(userData));
    }
  }
});

// export { userData };

// console.log(location.href);
