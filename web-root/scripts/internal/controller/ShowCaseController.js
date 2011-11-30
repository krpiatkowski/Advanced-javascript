/**
 * A special controller used to showcase kittens.
 * 
 * @constructor
 */ 
function ShowcaseController(){
    
}

/**
 * Handle requests from views
 * 
 * @param {Object} event Event from views 
 */ 
ShowcaseController.prototype.receiveEvent = function(event){
    if(event.type === Autocompleter.Event.FOCUS){
        return true;              
    } else if(event.type === Autocompleter.Event.SELECT){
        this.kittensModel.removeKitten(event.msg);
        return true;
    } else {
        return false;
    }
};