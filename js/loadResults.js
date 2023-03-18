window.onload = () => {
  let results = {
    //elements
    element: document.getElementById("main-results"),
    msrpElement: document.getElementById("main-msrp"),

    //result html manipulation
    resetResults: function () {
      this.element.innerHTML = "";
    },
    addResult: function (htmlElement) {
      this.element.innerHTML += htmlElement;
    },

    htmlConversion: function (result, sale = 0) {
      return html` <div class="product" data-id="${result.id}">
        <div class="product-image-container">
          ${this.msrpChecker(result) ? `<img src=""/>` : ``}
          <img class="product-image" src="${result.imageUrl}" />
        </div>
        <div class="product-information"></div>
      </div>`;
    },

    //data extraction methods

    //dont want to have to think about this later
    //so i'm making sure the I can compare MSRP and PRICE
    //easily
    msrpChecker: (result) => {
      return result.msrp > result.price;
    },
    paginationData: (result) => {
      return {
        total: result.pagination.totalResults,
        start: result.pagination.begin,
        finish: result.pagination.totalPages,
        current: result.pagination.currentPage,
      };
    },
    getName: (result) => {
      return result.name;
    },
    getPrice: (result) => {
      return result.price;
    },
    getImage: (result) => {
      return result.imageUrl;
    },
    getDescription: (result) => {
      return result.description;
    },
  };

  const search = new SearchSpringAPI();
  const initialResults = search.search(1, "");
  search
    .search(1, "")
    .then((response) => {
      console.log(response.results[0]);
      return response.results;
    })
    .then((resultsJson) => {
      resultsJson.forEach((result) => {
        results.addResult(results.htmlConversion(result));
      });
    });
};
