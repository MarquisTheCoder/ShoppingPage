class SearchSpringAPI {
  
  //because the site id can be changed in future implementations
  constructor(siteId = "scmq7n", resultsFormat = "native") {
    this.siteId = siteId;
    this.resultsFormat = resultsFormat;
  }

  //static properties
  static resultsPerPageDefault = 24;

  static options = { method: "GET", headers: { accept: "application/json" } };

  //using this function for each request
  search = async (
    query,
    page,
    resultsPerPage = this.resultsPerPageDefault,
    filter = ""
  ) => {
    // fetching the API results by current global query and appending necessary parameters
    let response = await fetch(
      `${GlobalStateManager.retrieve(
        "currentSearch"
      )}&rq=${query}&page=${page}`,
      SearchSpringAPI.options
    );

    // converting the response to json
    let json = response.json();

    // putting the results into named variable
    let results = json;

    return results;
  };
}
