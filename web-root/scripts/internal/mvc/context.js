//Models
var model = new StaticModel();

//Controllers
var eventLoggingController = new EventLoggingController();
var showcaseController = new ShowcaseController();
showcaseController.model = model;

//Views
var rootView = new RootView('#content');
rootView.controller = eventLoggingController;

var autocompleter = new Autocompleter(    
    function(){
        return model.list();    
    },
    function(item){
        return item.name;
    }
);
autocompleter.controller = showcaseController;


var imageView = new ImageView(function(){
    var focused = model.getFocused();
    return focused ? focused.image : '';
});

rootView.addSubview(autocompleter);
rootView.addSubview(imageView);


model.addView(autocompleter);
model.addView(imageView);