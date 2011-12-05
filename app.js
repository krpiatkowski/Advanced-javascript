var express = require('express');
var server = express.createServer()
var paths = require('./paths.js');

server.configure(function() {
    server.use(express.methodOverride());
    server.use(express.bodyParser());
    server.use(server.router);
});

server.configure('development', function() {
    server.set('views', __dirname + '/web-root/pages');
    server.set('view engine', 'jade');
    server.set('view options', {
        layout: false
    });
    server.use(express.bodyParser());
    server.use(express.methodOverride());
    server.use(require('stylus').middleware({
        src: __dirname + '/web-root/styles'
    }));
    server.use(server.router);
    server.use(express.static(__dirname + '/web-root'));
    server.use(express.static(__dirname + '/web-root/pages'));
    server.use(express.static(__dirname + '/exercises'));
});

server.get('/', function(req, res) {
    res.render('index');
});

server.get('/mvc.html', function(req, res) {
    res.render('mvc', {scripts: paths.scripts});
});

server.get('/litmus.html', function(req, res) {
    res.render('litmus');
});

server.get('/jasmine.html', function(req, res) {
    res.render('jasmine');
});

server.get('/jquery.html', function(req, res) {
    res.render('jquery');
});

//REST
var kittens = [
    {name: 'Abbymini',   color: 'black',     age: 1, cuteness:2, image:'/images/kitten1.jpg'},
    {name: 'Apple',      color: 'white',     age: 3, cuteness:3, image:'/images/kitten2.jpg'},
    {name: 'Asterisk',   color: 'browish',   age: 2, cuteness:3, image:'/images/kitten3.jpg'},
    {name: 'Atom',       color: 'red',       age: 3, cuteness:3, image:'/images/kitten4.jpg'},
    {name: 'Baby',       color: 'white',     age: 1, cuteness:3, image:'/images/kitten5.jpg'},
    {name: 'Barbie',     color: 'white',     age: 1, cuteness:3, image:'/images/kitten6.jpg'},
    {name: 'Biscuit',    color: 'white',     age: 2, cuteness:3, image:'/images/kitten7.jpg'},
    {name: 'Bitsy',      color: 'white',     age: 4, cuteness:3, image:'/images/kitten8.jpg'}
];

server.get('/kittens', function(req, res){
    res.send(kittens);
});

server.get('/kittens/:kitten', function(req, res){
    for(var i = 0; i < kittens.length; i++){
        var kitten = kittens[i];
        if(kitten.name === req.params.kitten){
            res.send(kitten);
            return;
        }
    }
    return null;
})

server.del('/kittens/:kitten', function(req, res){
    for(var i = 0; i < kittens.length; i++){
        var kitten = kittens[i];
        if(kitten.name === req.params.kitten){
            delete kittens[i];
            return;
        }
    }    
});


server.listen(process.env.PORT);