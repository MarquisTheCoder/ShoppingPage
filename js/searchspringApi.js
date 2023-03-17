class SearchSpringAPI {
  //because the site id can be changed in future implementations
  //AND I will be using only one I set it as a preset parameter
  //instead of a static property

  //results format should remain consistent through the calling
  //process but it can change this is also the reason why made it an
  //preset constructor parameter and not a method parameter
  constructor(siteId = "scmq7n", resultsFormat = "native") {
    this.siteId = siteId;
    this.resultsFormat = "native";
  }
  static #baseUrl = "http://api.searchspring.net/api/";

  //making the REST url creation seamless and easy for mulitple different request
  static buildUrl() {
    let url = this.#baseUrl;

    return url;
  }
}
