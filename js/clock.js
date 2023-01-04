const clock = document.querySelector("#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}`;
}

getClock();
setInterval(getClock, 1000);

/* const clock2 = document.querySelector("#clock2");

function getClock2() {
  const date = new Date();
  clock2.innerText = date.toLocaleTimeString("it-IT");
}

getClock2();
setInterval(getClock2, 1000); */
