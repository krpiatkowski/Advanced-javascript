function Autocompleter(){
    this.container = $("<input>");
    this.container.autocomplete({
        source:[],
        select: function( event, ui ) {
            this.dispatchEvent({type: Autocompleter.Event.SELECT, ui.item.value});
			return false;
		}
    })
    .data
}
Autocompleter.prototype = new View();
Autocompleter.constructor = Autocompleter;

Autocompleter.prototype.setData = function(data){
    var transformedData = $.map(data, function(item) {
        return {
            label: item.name,
            value: item
        };
    });
    
    this.container.autocomplete("source", transformedData);
};


Autocompleter.Event = {
    SELECT : 0
}