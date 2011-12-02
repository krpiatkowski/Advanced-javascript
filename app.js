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

server.listen(process.env.PORT);