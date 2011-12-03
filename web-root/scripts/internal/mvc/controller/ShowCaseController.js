/**
 * A special controller used to showcase kittens.
 * 
 * @constructor
 * @implements {Controller}
 */ 
function ShowcaseController(){}

/**
 * Handle requests from views
 * 
 * @param {MVCEvent} event Event from views 
 */ 
ShowcaseController.prototype.receiveEvent = function(event){
    if(event.type === 'Autocompleter.Event.FOCUS'){
        this.model.focused(event.msg);
        return true;              
    } else if(event.type === 'Autocompleter.Event.SELECT'){
        this.model.remove(event.msg);
        return true;
    } else {
        return false;
    }
};