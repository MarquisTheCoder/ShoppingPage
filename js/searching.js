

const searchInput = document.getElementById("search-input");
let filterSettings


function createFilter(name, type){
    return `
     <div class="filter-item" data-type="${type}"
      data-filter="${(type == "color") ? "filter.color" : ``} 
                   ${(type == "price") ? "filter.price" : ``}
                   ${(type == "size") ? "filter.size" : ``}"
      data-value="${name.trim()}">
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
        prices: ["low","medium","high"],
        sizes: ["small", "medium", "large"]
    };

    //using variables instead of accessing class array for code readability and semantics
    const colorFilters = document.getElementById("filter-item-colors");
    const pricingFilters = document.getElementById("filter-item-prices");
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

//TODO: you need to modify and update the search query by adding and removing the filters from
// the search query. you need a sustainable way to do this
for(item of document.getElementsByClassName("filter-item")){
    item.addEventListener("click", function(){
        currentFilters.style.display = "flex"; 
        if(this.parentNode.classList.contains("filter-items")){
            this.remove();
            currentFilters.append(this);
            UrlHandler.addFilter(this.dataset.filter, this.dataset.value);
        }else{
           this.remove();
           let filterSet = document.getElementById(`filter-item-${this.dataset.type}s`);
           filterSet.append(this);
        }
       
    })
}
searchInput.addEventListener('input', () =>{
    UrlHandler.addFilter("filter.color", "red");
    console.log(GlobalStateManager.retrieve("currentSearch"))
    loadResults(GlobalStateManager.retrieve("currentSearch"), 1);
})
