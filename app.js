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
    server.use(express.static(__dirname + '/node_modules/requirejs'));
});

server.get('/', function(req, res) {
    res.render('index', {scripts: paths.scripts});
});

//Exercises stuff
server.get('/optimization2', function(req, res) {
    res.render('optimization2.html');
});


server.listen(process.env.PORT);