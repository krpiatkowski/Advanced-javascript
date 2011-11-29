function Autocompleter(){
    var _this = this;
    
    this.container = $("<input>");
    this.container.autocomplete({
        source:[],
        select: function(event, ui) {
            _this.dispatchEvent({
                sender: this,
                type: Autocompleter.Event.SELECT, 
                msg:ui.item.object
            });
			return false;
		},
        focus: function(event, ui){
            _this.dispatchEvent({
                sender: this,
                type: Autocompleter.Event.FOCUS,
                msg:ui.item.object
            });
        }
    });
}
Autocompleter.prototype = new View();
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


Autocompleter.Event = {
    SELECT : "Autocompleter.Event.SELECT",
    FOCUS : "Autocompleter.Event.FOCUS"
};