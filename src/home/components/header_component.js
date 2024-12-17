import { getUserCookie } from "../../../shared/functions.js";

export let header_component = () => {
  console.log("header_component called");

  return `
     <header>
      <div class="logo-part">
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
      </div>
      <div class="nav-list">
        <ul>
          <li><a href="#">Products</a></li>
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Products</a></li>
        </ul>
      </div>
      <div class="cart-section">
        <a href="#">
          <i class="fa-solid fa-cart-shopping"></i>
          <span>(0)</span>
        </a>
      </div>
      <div class="user-section">
        <h3>${getUserCookie() ? getUserCookie() : ""}</h3>
       ${
         getUserCookie()
           ? "<button class='logout'>Logout</button>"
           : "<button class='login'>LogIn</button>"
       } 
      </div>
    </header>`;
};
