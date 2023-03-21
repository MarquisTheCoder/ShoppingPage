

const searchInput = document.getElementById("search-input");
let filterSettings


function createFilter(name, type){
    return `
     <div class="filter-item" data-type="${type}">
        <p>${name}</p>
     </div>
    `
}

function loadFilter(element, name, type){
    element.innerHTML += createFilter(name, type);
}


function loadFilters(){
    const filters =  {
        colors:["yellow", "amber", "orange", "vermillion", "red", "purple", "blue", "green"],
        prices: ["low","lower","medium","high", "higher"],
        sizes: ["small", "medium", "large"]
    };

    //using variables instead of accessing class array for code readability and semantics
    const colorFilters = document.getElementById("filter-item-colors");
    const pricingFilters = document.getElementById("filter-item-pricing");
    const sizeFilters = document.getElementById("filter-item-sizes");

    filters.colors.forEach(color => {
       loadFilter(colorFilters, color, "color"); 
    }); 
    filters.prices.forEach(price => {
        loadFilter(pricingFilters, price, "price");
    })
    filters.sizes.forEach(size => {
        loadFilter(sizeFilters, size, "size");
    })
}
loadFilters();

const currentFilters = document.getElementById("current-filters");
const filterItems = document.getElementById("filter-items")

for(item of document.getElementsByClassName("filter-item")){

    item.addEventListener("click", function(){

        this.remove();
        currentFilters.appendChild(this);
        currentFilters.style.display = "flex";
    })
}
searchInput.addEventListener('input', () =>{
    loadResults(searchInput.value, 1);
})
