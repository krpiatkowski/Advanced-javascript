/**
 * A view in the model-view-controller
 * 
 * @constructor
 */
function View(id){
    this.container = $(id);
}

/**
 * Insert a view as a subview.
 * 
 * @param {View} subview View in insert
 */
View.prototype.addSubview = function(subview){
    if(this.subviews === undefined){
        this.subviews = [];
    }
    
    this.subviews.push(subview);
    subview.parent = this;
    
    if(subview.container !== undefined){
        this.container.append(subview.container);  
    }
};

/**
 * Dispatch event to attached controller.
 * 
 * If no controllers are attached, 
 * the event is bubbled up to the parent view.
 * 
 * @param {Object} event Event to dispatch.
 */ 
View.prototype.dispatchEvent = function(event){
    if(this.controller !== undefined){
        this.controller.receiveEvent(event);
    } else if(this.parent !== undefined) {
        this.parent.dispatchEvent(event);
    }
};