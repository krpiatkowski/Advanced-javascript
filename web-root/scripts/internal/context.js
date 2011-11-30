//Controllers
var showcaseController = new ShowcaseController();

//Views
var viewRoot = new View('#content');
var autocompleter = new Autocompleter();

viewRoot.addSubview(autocompleter);

//Models
var kittensModel = new StaticKittensModel();

//Wiring
showcaseController.kittensModel = kittensModel;
autocompleter.controller = showcaseController;

kittensModel.addView(autocompleter);