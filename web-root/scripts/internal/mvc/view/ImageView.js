/**
 * Image view
 * 
 * @constructor
 * @extends {AbstractView}
 * @param {function() : string} onNotify 
 */ 
function ImageView(onNotify){
    var _this = this;
    this.container = $('<div></div>');
    this.image = $('<img>');
    
    this.image.click(function(){
        console.log(_this);
       _this.dispatchEvent(new MVCEvent(_this, 'ImageView.Event.click', {}));
    });
    
    this.container.append(this.image);
    this.onNotify = onNotify;
}
ImageView.prototype = AbstractView;
ImageView.constructor = ImageView;

ImageView.prototype.notify = function() {
    var src = this.onNotify();
    this.image.attr('src', src);
};