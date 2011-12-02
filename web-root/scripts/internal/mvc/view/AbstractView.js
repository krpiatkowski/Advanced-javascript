/**
 * Abstract view in MVC
 * 
 * @constructor
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
    if(this.controller !== undefined){
        this.controller.receiveEvent(event);
    } else if(this.parent !== undefined) {
        this.parent.dispatchEvent(event);
    }
};

/**
 * Notifies a view, that i should refresh its data.
 * 
 * @param {Object} data The data the view should update with.
 */ 
AbstractView.prototype.notify = function(data) {}