function ShowcaseController(){
    
}

ShowcaseController.prototype.receiveEvent = function(event){
    if(event.type === Autocompleter.Event.FOCUS){
              
    } else if(event.type === Autocompleter.Event.SELECT){
        this.kittensModel.removeKitten(event.msg);    
    }
};