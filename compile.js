var fs = require('fs');

var paths = require('./paths.js');


var files = [];
var fileNames = [];
for(var i = 0; i < paths.scripts.length; i++){
    var script = paths.scripts[i]; 
    if(script.match("^"+'scripts/internal')){
        files.push(fs.readFileSync("./web-root/" + paths.scripts[i]));
        fileNames.push("./web-root/" + paths.scripts[i]);
    }
}

compile(files, function(err, result){
    if(err){
        console.log(err);
    } else {
        if(result.errors){
            console.log('Found ' + result.errors.length + ' errors');
            for(var i = 0; i < result.errors.length; i++){
                var error = result.errors[i];                
                console.log(fileNames[parseInt(error.file.substring(6, error.file.length), 10)]);
                console.log(error.type + ' ' + error.error);
                console.log(error.line);
                console.log(padString('^', error.charno+1));
                console.log('');
            }
        } else {
            console.log("0 errors");
        }
        if(result.warnings){
            console.log('Found ' + result.warnings.length + ' warnings');
            for(var i = 0; i < result.warnings.length; i++){
                var warning = result.warnings[i];
                console.log(fileNames[parseInt(warning.file.substring(6, warning.file.length), 10)]);
                console.log(warning.type + ' ' + warning.warning);
                console.log(warning.line);
                console.log(padString('^', warning.charno+1));
                console.log('');
            }
        } else {
            console.log("0 warnings");
        }
        
        var stat = result.statistics;
        console.log("Size               :" + padString(stat.originalSize, 10) + "b");
        console.log("GZipped            :" + padString(stat.originalGzipSize, 10) + "b");
        console.log("Compressed         :" + padString(stat.compressedSize, 10) + "b");
        console.log("Compressed+GZipped :" + padString(stat.compressedGzipSize, 10) + "b");
        
        //console.log(result.compiledCode);
    }
});


function padString(str, amount, right){
    var padding = str + '';
    
    while (padding.length < amount) {
        if(right){
            padding = padding + ' ';                    
        } else {
            padding = ' ' + padding;                    
        }
    }
    return padding;
}

function compile(files, next) {
  try {
        var querystring = require('querystring'),
        http = require('http'),
        host = 'closure-compiler.appspot.com',
        body =                     
          querystring.stringify({'externs_url' : 'http://closure-compiler.googlecode.com/svn/trunk/contrib/externs/jquery-1.7.js' }) + 
          '&' + querystring.stringify({'js_externs' : '/** @param {...*} var_args */jQuery.prototype.autocomplete = function(var_args) {};'}) + 
          '&compilation_level=ADVANCED_OPTIMIZATIONS' +
          '&output_format=json' +
          '&output_info=compiled_code' +
          '&output_info=warnings'+ 
          '&output_info=errors' + 
          '&output_info=statistics' +
          '&warning_level=verbose';
        
        for(var i = 0; i < files.length; i++){
            body += '&' + querystring.stringify({js_code:files[i].toString('ascii')});
        }
        
        var client = http.createClient(80, host).on('error', next);
        var req = client.request('POST', '/compile', {
          'Host': host,
          'Content-Length': body.length,
          'Content-Type': 'application/x-www-form-urlencoded'
        });

    req.on('error', next).end(body);

    req.on('response', function(res) {
      if (res.statusCode != 200)
        next(new Error('Unexpected HTTP response: ' + res.statusCode));
      else
        capture(res, 'utf-8', parseResponse);
    });

    function parseResponse(err, data) {
      err ? next(err) : loadJSON(data, function(err, obj) {
        if (err)
          next(err);
        else
          next(null, obj);
      });
    }
  } catch (err) {
    next(err);
  }
}

function capture(input, encoding, next) {
  var buffer = '';

  input.on('data', function(chunk) {
    buffer += chunk.toString(encoding);
  });

  input.on('end', function() {
    next(null, buffer);
  });

  input.on('error', next);
}


function loadJSON(data, next) {
  var err, obj;

  try {
    obj = JSON.parse(data);
  } catch (x) {
    err = data;
  }
  next(err, obj);
}
