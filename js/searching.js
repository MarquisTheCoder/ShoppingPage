

const searchInput = document.getElementById("search-input");
let filterSettings
function loadFilters(){

}
searchInput.addEventListener('input', () =>{
    loadResults(searchInput.value, 1);
})
