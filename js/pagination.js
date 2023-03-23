document.getElementById("pagination-current").innerText =
  GlobalStateManager.retrieve("currentPage");

const pageUp = document.getElementById("page-up");
const pageDown = document.getElementById("page-down");
const currentPage = document.getElementById("pagination-current");

pageUp.addEventListener("click", () => {
  currentPage.innerText = parseInt(currentPage.innerText) + 1;
  loadResults(
    GlobalStateManager.retrieve("currentQuery"),
    GlobalStateManager.retrieve("currentPage") + 1
  );
});
