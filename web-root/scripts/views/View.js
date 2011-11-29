function View(id){
    this.container = $(id);
}

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

View.prototype.dispatchEvent = function(event){
    if(this.controller !== undefined){
        this.controller.sendEvent(event);
    } else if(this.parent !== undefined) {
        this.parent.dispatchEvent(event);
    }
};