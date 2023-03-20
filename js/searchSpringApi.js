//The purpose of this file and class it to make making the search functionality as seamless
//as humanly possible and easy on myself. Setting the building blocks now will give me some room
//for expected mistakes and modification/expansion.

//changing name
class SearchSpringAPI {
  //because the site id can be changed in future implementations
  //AND I will be using only one I set it as a preset parameter
  //instead of a static property

  //results format should remain consistent through the calling
  //process but it can change this is also the reason why made it an
  //preset constructor parameter and not a method parameter

  constructor(siteId = "scmq7n", resultsFormat = "native") {
    this.siteId = siteId;
    this.resultsFormat = resultsFormat;
    this.baseUrl = `https://api.searchspring.io/api/search/search.json`;
  }

  //static properties
  static resultsPerPageDefault = 24;
  //making the options parameter static because I cant see me utilizing POST, DELETE, OR UPDATES
  //in this specific API use case
  static options = { method: "GET", headers: { accept: "application/json" } };

  //making the REST url creation seamless and easy for mulitple different request
  buildUrl(
    query,
    page = 1,
    resultsPerPage = SearchSpringAPI.resultsPerPageDefault,
    filter = ""
  ) {
    let url = `${this.baseUrl}?resultsFormat=${this.resultsFormat}&redirectResponse=minimal&page=${page}&resultsPerPage=${resultsPerPage}&q=${query}&siteId=${this.siteId}`;

    //only if filter string in inputted add a filter
    url += filter === "" ? "" : `filter=${filter}`;
    // console.log(url)
    return url;
  }

  /*
 CODE EXAMPLE USING FOR MODERN FETCH SYNTAX

 const checkUserHosting = async (hostEmail, callback) => {
 let hostEmailData  = await fetch(`http://localhost:3001/activities/${hostEmail}`)
 //use string literals
 let hostEmailJson = await hostEmailData.json();
 return hostEmailJson;
}
 */

  //using this function to
  search = async (
    query,
    page = 1,
    resultsPerPage = this.resultsPerPageDefault,
    filter = ""
  ) => {
    let response = await fetch(
      this.buildUrl(query, page, resultsPerPage, filter),
      SearchSpringAPI.options
    );
    let json = response.json();
    let results = json;
    return results;
  };
}
