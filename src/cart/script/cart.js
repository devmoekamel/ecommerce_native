import { footer_component } from "../../../shared/components/footer_component.js";
import { header_component } from "../../../shared/components/header_component.js";
import { getCartItems } from "../../../shared/functions.js";
import { cart_item } from "../components/cart_item_comp.js";
import { head_table } from "../components/table_head.js";
import { price_compoment } from "../components/total_price_component.js";

document.body.innerHTML += header_component();
document.body.innerHTML += head_table();

if (!localStorage.getItem("cart")) {
  localStorage.setItem("cart", JSON.stringify([]));
}

let cartItems = getCartItems();
cartItems.forEach((product, index) => {
  document.body.innerHTML += cart_item(product, index);
});
document.body.innerHTML += price_compoment();
document.body.innerHTML += footer_component();

window.deleteItem = (ProductId) => {
  let cartItems = getCartItems();
  cartItems.splice(ProductId, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  location.reload();
};




window.addItemAmount = (ProductId) => {
  let cartItems = getCartItems();
  cartItems[ProductId].count++;
  localStorage.setItem("cart", JSON.stringify(cartItems));
  location.reload();
};
window.RemoveItemAmount = (ProductId) => {
  let cartItems = getCartItems();
  if (cartItems[ProductId].count > 1) {
    cartItems[ProductId].count--;
  } else {
    cartItems.splice(ProductId, 1);
  }
  localStorage.setItem("cart", JSON.stringify(cartItems));
  location.reload();
};

window.CartCheckOut = ()=>{
  localStorage.removeItem("cart");
  location.href = "/src/shippedOrder/shippedoder.html";
}