//requires
dojo.require('dojox.grid.EnhancedGrid');
dojo.require('dojox.grid.enhanced.plugins.NestedSorting');
dojo.require('dojox.data.JsonRestStore');
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
        }, {
            field: 'Cuteness',
            width: '28'
        }]
    }];
    store = new dojox.data.JsonRestStore({
        id: 'store',
        target: '/kittens'
    });
    //parse!
    dojo.parser.parse();
});