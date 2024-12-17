export let cart_item = (product) => {
  return ` <div class="cart-item">
      <div class="item-details">
        <img
          src="${product.image}"
          alt=""
        />
        <h3>
          ${product.title}
        </h3>
      </div>
      <div class="item-price">
        <h2>${product.price}$</h2>
      </div>
      <div class="item-amout">
        <a href="#"><i class="fa-solid fa-minus"></i></a>
        <h2>${product.count}</h2>
        <a href="#"><i class="fa-solid fa-plus"></i></a>
      </div>
      <div class="item-total-price">
        <h2>${Number(product.price) * Number(product.count)}$</h2>
      </div>
    </div>
    <hr>`;
};
