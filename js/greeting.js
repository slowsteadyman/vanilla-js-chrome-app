const loginForm = document.querySelector(".login");
const helloH1 = document.querySelector(".hello");
const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";
const usernameValue = localStorage.getItem(USERNAME_KEY);

function loginFormSubmit(event) {
  event.preventDefault();
  const username = document.querySelector(".login input:first-child").value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.toggle(HIDDEN_CLASS);
  helloH1.innerText = `반가워 ${username}^^`;
  helloH1.classList.toggle(HIDDEN_CLASS);
}

if (usernameValue) {
  helloH1.innerText = `반가워 ${usernameValue}^^`;
  helloH1.classList.toggle(HIDDEN_CLASS);
} else {
  loginForm.classList.toggle(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginFormSubmit);
}
