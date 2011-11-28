require.paths.push('./node_modules');

var app = require('express').createServer();

app.configure(function(){
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(app.router);
});

app.configure('development', function(){
    server.set('views', __dirname + '/web-root/views');
    server.set('view engine', 'jade');
    server.set('view options', {layout: false});
    server.use(express.bodyParser());
    server.use(express.methodOverride());
    server.use(require('stylus').middleware({ src: __dirname + '/web-root' }));
    server.use(server.router);
    server.use(express.static(__dirname + '/web-root'));        
});

app.get('/', function(req, res){
  res.send('index');
});

app.listen(process.env.PORT);