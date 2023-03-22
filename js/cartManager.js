class CartManager {
  //capturing all elements needed for the cart maanagement
  static #cartState = GlobalStateManager.retrieve("cart");
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

  //takes an element and generates a new cart item
  static generateCartProduct(elemeent) {}

  //adding product to cart
  static addProductToCart(product) {}

  //removing product from cart
  static removeProductFromCart(product) {}
}
