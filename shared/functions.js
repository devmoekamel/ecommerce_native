export let addUserCookie = (value) => {
  let today = new Date();
  today.setDate(today.getDate() + 3);
  document.cookie = `user=${value}; expires=${today}; path=/`;
};

export let getUser = () => {
  let username = localStorage.getItem("user");

  if (username) {
    return JSON.parse(username);
  }
  return null;
};
export let getCartItems = () => {
  if (!localStorage.getItem("cart")) {
    return [];
  }
  return JSON.parse(localStorage.getItem("cart"));
};
// console.log(getCartItems());
export let totalPriceCalc = () => {
  let cartItems = getCartItems();
  let totalPrice = 0;
  cartItems.forEach((product) => {
    totalPrice += Number(product.price) * Number(product.count);
  });
  return totalPrice;
  // 
};




