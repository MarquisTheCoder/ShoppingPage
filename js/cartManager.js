class CartManager {
  //capturing all elements needed for the cart maanagement
  static #cartState = () => GlobalStateManager.retrieve("cart");
  static #cart = document.getElementById("cart");
  static #cartAmount = document.getElementById("cart-amount");

  static #searchSide = document.getElementsByClassName("flip-search")[0];
  static #cartSide = document.getElementsByClassName("flip-cart")[0];

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

  static findParentProdct(element) {
    return element.closest(".product");
  }

  //takes an element and generates a new cart item
  static generateCartProduct(product) {
    let productImage = product.getElementsByClassName("product-image")[0];
    let productPrice =
      product.getElementsByClassName("product-price")[0].innerText;
    let productId = product.dataset.productId;

    return `
      <div class="cart-product" data-id="${productId}">
        <img src="${productImage.src}" alt="${productImage.alt}" />
        <div class="cart-product-info">
          <p class="product-price">${productPrice}</p>
          <div class="product-quantity-changer">
            <img src="../imgs/minus.svg" alt="minus" />
            <p class="product-quantity">product price</p>
            <img src="../imgs/plus.svg" alt="plus" />
            <img src="../imgs/trash.svg" alt="remove" />
          </div>
        </div>
      </div>
    `;
  }

  //adding product to cart
  static addProductToCart(product) {
    CartManager.changeCartAmount(1);
    CartManager.#cart.innerHTML += CartManager.generateCartProduct(product);
  }

  //removing product from cart
  static removeProductFromCart(cartProduct) {
    CartManager.changeCartAmount(-1);
    cartProduct.remove();
  }
}
