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

server.get('/mvc.html', function(req, res) {
    res.render('mvc', {scripts: paths.scripts});
});

server.get('/jquery', function(req, res){
   res.render('jquery');
});

server.get('/dojo', function(req, res){
   res.render('dojo');
});




//REST
var kittens = [
    {name: 'Abbymini',   color: 'black',     age: 1, cuteness:2},
    {name: 'Apple',      color: 'white',     age: 3, cuteness:3},
    {name: 'Asterisk',   color: 'browish',   age: 2, cuteness:3},
    {name: 'Atom',       color: 'red',       age: 3, cuteness:3},
    {name: 'Baby',       color: 'white',     age: 1, cuteness:3},
    {name: 'Barbie',     color: 'white',     age: 1, cuteness:3},
    {name: 'Biscuit',    color: 'white',     age: 2, cuteness:3},
    {name: 'Bitsy',      color: 'white',     age: 4, cuteness:3}
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