export let cardComponent = (product) => {
  return ` <div class="card">
        <div class="card-image" id="${product.id}">
          <img
            id="img"
            src=${product.image}
            alt=""
          />
        </div>
        <div class="card-content">
          <h3 onclick="goto(${product.id})">${product.title}</h3>
          <p>${product.category}</p>
          <div class="card-footer">
            <span>${product.price} $</span>
            <button class="cart-button" id="${product.id}" onclick="addToCart(this)">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
      </div>`;
};

// /productdetials/
