

const searchInput = document.getElementById("search-input");

function createFilter(name, type){
    return `
     <div class="filter-item" data-type="${type}"
      data-filter="${(type == "color") ? "filter.color" : ``}${(type == "price") ? "filter.price" : ``}${(type == "size") ? "filter.size": ``}"
      data-value="${name.trim()}">
        <p>${name}</p>
     </div>
    `
}

function loadFilter(element, name, type){
    element.innerHTML += createFilter(name, type);
}


function loadFilters(){

    // all filter presets
    const filters =  {
        colors:["yellow", "amber", "orange", "vermillion", "red", "purple", "blue", "green"],
        prices: ["low","medium","high"],
        sizes: ["small", "medium", "large"]
    };

    //using variables instead of accessing class array for code readability and semantics
    const colorFilters = document.getElementById("filter-item-colors");
    const pricingFilters = document.getElementById("filter-item-prices");
    const sizeFilters = document.getElementById("filter-item-sizes");

    //loading color presets
    filters.colors.forEach(color => {
       loadFilter(colorFilters, color, "color"); 
    }); 

    //loading price presets
    filters.prices.forEach(price => {
        loadFilter(pricingFilters, price, "price");
    })

    //loading size presets
    filters.sizes.forEach(size => {
        loadFilter(sizeFilters, size, "size");
    })
}

loadFilters();


const currentFilters = document.getElementById("current-filters");
const filterItems = document.getElementById("filter-items")



//adding eventer listener to all filter items
for(item of document.getElementsByClassName("filter-item")){


    //on filter click
    item.addEventListener("click", function(){

        // display current filters
        currentFilters.style.display = "flex";

        // move the selecting to the current filters element
        if(this.parentNode.classList.contains("filter-items")){
            this.remove();
            currentFilters.append(this);
            UrlHandler.addFilter(this.dataset.filter, this.dataset.value);
            loadResults(searchInput.value, 1);

        //moving the filter preset back to the filter items element
        }else{
           this.remove();
           let filterSet = document.getElementById(`filter-item-${this.dataset.type}s`);
           filterSet.append(this);
           UrlHandler.removeFilter(this.dataset.filter, this.dataset.value);
           loadResults(searchInput.value, 1);
        }

    })

}
searchInput.addEventListener('input', function(){
    let currentUrl = GlobalStateManager.retrieve("currentSearch");
    loadResults(searchInput.value, 1);
})
