import { cart_item } from "../components/cart_item_comp.js";
import { head_table } from "../components/table_head.js";
import { price_compoment } from "../components/total_price_component.js";

document.body.innerHTML += head_table();

export let getCartItems = () => {
  return JSON.parse(localStorage.getItem("cart"));
};

let cartItems = getCartItems();
cartItems.forEach((product) => {
  document.body.innerHTML += cart_item(product);
});
document.body.innerHTML += price_compoment();

// document.body.innerHTML += "";
// console.log(getCartItems());
// let CartItems = getCartItems();
// console.log(typeof CartItems);
// CartItems.forEach((product) => {
//   document.body.innerHTML += cart_item(product);
// });
