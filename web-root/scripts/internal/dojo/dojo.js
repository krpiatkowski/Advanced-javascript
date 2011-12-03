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
            field: 'name',
            width: '10'
        }, {
            field: 'color',
            width: '15'
        }, {
            field: 'age',
            width: '6'
        }]
    }];
    store = new dojox.data.CsvStore({
        id: 'store',
        url: 'scripts/internal/dojo/kittens.cvs'
    });
    //parse!
    dojo.parser.parse();
});