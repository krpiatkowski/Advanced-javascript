function AbstractModel(){
}

AbstractModel.prototype.addView = function(view){
    if(this.views === undefined){
        this.views = [];        
    }
    
    this.views.push(view);
    view.notify(this.getData());
};

AbstractModel.prototype.notifyViews = function(){
    if(this.views !== undefined){
        for(var i = 0; i < this.views.length; i++){
            this.views[i].notify(this.getData());
        }        
    }
};