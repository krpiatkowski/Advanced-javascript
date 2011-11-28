var express = require('express');
var server = express.createServer()

server.configure(function(){
    server.use(express.methodOverride());
    server.use(express.bodyParser());
    server.use(server.router);
});

server.configure('development', function(){
    server.set('views', __dirname + '/web-root/pages');
    server.set('view engine', 'jade');
    server.set('view options', {layout: false});
    server.use(express.bodyParser());
    server.use(express.methodOverride());
    server.use(require('stylus').middleware({ src: __dirname + '/web-root/styles' }));
    server.use(server.router);
    server.use(express.static(__dirname + '/web-root'));
});

server.get('/', function(req, res){
  res.render('index.jade');
});

server.listen(process.env.PORT);