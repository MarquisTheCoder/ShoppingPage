
const spring = new SearchSpringAPI();


class GlobalStateManager{

     static state = {
            currentUrl: spring.buildUrl("", page=1)
        }
    //using an intial json template to add all object keys 
    //and values and local store variables. provides me with a quick method
    //to start a new global state from scratch or potentially use this class elsewhere
    constructor(template){
        this.template = template;
        this.init(template); 
    }
    init(template){
        for(const [key, value] of Object.entries(state)){
            this.save(key, value);
        }
    }
    save(key, value){
        localStorage.setItem(key, value);
    }
    retrieve(key){
        localStorage.getItem(key);
    }
    delete(key){
        localStorage.removeItem(key);
    }
    clear(){
        localStorage.clear();
    }
}