import { totalPriceCalc } from "../../../shared/functions.js";

export let price_compoment = () => {
  return `<div class="price-container">
      <div class="price-detials">
        <div class="totalprice-content">
          <h2>Total Price : <span>${totalPriceCalc() ?? 0}$</span></h2>
        </div>
        <div class="checkout-container">
          <button onclick='CartCheckOut()'>CheckOut</button>
        </div>
      </div>
    </div>`;
};
