const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];

const img = document.createElement("img");
img.src = `img/${images[Math.floor(Math.random() * images.length)]}`;

document.body.appendChild(img);
