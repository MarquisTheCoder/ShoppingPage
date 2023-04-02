class ResultsManager {
  //elements
   static #mainResults = document.getElementById("main-results");
   static #mainMsrp = document.getElementById("main-msrp");

  //result html manipulation
  static resetResults() {
    ResultsManager.#mainResults.innerHTML = "";
  }

  static addResult(htmlElement) {
    ResultsManager.#mainResults.innerHTML += htmlElement;
  }

  // this function turns json object data from a query into and insertable html element
  static toHtml(result, sale = 0) {
    
    //parsing result data into individual variables
    let price = result.price;
    let msrp = result.msrp;
    let percentage = (100 - (price / msrp) * 100).toFixed(0);
    
    // formaulating the html element to be used later
    return ` 
      <div class="product" id=${result.id} data-id="${result.id}" data-name="${
      result.name
    }" data-product-url="${result.url}">
        <div class="product-image-container">
          ${
            ResultsManager.msrpChecker(result)
              ? `<span class="price-difference" data-msrp="${result.msrp}" data-price="${result.price}">-${percentage}%</span>`
              : ""
          }
          ${
            ResultsManager.msrpChecker(result) && percentage >= 20
              ? `<img class="product-sale-icon" src="imgs/main/sale.png" />`
              : ""
          }
          <img class="product-image" src="${result.imageUrl}" />
        </div>
        <div class="product-information">
          <div class="product-prices">
            <p class="product-price">$${result.price}</p>
            <p class="product-msrp">$${result.msrp}</p>
          </div>
          <img class="add-to-cart" src="imgs/main/add-to-cart.svg"/> 
        </div>
      </div>`;
  }

  // simplifying checking whether a product is on sale or not 
  static msrpChecker(result) {
    return result.msrp > result.price;
  }
 
}
