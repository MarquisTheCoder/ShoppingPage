

const searchInput = document.getElementById("search-input");
let filterSettings

function createFilter(name){
    return `
     <div class="filter-item">
        <p>${name}</p>
     </div>
    `
}

function loadFilter(element, name){
    element.innerHTML += createFilter(name);
}
function loadFilters(){
    const filters =  {
        colors:["yellow", "amber", "orange", "vermillion", "red", "purple", "blue", "green"],
        prices: ["small", "medium", "large"],
    };

    //using variables instead of accessing class array for code readability and semantics
    const colorFilters = document.getElementById("filter-item-colors");
    const pricingFilters = document.getElementById("filter-item-pricing");
    const sizeFilters = document.getElementById("filter-item");

    filters.colors.forEach(color => {
       loadFilter(colorFilters, color); 
    }); 
    filters.prices.forEach(price => {
        loadFilter(pricingFilters, price);
    })
    filters.sizeFilters.forEach(size => {
        loadFilter(sizeFilters, size);
    })
}
loadFilters();

searchInput.addEventListener('input', () =>{
    loadResults(searchInput.value, 1);
})
