import { cart_item } from "../components/cart_item_comp.js";
import { head_table } from "../components/table_head.js";
import { price_compoment } from "../components/total_price_component.js";

document.body.innerHTML += head_table();

let getCartItems = async () => {
  let items = await JSON.parse(localStorage.getItem("cart"));
  if (items) {
    // console.log(items);
    return items;
  }
  return;
};
getCartItems().then((products) => {
  products.forEach((product) => {
    document.body.innerHTML += cart_item(product);
  });
});

// document.body.innerHTML += "";
// console.log(getCartItems());
// let CartItems = getCartItems();
// console.log(typeof CartItems);
// CartItems.forEach((product) => {
//   document.body.innerHTML += cart_item(product);
// });

document.body.innerHTML += price_compoment();
