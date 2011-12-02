//requires
dojo.require('dojox.grid.EnhancedGrid');
dojo.require('dojox.grid.enhanced.plugins.NestedSorting');
dojo.require('dojox.data.CsvStore');
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
    store = new dojox.data.CsvStore({
        id: 'csvStore1',
        url: 'scripts/internal/dojo/kittens.cvs'
    });
    //parse!
    dojo.parser.parse();
});