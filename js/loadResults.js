

//function to load results of any query and page
//this will be very useful when utilizing our global state
//manager later
function loadResults(page, query){
  const spring = new SearchSpringAPI();
  const resultsManager = new ResultsManager();

  resultsManager.resetResults();

  //for init this will be 1, ""
  spring.search(page, query)
    .then((response) => {
      console.log(response.results[0]);
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
  loadResults(1, "");
};
