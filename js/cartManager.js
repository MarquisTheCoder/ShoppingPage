class CartManager {
  //capturing all elements needed for the cart maanagement
  static #cartState = () => GlobalStateManager.retrieve("cart");
  static #cart = document.getElementById("cart-items");
  static #cartAmount = document.getElementById("cart-amount");

  static #searchSide = document.getElementsByClassName("flip-search")[0];
  static #cartSide = document.getElementsByClassName("flip-cart")[0];

  //initializing the cart manager by adding event listeners to all add to cart buttons
  static init() {
    let allCartButtons = document.getElementsByClassName("add-to-cart");
    for (let cartButton of allCartButtons) {
      cartButton.addEventListener("click", function () {
        let product = CartManager.findParentProduct(this);
        let cartItem = CartManager.generateCartProduct(product);
        CartManager.addProductToCart(cartItem, product.dataset.id);
      });
    }
  }

  //retreiving cart element and adding/subtracting by parameter
  static changeCartAmount(amount) {
    CartManager.#cartAmount.innerText =
      parseInt(CartManager.#cartAmount.innerText) + parseInt(amount);
  }

  //flips to the opposing page
  static flipTo(page) {
    if (page == "search") {
      CartManager.#cartSide.classList.add("flipped");
      CartManager.#searchSide.classList.remove("flipped");
    } else if (page == "cart") {
      CartManager.#cartSide.classList.remove("flipped");
      CartManager.#searchSide.classList.add("flipped");
    }
  }

  static findParentProduct(element) {
    return element.closest(".product");
  }

  //takes an element and generates a new cart item
  static generateCartProduct(product) {
    let productImage = product.getElementsByClassName("product-image")[0];
    let productPrice =
      product.getElementsByClassName("product-price")[0].innerText;
    let productId = product.dataset.id;
    let productName = product.dataset.name;

    return `
      <div class="cart-product" data-id="${productId}" id="cart-${productId}" style="display:inherit">
        <div class="cart-product-image-container">
          <img
            src="${productImage.src}"
            alt="${productImage.alt}"
            class="cart-product-image"
          />
        </div>
        <div class="cart-product-name" flex><p>${productName}</p></div>
        <div class="cart-product-info align-cart">
          <p class="product-price">${productPrice}</p>
          <div class="product-quantity-changer flex">
            <img src="imgs/minus.svg" alt="minus" class="amount-changer" />
            <p class="product-quantity">0</p>
            <img src="imgs/plus.svg" alt="plus" class="amount-changer" />
            <div class="trash-container">
              <img
                src="imgs/trash.svg"
                alt="remove"
                class="amount-changer trash"
              />
            </div>

          </div>
        </div>
      </div>
    `;
  }

  //adding product to cart
  static addProductToCart(product, id) {
    let existingCartItem = document.querySelector(`#cart-${id}`);

    if (existingCartItem !== null) {
      let quantity =
        existingCartItem.getElementsByClassName("product-quantity")[0];
      quantity.innerText = parseInt(quantity.innerText) + 1;
      console.log(quantity.innerText);
    } else {
      CartManager.changeCartAmount(1);
      CartManager.#cart.innerHTML += product;
    }
  }

  //removing product from cart
  static removeProductFromCart(cartProduct, id) {
    CartManager.changeCartAmount(-1);
    cartProduct.remove();
  }
}
