// Althought the instructions were I could use any technologies or frameworks
// I wanted to to create the website. I stuck with the normal Vanilla JS, CSS
// and HTML because thats what the initial technical asked me to know plus it shows
// a solid understanding of the fundamentals.

window.onload = () => {
  let search = new SearchSpringAPI();
  console.log(search.urlBuilder("shoes", 1));
};
