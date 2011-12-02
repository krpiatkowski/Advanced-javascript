//requires
dojo.require('dojox.grid.EnhancedGrid');
dojo.require('dojox.grid.enhanced.plugins.DnD');
dojo.require('dojox.grid.enhanced.plugins.Menu');
dojo.require('dojox.grid.enhanced.plugins.NestedSorting');
dojo.require('dojox.grid.enhanced.plugins.IndirectSelection');
dojo.require('dojox.data.CsvStore');
dojo.require('dijit.form.Button');
dojo.require('dojo.parser');

dojo.ready(function() {
    //layout
    layout = [{
        defaultCell: {
            width: 8,
            editable: false,
            type: dojox.grid.cells._Widget
        },
        rows: [{
            field: 'Name',
            width: '10'
        }, {
            field: 'Color',
            width: '15'
        }, {
            field: 'Age',
            width: '6'
        }, {
            field: 'Cuteness',
            width: '28'
        }]
    }];

    csvStore1 = new dojox.data.CsvStore({
        id: 'csvStore1',
        url: 'scripts/internal/dojo/kittens.cvs'
    });
    csvStore1.fetch({
        onComplete: function(data){
            console.log(data);
        }, 
        onError: function(error){
        
        }, 
    });
    //parse!
    dojo.parser.parse();
});