/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function hamburgerDisplay() {
  var x = document.getElementById("main-menu");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function searchAndCartDisplay(){
  const modal = document.getElementById("search-page-modal");
  const overlay = document.querySelector("#search-page-modal .overlay");
  const content = document.querySelector("#search-page-modal .content");

  const isMobile = window.matchMedia("(max-width: 768px");

  if(isMobile.matches){
    console.log(`match: ${isMobile.matches}`)
    content.style.width = "80vw";
  }else{
    content.style.width = "35vw";
  }
  modal.style.width = "100vw";
  overlay.style["background-color"] = "#0009"; 
}
