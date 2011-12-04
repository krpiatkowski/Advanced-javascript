/**
 * Abstract view in MVC
 * 
 * @constructor
 * @property {AbstractView} parent The parent of this view
 */ 
 function AbstractView(){}

/**
 * Insert a view as a subview.
 * 
 * @param {AbstractView} subview View in insert
 */
AbstractView.prototype.addSubview = function(subview){
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
 * @param {MVCEvent} event Event to dispatch.
 */ 
AbstractView.prototype.dispatchEvent = function(event){
    var accept = false;
    if(this.controller !== undefined){
        accept = this.controller.receiveEvent(event);
    } 
    
    if(!accept && this.parent !== undefined) {
        this.parent.dispatchEvent(event);
    }
};

/**
 * Notifies a view, that i should refresh its data.
 */ 
AbstractView.prototype.notify = function() {}