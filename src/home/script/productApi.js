let base_url = "https://fakestoreapi.com/";
let allproductsEndPoint = "products";
let allCategories = allproductsEndPoint + "/category";
export let allProducts = [];
let getAllProducts = async () => {
  try {
    let request = await fetch(base_url + allproductsEndPoint);
    let products = await JSON.parse(await request.text());
    // let products = await JSON.parse(await request.text()).products;
    // console.log(products);
    allProducts = products;
    return allProducts;
  } catch (error) {
    console.log(error);
  }
};

let getAllCategories = async () => {
  try {
    let request = await fetch(base_url + allCategories);
    let categories = await JSON.parse(await request.text()).categories;
    console.log(categories);
    return categories;
  } catch (error) {}
};

export { getAllProducts, getAllCategories };
