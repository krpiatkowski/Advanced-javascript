/**
 * Models a set of kittens
 * 
 * The kittens are returned are static,
 * and not saved between browser refreses
 * @extends {AbstractModel}
 * @constructor
 */ 
function StaticModel(){
    this.kittens = [
    {name: 'Cricket',   color: 'black',     age: 1, cuteness:2, image:'/images/kitten1.jpg'},
    {name: 'Cub',      color: 'white',     age: 3, cuteness:3, image:'/images/kitten2.jpg'},
    {name: 'Cutey',   color: 'browish',   age: 2, cuteness:3, image:'/images/kitten3.jpg'},
    {name: 'Dab',       color: 'red',       age: 3, cuteness:3, image:'/images/kitten4.jpg'},
    {name: 'Daffodil',       color: 'white',     age: 1, cuteness:3, image:'/images/kitten5.jpg'},
    {name: 'Daisy',     color: 'white',     age: 1, cuteness:3, image:'/images/kitten6.jpg'}
    ];    
}
StaticModel.prototype = new AbstractModel();
StaticModel.constructor = StaticModel;

/**
 * Removes a kitten from the model,
 * The kitten is identified by name.
 * 
 * @param {Object} kitten Kitten to be removed.
 */
StaticModel.prototype.remove = function(kitten){
    for(var i = 0; i < this.kittens.length; i++) { 
        if(this.kittens[i].name == kitten.name){
            this.kittens.splice(i,1);   
        }
    }
    this.notifyViews();
};

StaticModel.prototype.focused = function(kitten){
    this.focusedKitten = kitten;
    this.notifyViews();
};

StaticModel.prototype.getFocused = function(){
    return this.focusedKitten;
};

StaticModel.prototype.list = function(){
    return this.kittens;    
};