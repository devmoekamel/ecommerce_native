// import { userData } from "../../Auth/Login/script/login.js";
import { cardComponent } from "../components/cardComponent.js";
import { footer_component } from "../components/footer_component.js";
import { header_component } from "../components/header_component.js";
import { allProducts, getAllProducts } from "./productApi.js";

document.body.insertAdjacentHTML("afterbegin", header_component());
// document.body.innerHTML += slider_component();
let productList = document.getElementById("productList");

let i = 0;
let imges = ["assets/ban1.jpg", "assets/ban2.jpg", "assets/ban3.jpg"];
let sliderElement = document.getElementById("slider");
window.onload = setInterval(() => {
  sliderElement.src = imges[i++ % imges.length];
}, 2000);
// let showen_productList = ;
// document.body.innerHTML += productList_component();

// setTimeout(() => {}, 4000);
getAllProducts().then((products) => {
  // console.log(products);

  products.forEach((product) => {
    productList.innerHTML += cardComponent(product);
  });
});

window.addToCart = (event) => {
  // localStorage.setItem("cart",JSON.stringify());
  let product = allProducts[event.id - 1];
  let cartItems = window.getCart();
  let flag = false;
  let productId;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title == product.title) {
      flag = true;
      productId = i;
      break;
    }
  }

  if (!flag) {
    product.count = 1;
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  } else {
    cartItems[productId].count++;
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  // console.log(allProducts[event.id - 1]);
  // console.log(event.id);
};
window.getCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart"));
  if (cart) {
    return cart;
  } else {
    return [];
  }
};

window.getCart();
document.body.insertAdjacentHTML("beforeend", footer_component());
window.goto = (productid) => {
  window.location.href = `/src/productDetiales/index.html?id=${productid}`;
};
