



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


class GlobalStateManager{
    
    static #spring = new SearchSpringAPI();
    static blueprintState = {
        currentSearch: GlobalStateManager.#spring.buildUrl("", 1)   
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

    static retrieve(key){
        localStorage.getItem(key);
    }

    static delete(key){
        localStorage.removeItem(key);
    }

    static clear(){
        localStorage.clear();
    }

}