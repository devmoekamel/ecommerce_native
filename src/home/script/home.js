import { cardComponent } from "../components/cardComponent.js";
import { getAllCategories, getAllProducts } from "./productApi.js";
let productList = document.getElementById("productList");

let i = 0;
let imges = ["assets/ban1.jpg", "assets/ban2.jpg", "assets/ban3.jpg"];
let sliderElement = document.getElementById("slider");
window.onload = setInterval(() => {
  sliderElement.src = imges[i++ % imges.length];
}, 2000);

getAllProducts().then((products) =>
  products.forEach((product) => {
    productList.innerHTML += cardComponent(product);
  })
);

getAllCategories();
