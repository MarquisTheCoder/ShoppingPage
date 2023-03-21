

//function to load results of any query and page
//this will be very useful when utilizing our global state
//manager later
function loadResults(query, page){

  const spring = new SearchSpringAPI();
  const resultsManager = new ResultsManager();

  resultsManager.resetResults();

  
  //for init this will be 1, ""
  spring.search(query, page)
    .then((response) => { 
      if(query != ""){
        document.getElementById("query-information").innerText = `Search: "${query}"`;
        document.getElementById("pages-information").innerText = `${page} - ${response.pagination.totalPages}`;
        // document.getElementById("result-count-information").innerText = `${response.pagination.totalResults}`;
      }
          
      //-----------------here is where we will add pagination to the global state --------------------------------

      return response.results; 
    })
    .then((json) => {
      json.forEach((result) =>{
        //adding each result to the main page while converting the json result to and html div
        resultsManager.addResult(resultsManager.toHtml(result));
      })
    })
}

window.onload = () => {
  loadResults("", GlobalStateManager.currentPage);
};
