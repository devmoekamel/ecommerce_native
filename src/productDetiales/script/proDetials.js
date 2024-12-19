// let base_url = "https://fakestoreapi.in/api/";
let productId = location.href.split("=")[1];

let getProductById = async () => {
  try {
    let request = await fetch("https://fakestoreapi.com/products/" + productId);
    // let product = await JSON.parse(await request.text()).product;
    let product = await JSON.parse(await request.text());
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
            <button id="btn">
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
