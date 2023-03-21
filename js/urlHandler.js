

class UrlHandler{
    static addFilter(filter, value){  
        let currentUrlObject = UrlHandler.currentUrlObject();
        currentUrlObject[filter] = value;
        GlobalStateManager.update("currentSearch", 
            UrlHandler.constructUrl(currentUrlObject));
    }
    static removeFilter(filter){
       let currentUrlObject = UrlHandler.currentUrlObject();
        delete currentUrlObject[filter];
        GlobalStateManager.update("currentSearch", 
            UrlHandler.constructUrl(currentUrlObject));
    }

    static deconstructUrl(){
        return JSON.parse('{"' + decodeURI(GlobalStateManager.retrieve("currentSearch").replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}')
    }
    static currentUrlObject(){
        return UrlHandler.deconstructUrl();
    }
    static constructUrl(urlObject){
        let url = "";
        for (const [key, value] of Object.entries(urlObject)) {
            url += key + "=" + value + "&";
        }
        return url.slice(0, -1).trim();
    }

}