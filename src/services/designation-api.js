import ApiHelper from './designation-json';

class DesignationApi {
    constructor(){

    }

    static getContentIdeas = (keyword, callback = null) => {
        const elements = [];
        fetch(ApiHelper.contentIdeias(keyword))
        .then(result => result.json())
        .then(result => {
            if (callback) {
                callback(result.data.content_ideias);
            }
        });
    } 
    
}

export default DesignationApi;