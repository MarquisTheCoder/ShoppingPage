window.onload = () => {
  const api = new SearchSpringAPI();
  // testing properties
  console.log(api.baseUrl);
  console.log(api.resultsFormat);
  console.log(api.siteId);

  //testing functions
  console.log(api.buildUrl("shoes", 1));
  console.log(api.fetchData("shoes", 1));
};
