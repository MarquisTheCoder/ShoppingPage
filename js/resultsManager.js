class ResultsManager {
  //elements
  element = document.getElementById("main-results");
  msrpElement = document.getElementById("main-msrp");

  //result html manipulation
  resetResults() {
    this.element.innerHTML = "";
  }

  addResult(htmlElement) {
    this.element.innerHTML += htmlElement;
  }

  toHtml(result, sale = 0) {
    let price = result.price;
    let msrp = result.msrp;
    let percentage = (100 - (price / msrp) * 100).toFixed(0);

    return ` 
      <div class="product" data-id="${result.id}" data-product-url="${
      result.url
    }">
        <div class="product-image-container">
          ${
            this.msrpChecker(result)
              ? `<span class="price-difference" data-msrp="${result.msrp}" data-price="${result.price}">-${percentage}%</span>`
              : ""
          }
          ${
            this.msrpChecker(result) && percentage >= 20
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

  //data extraction methods

  //dont want to have to think about this later
  //so i'm making sure the I can compare MSRP and PRICE
  //easily
  msrpChecker(result) {
    return result.msrp > result.price;
  }
  paginationData(result) {
    return {
      total: result.pagination.totalResults,
      start: result.pagination.begin,
      finish: result.pagination.totalPages,
      current: result.pagination.currentPage,
    };
  }
  getName(result) {
    return result.name;
  }
  getPrice(result) {
    return result.price;
  }
  getImage(result) {
    return result.imageUrl;
  }
  getDescription(result) {
    return result.description;
  }
}
