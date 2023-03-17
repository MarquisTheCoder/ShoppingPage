class SearchSpringAPI {
  //because the site id can be changed in future implementations
  //AND I will be using only one I set it as a preset parameter
  //instead of a static property

  //results format should remain consistent through the calling
  //process but it can change this is also the reason why made it an
  //preset constructor parameter and not a method parameter

  constructor(siteId = "scmq7n", resultsFormat = "json") {
    this.siteId = siteId;
    this.resultsFormat = resultsFormat;
    this.baseUrl = `https://${siteId}.a.searchspring.io/api/search/search.json`;
  }

  //static properties
  static #resultsPerPageDefault = 24;
  //making the options parameter static because I cant see me utilizing POST, DELETE, OR UPDATES
  //in this specific API use case
  static #options = { method: "GET", headers: { accept: "application/json" } };

  // getters
  static get siteId() {
    return this.siteId;
  }

  static get baseUrl() {
    return this.baseUrl;
  }
  // setters
  static set siteId(id) {
    this.siteId = id;
  }

  static set baseUrl(url) {
    this.baseUrl = url;
  }

  //making the REST url creation seamless and easy for mulitple different request
  static buildUrl(
    query,
    page = 1,
    resultsPerPage = this.#resultsPerPageDefault,
    filter = ""
  ) {
    let url = `${this.baseUrl}?resultsFormat=${this.resultsFormat}&redirectResponse=minimal&page=${page}&resultsPerPage=${resultsPerPage}&q=${query}`;
    //if filter string remains empty do not add filter
    url += filter === "" ? "" : `filter=${filter}`;
    return url;
  }
}
