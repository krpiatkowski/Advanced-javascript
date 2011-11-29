/**
 * An abstract Model.
 * 
 * @constructor
 */
function AbstractModel(){
}

/**
 * Adds a view to the model.
 * 
 * @param {View} view View to be added.
 */ 
AbstractModel.prototype.addView = function(view){
    if(this.views === undefined){
        this.views = [];        
    }
    
    this.views.push(view);
    view.notify(this.getData());
};

/**
 * Notifies all the views attached to this model
 */ 
AbstractModel.prototype.notifyViews = function(){
    if(this.views !== undefined){
        for(var i = 0; i < this.views.length; i++){
            this.views[i].notify(this.getData());
        }        
    }
};