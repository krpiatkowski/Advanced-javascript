/**
 * Models a set of kittens
 * 
 * The kittens are returned are static,
 * and not saved between browser refreses
 * 
 * @constructor
 */ 
function StaticKittensModel(){
    this.kittens = [
        {name: 'Abbymini', age: 1},
        {name: 'Apple', age: 2},
        {name: 'Asterisk', age: 3},
        {name: 'Atom', age: 2},
        {name: 'Baby', age: 3},
        {name: 'Barbie', age: 1},
        {name: 'Biscuit', age: 1},
        {name: 'Bitsy', age: 2}
    ];    
}
StaticKittensModel.prototype = new AbstractModel();
StaticKittensModel.constructor = StaticKittensModel;

/**
 * Removes a kitten from the model,
 * The kitten is identified by name.
 * 
 * @param {Object} kitten Kitten to be removed.
 */
StaticKittensModel.prototype.removeKitten = function(kitten){
    for(var i = 0; i < this.kittens.length; i++) { 
        if(this.kittens[i].name == kitten.name){
            this.kittens.splice(i,1);   
        }
    }
    this.notifyViews();
}; 

/**
 * Gets the data from the model.
 * 
 * @return {Object} kittens.  
 */ 
StaticKittensModel.prototype.getData = function(){
    return this.kittens;
};