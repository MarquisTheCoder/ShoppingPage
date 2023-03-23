document.getElementById("pagination-current").innerText =
  GlobalStateManager.retrieve("currentPage");

const pageUp = document.getElementById("page-up");
const pageDown = document.getElementById("page-down");
const currentPage = document.getElementById("pagination-current");

setInterval(() => {
  if (parseInt(currentPage.innerText) === 1) {
    pageDown.classList.add("disabled");
  } else if (
    parseInt(currentPage.innerText) ===
    GlobalStateManager.retrieve("totalPages")
  ) {
    pageUp.classList.add("disabled");
  } else {
    pageDown.classList.remove("disabled");
    pageUp.classList.remove("disabled");
  }
}, 500);
pageUp.addEventListener("click", () => {
  loadResults(parseInt(currentPage.innerText) + 1);
});

pageDown.addEventListener("click", () => {
  loadResults(parseInt(currentPage.innerText) - 1);
});
