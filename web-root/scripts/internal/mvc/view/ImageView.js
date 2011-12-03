/**
 * Image view
 * 
 * @constructor
 * @extends {AbstractView}
 * @param {function() : string}
 */ 
function ImageView(onNotify){
    this.container = $("<img>");
    this.onNotify = onNotify;
}
ImageView.prototype = AbstractView;
ImageView.constructor = ImageView;

ImageView.prototype.notify = function() {
    var src = this.onNotify();
    this.container.attr('src', src);
};