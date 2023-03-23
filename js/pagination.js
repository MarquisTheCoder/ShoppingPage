document.getElementById("pagination-current").innerText =
  GlobalStateManager.retrieve("currentPage");

const pageUp = document.getElementById("page-up");
const pageDown = document.getElementById("page-down");
const currentPage = document.getElementById("pagination-current");

pageUp.addEventListener("click", () => {
  loadResults(parseInt(currentPage.innerText) + 1);
});
pageDown.addEventListener("click", () => {
  loadResults(parseInt(currentPage.innerText) - 1);
});
