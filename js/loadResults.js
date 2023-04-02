

// global variables
const resultsManager = new ResultsManager();
const spring = new SearchSpringAPI();

//function to load results of any query and page
//this will be very useful when utilizing our global state
//manager later
function loadResults(page) {

  resultsManager.resetResults();
  let currentQuery = GlobalStateManager.retrieve("currentQuery");

  spring
    .search(currentQuery, page)
      .then((response) => {
        if (currentQuery != "") {
          document.getElementById("query-information").innerText = `Search: "${currentQuery}"`;
          document.getElementById("pages-information").innerText = `${page} - ${response.pagination.totalPages}`;
          // document.getElementById("result-count-information").innerText = `${response.pagination.totalResults}`;
        }

        // here we are going to update the global paginated state
        GlobalStateManager.update("currentPage", response.pagination.currentPage);
        GlobalStateManager.update("totalPages", response.pagination.totalPages);
        GlobalStateManager.update("totalResults", response.pagination.totalResults);
        GlobalStateManager.update("start", response.pagination.begin);
        GlobalStateManager.update("end", response.pagination.end);

        // updating the pagination modal to reflect the current page
        currentPage.innerText = page;

        // parsing response to only get results to pass through the promise chain
        return response.results;

      })

      //adding each result to the main page while converting the json result to and html div
      .then((json) => {
        json.forEach((result) => {
          resultsManager.addResult(resultsManager.toHtml(result));
        });

      })

      // making sure cart manager is initialized after all results loaded
      .finally(() => {
        CartManager.init();
      });
}

function loadSuggestedProducts() {

  // grabbing the suggested items container for loading the products
  const suggestedItems = document.getElementById("suggested-items-list");

  let currentQuery = GlobalStateManager.retrieve("currentQuery");

  // clear the suggested items
  suggestedItems.innerHTML = "";
  
  spring

  // utilizing the SearchSpringAPI to get the suggested items from concatenated query
    .search(currentQuery + "bottoms", 1)
      
      // parsing response to only get results to pass through the promise chain
      .then((response) => response.results)
      
      // adding each result to the suggested items 
      .then((json) => {
        json.forEach((result) => {
          suggestedItems.innerHTML += resultsManager.toHtml(result);
        });
      });
}

window.onload = () => {

  //on page load we will render random default page between 1 and 30
  loadResults(Math.floor(Math.random() * 30) + 1);

  // regardless we will always load suggested products to increase sales performance
  loadSuggestedProducts();
};
