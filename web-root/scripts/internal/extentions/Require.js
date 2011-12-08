var require = {};


require.PACKAGE_DILIMITER = '/';
require.defines = {};
require.graph = {};

require.resolvePath = function(){
    var scripts = document.getElementsByTagName('script');
    var script = scripts[scripts.length - 1]; 
    var path = script.getAttribute('src');
    var paths = path.split('/');
    require.path = paths.splice(0, paths.length-1).join('/');    
}();

require.load = function(src){
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = require.path + '/' + src + ".js";
    head.appendChild(script);   
};

require.packagee = function(str){
    var strArr = str.split(require.PACKAGE_DILIMITER);
    var cur = window[strArr[0]];
    
    if(cur === undefined){
        cur = {};
        window[strArr[0]] = cur;
    }

    var root = cur;
    for(var i = 1; i < strArr.length; i++){
        var nextToken = strArr[i];
        var next = cur[nextToken] || {};        
        cur[strArr[i]] = next;
        cur = next;
    }
    
    return root;
};

require.require = function(){
    
}

require.define = function(namespace, dependencies, callback){   
    require.defines[namespace] = {'callback' : callback, 'dependencies': dependencies, 'executed' : false};

    for(var i = 0; i < dependencies.length; i++){
        var dependecy = dependencies[i];
        require.graph[dependecy] = require.graph[dependecy] || [];
        require.graph[dependecy].push(namespace);
    }
        
    require.check(namespace);

    for(var i = 0; i < dependencies.length; i++){
        var dependency = dependencies[i];
        if(require.defines[dependency] === undefined){
            require.load(dependency);
        }
    }


};

require.check = function(namespace){
    var p = require.defines[namespace];

    if(!p.executed){
        var isReady = true;
        for(var i = 0; i < p.dependencies.length; i++){
            var dependencyClass = p.dependencies[i];
            var dependency = require.defines[dependencyClass];
            isReady = isReady && dependency !== undefined && dependency.executed;
        }
        
        if(isReady){
            p.executed = true;
            var scope = require.packagee(namespace);
            p.callback(scope);

            var dependsOn = require.graph[namespace];            
            if(dependsOn !== undefined){
                for(var j = 0; j < dependsOn.length; j++){
                    require.check(dependsOn[j]);
                }
            }
        }
    }
};