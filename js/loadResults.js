window.onload = () => {
  let results = {
    //elements
    element: document.getElementById("main-results"),
    msrpElement: document.getElementById("main-msrp"),

    //result html manipulation
    resetResults: () => {
      this.element.innerHTML = "";
    },
    addResult: (htmlElement) => {
      this.element.append(htmlElement);
    },

    htmlConversion: (result) => {},
    htmlMSRPConversion: (result) => {},

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
};
