let i = 0;
let imges = ["assets/ban1.jpg", "assets/ban2.jpg", "assets/ban3.jpg"];
let sliderElement = document.getElementById("slider");
window.onload = setInterval(() => {
  sliderElement.src = imges[i++ % imges.length];
}, 2000);
