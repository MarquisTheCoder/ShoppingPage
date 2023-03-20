

const searchInput = document.getElementById("search-input");
searchInput.addEventListener('input', () =>{
    loadResults(searchInput.value, 1);
})