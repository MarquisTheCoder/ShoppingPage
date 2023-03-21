


class UrlHandler{

    static addFilter(filter, value){ 
        const keyPair = `&${filter}=${value}`;
        let currentSearch = GlobalStateManager.retrieve("currentSearch");
        GlobalStateManager.update("currentSearch", currentSearch + `${keyPair}`);
    }

    static removeFilter(filter, value){  
        const keyPair = `&${filter}=${value}`;
        let currentSearch = GlobalStateManager.retrieve("currentSearch");
        GlobalStateManager.update("currentSearch", currentSearch.replace(keyPair, ""));
    }    
}