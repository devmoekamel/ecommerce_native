// let base_url = "https://fakestoreapi.in/api/";
let productId = location.href.split("=")[1];
let product_detials;
let getProductById = async () => {
  try {
    let request = await fetch("https://fakestoreapi.com/products/" + productId);
    // let product = await JSON.parse(await request.text()).product;
    let product = await JSON.parse(await request.text());
    product_detials = product;
    return product;
  } catch (error) {
    console.log("jkj");
  }
};

let productDetial = (product) => {
  return `
    <div id="main-container">
        <div id="image-container">
  <img id="img" src="${product.image}" alt="">
        </div>
        <div id="text-contianer">
            <div>
                <h2>Product Name : <span> ${product.title} </span> </h2>
                <h2>Price : <span>${product.price}</span></h2>
                <h2>Category : <span>${product.category}</span></h2>
                <h2>Brand : <span>${product.brand}</span></h2>
            </div>
            <button id="btn" onclick='addToCart(${product.id})'>
                Add to Cart
            </button>
        </div>
    </div>
    `;
};

getProductById()
  .then((product) => {
    console.log(product);
    document.body.innerHTML += productDetial(product);
  })
  .catch((error) => {
    console.log("f");
  });

function getCart (){

return  localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[];
} 

window.addToCart = (event) => {
  // localStorage.setItem("cart",JSON.stringify());
  // let product = allProducts[event.id - 1];
  let cartItems = getCart();
  let flag = false;
  let productId;
  for (let i = 0; i < cartItems.length; i++) {
    if (cartItems[i].title == product_detials.title) {
      flag = true;
      productId = i;
      break;
    }
  }

  if (!flag) {
    console.log("addedd");
    product_detials.count = 1;
    cartItems.push(product_detials);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    // location.reload();
  } else {
    console.log("addedd");

    cartItems[productId].count++;
    localStorage.setItem("cart", JSON.stringify(cartItems));
    // location.reload();
  }

  // console.log(allProducts[event.id - 1]);
  // console.log(event.id);
};
