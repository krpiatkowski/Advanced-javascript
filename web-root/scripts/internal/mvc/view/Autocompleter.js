/**
 * Autocompleter view
 *  
 * @constructor
 * @extends {AbstractView}
 * @param {function(): Array} onNotify Callback to help populate the autocompleter.
 * @param {function(Object): string} fetchLabel Callback populate a single row in the autocompleter given an object
 */ 
function Autocompleter(onNotify, fetchLabel){
    var _this = this;
    this.container = $("<input>");
    this.onNotify = onNotify;
    this.fetchLabel = fetchLabel;
    
    this.container.autocomplete({
        source:[],
        select: function(event, ui) {
            _this.dispatchEvent(new MVCEvent(this,'Autocompleter.Event.SELECT',ui.item.object));
    		return false;
		},
        focus: function(event, ui){
            _this.dispatchEvent(new MVCEvent(this,'Autocompleter.Event.FOCUS',ui.item.object));
        }
    });
}
Autocompleter.prototype = new AbstractView();
Autocompleter.constructor = Autocompleter;

Autocompleter.prototype.notify = function(){
    var data = this.onNotify.call(this);
    var transformedData = [];
    
    for(var i = 0; i < data.length; i++){
        var label =  this.fetchLabel.call(this, data[i]);
        transformedData.push({
            label: label,
            value: label,
            object: data[i]
        });
    }
    
    this.container.autocomplete("option", "source", transformedData);
};