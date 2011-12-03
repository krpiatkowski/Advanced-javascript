/**
 * Autocompleter view
 * 
 * @constructor
 * @extends {AbstractView}
 */ 
function Autocompleter(){
    var _this = this;
    this.container = $("<input>");
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
Autocompleter.prototype = new View(null);
Autocompleter.constructor = Autocompleter;

Autocompleter.prototype.notify = function(data){
    var transformedData = $.map(data, function(item) {
        return {
            label: item.name,
            value: item.name,
            object: item
        };
    });
    
    this.container.autocomplete("option", "source", transformedData);
};