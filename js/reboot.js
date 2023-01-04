const reboot = document.querySelector("#reboot");
reboot.innerText = "reset";

reboot.addEventListener("click", initialization);

function initialization() {
  localStorage.clear();
  location.reload();
}
