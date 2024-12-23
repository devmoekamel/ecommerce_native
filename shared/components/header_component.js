import { getCartItems, getUser } from "../functions.js";

// function Logout(){
// }

export let header_component = () => {
  console.log("header_component called");
  let CartLength = getCartItems().length;

  let user = getUser();

  return `
     <header>
      <div class="logo-part">
       <a href="/src/home/home.html">
        <svg
          id="logo-35"
          width="50"
          height="39"
          viewBox="0 0 50 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
            class="ccompli1"
            fill="#007AFF"
          ></path>
          <path
            d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
            class="ccustom"
            fill="#312ECB"
          ></path>
        </svg>
         <h2>Ecomma</h2>
       </a>
      </div>
      <div class="nav-list">
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Products</a></li>
        </ul>
      </div>
      ${
        user
          ? `<div class="cart-section">
        <a href="/src/cart/cart.html">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>Cart</span>
        </a>
      </div>`
          : ""
      }
      <div class="user-section">
        <h3>${user ? user.username : ""}</h3>
       ${
         user
           ? "<button class='logout' id='logout' onclick='logoutFunc()' >Logout</button>"
           : "<button class='login' onclick='goToLoginPage()'>LogIn</button>"
       } 
      </div>
    </header>`;
};

// window  - > shared.js  - > all pages -> link 

window.logoutFunc =()=>{
  console.log("ddada");
  localStorage.removeItem("cart");
  localStorage.removeItem("user");
  window.location.href="/src/Auth/Login/login.html";
  // localStorage.setItem("cart",json.stringify([]));
};
 