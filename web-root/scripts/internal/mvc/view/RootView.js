 /**
 * A view in the model-view-controller
 * 
 * @constructor
 * @extends {AbstractView}
 */
function View(id){
    if(id !== null) {
        this.container = $(id);        
    }
}
