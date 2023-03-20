



// Late night writing out your thoughts because youre running on 1000mg 
// of caffeine and lack of sleep. 
// what are your task?: 
// we already are saving the initial search inside of the global state
// so we need also need a function to update an already existing state key
// by using getItem then using set item in session storage

// TODO:
// check if its actuallyt saving items in localstorage via dev tools 
// console then you'll know the object is being saved at window.onload runtime
// once this is verified start to write the update function its only like four
// lines dont get lazy


// you dont need an update function unless you want to memoize local storage data
// and prevent the saving of repeat data in faulty keys this is a useful and viable reason
// to make an update function

class GlobalStateManager{

    static #defaultInitialSearch = "http://api.searchspring.net/api/search/search.json?siteId=scmq7n&q=&resultsFormat=native&page=1";

    //creating initial blueprint to be saved into localStorage via GlobalStateManager.init()
    static blueprintState = {
        currentSearch: GlobalStateManager.#defaultInitialSearch,
        currentPage: 1,
        totalResults: 0,
        totalPages: 0,
        start: 1,
        end: 0,
        filters: {
            colors:["yellow", "amber", "orange", "vermillion", "red", "purple", "blue", "green"],
        }
    }

    //using an intial json template to add all object keys 
    //and values and local store variables. provides me with a quick method
    //to start a new global state from scratch or potentially use this class elsewhere

    static init(blueprint){
        console.log("state blue print saving");
        for(const [key, value] of Object.entries(blueprint)){
            GlobalStateManager.save(key, value);
        }
    }

    static save(key, value){
        localStorage.setItem(key, value);
    }

    static update(key, value){
        if(GlobalStateManager.retrieve(key) !== null){
            GlobalStateManager.save(key, value);
            return true;
        }
        console.log(`Cannot update key [${key}] that does not exist.`);
        return false; 
    }

    static retrieve(key){
        return localStorage.getItem(key);
    }

    static delete(key){
        localStorage.removeItem(key);
    }

    static clear(){
        localStorage.clear();
    }

}