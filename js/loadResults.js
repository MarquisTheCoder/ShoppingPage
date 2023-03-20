

//function to load results of any query and page
//this will be very useful when utilizing our global state
//manager later
function loadResults(query, page){
  const spring = new SearchSpringAPI();
  const resultsManager = new ResultsManager();

  resultsManager.resetResults();

  //for init this will be 1, ""
  spring.search(query, page=page)
    .then((response) => {
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
  loadResults("", page=1);
};
