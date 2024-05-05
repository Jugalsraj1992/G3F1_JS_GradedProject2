const validUsernamePasswords = [
  {
    username: "user1",
    password: "pass1",
  },
  {
    username: "user2",
    password: "pass2",
  },
  {
    username: "user3",
    password: "pass3",
  },
  {
    username: "user4",
    password: "pass4",
  },
];

const loginForm = document.getElementById("loginForm");
const usernameField = document.getElementById("username");
const passwordField = document.getElementById("password");
const passwordTag = document.getElementById("error");

usernameField.onfocus = clearError;
passwordField.onfocus = clearError;

window.history.forward();
function noBack() {
  window.history.forward();
}

function clearError() {
  passwordTag.innerText = "";
}


loginForm.onsubmit = function (event) {
  onLoginClick(event);
};

function onLoginClick(event) {
  event.preventDefault();
  const username = usernameField.value;
  const password = passwordField.value;
  const currentUser = validUsernamePasswords.find((userData) => {
    return userData.username === username;
  });
  if (!currentUser) {
    passwordTag.innerText = "invalid username/password";
  } else if (currentUser.password === password) {

    window.localStorage.setItem("username", username);
    window.localStorage.setItem("password", password);

    window.location.href = "./resumepage.html";
  } else {
    passwordTag.innerText = "invalid username/password";
  }
}