const modal = document.getElementById("search-and-cart-modal");
const overlay = document.querySelector("#search-and-cart-modal .overlay");
const content = document.querySelector("#search-and-cart-modal .content");
const backButton = document.getElementById("search-back-button");

backButton.addEventListener("click", () => {
  modal.style.width = 0;
  content.style.width = 0;
  overlay.style["background-color"] = "#0000";
});

/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerDisplay() {
  var x = document.getElementById("main-menu");
  if (x.style.display === "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

function autocomplete() {}
function searchAndCartDisplay() {
  const isMobile = window.matchMedia("(max-width: 768px");
  if (isMobile.matches) {
    console.log(`match: ${isMobile.matches}`);
    content.style.width = "80vw";
  } else {
    content.style.width = "35vw";
  }
  modal.style.width = "100vw";
  overlay.style["background-color"] = "#0009";
}

function startCart() {
  CartManager.flipTo("cart");
  searchAndCartDisplay();
}
