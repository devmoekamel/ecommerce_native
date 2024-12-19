// import { userData } from "../../Auth/Login/script/login.js";
import { cardComponent } from "../components/cardComponent.js";
import { footer_component } from "/shared/components/footer_component.js";
import { header_component } from "/shared/components/header_component.js";
import { allProducts, getAllProducts } from "./productApi.js";

document.body.insertAdjacentHTML("afterbegin", header_component());

// document.body.innerHTML += slider_component();
let productList = document.getElementById("productList");
let allproductCopied;

let i = 0;
let imges = ["assets/ban1.jpg", "assets/ban2.jpg", "assets/ban3.jpg"];
let sliderElement = document.getElementById("slider");
console.log(sliderElement);
window.onload = setInterval(() => {
  sliderElement.src = imges[i++ % imges.length];
}, 2000);
// let showen_productList = ;
// document.body.innerHTML += productList_component();
let displayProduct = (products) => {
  productList.innerHTML = "";
  products.forEach((product) => {
    productList.innerHTML += cardComponent(product);
  });
};

// setTimeout(() => {}, 4000);
getAllProducts().then((products) => {
  // console.log(products);
  allproductCopied = [...products];

  displayProduct(products);
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
    location.reload();
  } else {
    cartItems[productId].count++;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    location.reload();
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

// window.getCart();.
document.body.insertAdjacentHTML("beforeend", footer_component());
window.goto = (productid) => {
  window.location.href = `/src/productDetiales/index.html?id=${productid}`;
};

window.goToLoginPage = () => {
  location.href = "/src/Auth/Login/login.html";
};

// let CartLength = ()=>{
//   return getCartItems
// }

// element.addEventListener("click",()=>{
//   let audioProducts=allproductCopied.filter((product)=>{
//     console.log(audio.innerText);
//     return product.category==element.innerText.toLowerCase();
//   });
//   displayProduct(audioProducts);
// })

let getAllPCategories = async () => {
  try {
    let request = await fetch("https://fakestoreapi.com/products/categories");
    // let cats = await JSON.parse(await request.text()).categories;
    let cats = await JSON.parse(await request.text());
    return cats;
  } catch (error) {
    console.log(error);
  }
};
function displayCat(element) {
  return `<h3 id="${element}" onclick='filterproducts(this)' class="category-card">${element}</h3>`;
}
var catList = document.getElementById("Category-list");

getAllPCategories().then((cats) => {
  cats.forEach((element) => {
    catList.innerHTML += displayCat(element);
    let cat = document.getElementById(element);
  });
});

window.filterproducts = (event) => {
  let productsForCat = allproductCopied.filter((product) => {
    // console.log(audio.innerText);
    return product.category == event.innerText.toLowerCase();
  });
  if (productsForCat.length < 1) {
    displayProduct(allproductCopied);
  } else {
    displayProduct(productsForCat);
  }
};
// displayProduct(pridada)
// dad
/*
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // Output: [2, 4, 6]
*/
// https://fakestoreapi.in/api/products/category

//  0-0

// https://fakestoreapi.com/
// https://fakestoreapi.com/products
// https://fakestoreapi.com/products/categories
