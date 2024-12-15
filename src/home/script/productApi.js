let base_url = "https://fakestoreapi.in/api/";
let allproductsEndPoint = "products";
let allCategories = allproductsEndPoint + "/category";

let getAllProducts = async () => {
  try {
    let request = await fetch(base_url + allproductsEndPoint);
    let products = await JSON.parse(await request.text()).products;
    console.log(products);
    return products;
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
