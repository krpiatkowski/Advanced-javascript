 /**
 * A view in the model-view-controller
 * 
 * @constructor
 * @extends {AbstractView}
 */
function RootView(id){
    if(id !== null) {
        this.container = $(id);        
    }
}
RootView.prototype = new AbstractView();
RootView.constructor = RootView;
