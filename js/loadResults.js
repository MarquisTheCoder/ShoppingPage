//function to load results of any query and page
//this will be very useful when utilizing our global state
//manager later
function loadResults(page) {
  const spring = new SearchSpringAPI();
  const resultsManager = new ResultsManager();

  resultsManager.resetResults();
  let query = GlobalStateManager.retrieve("currentQuery");
  //for init this will be 1, ""
  spring
    .search(query, page)
    .then((response) => {
      if (query != "") {
        document.getElementById(
          "query-information"
        ).innerText = `Search: "${query}"`;
        document.getElementById(
          "pages-information"
        ).innerText = `${page} - ${response.pagination.totalPages}`;
        // document.getElementById("result-count-information").innerText = `${response.pagination.totalResults}`;
      }

      //-----------------here is where we will add pagination to the global state --------------------------------
      currentPage.innerText = page;
      return response.results;
    })
    .then((json) => {
      json.forEach((result) => {
        //adding each result to the main page while converting the json result to and html div
        resultsManager.addResult(resultsManager.toHtml(result));
      });
    })
    .then(() => {
      CartManager.init();
    });
}

function loadSuggestedProducts() {
  const spring = new SearchSpringAPI();
  const resultsManager = new ResultsManager();
  const suggestedItemsList = document.getElementById("suggested-items-list");
  let query = GlobalStateManager.retrieve("currentQuery");
  suggestedItemsList.innerHTML = "";
  //for init this will be 1, ""
  spring
    .search(query + "bottoms", 1)
    .then((response) => {
      return response.results;
    })
    .then((json) => {
      json.forEach((result) => {
        suggestedItemsList.innerHTML += resultsManager.toHtml(result);
      });
    });
}

window.onload = () => {
  //on page load we will render random default page between 1 and 30
  loadResults(Math.floor(Math.random() * 30) + 1);
  loadSuggestedProducts();
};
