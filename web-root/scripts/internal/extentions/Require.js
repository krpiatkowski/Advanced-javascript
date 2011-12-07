var require = {};
require.PACKAGE_DILIMITER = '.';
require.defines = {};
require.graph = {};


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

require.define = function(clazz, dependencies, callback){   
    require.defines[clazz] = {'callback' : callback, 'dependencies': dependencies, 'executed' : false};

    for(var i = 0; i < dependencies.length; i++){
        var dependecy = dependencies[i];
        require.graph[dependecy] = require.graph[dependecy] || [];
        require.graph[dependecy].push(clazz);
    }
    require.check(clazz);
};

require.check = function(clazz){
    var p = require.defines[clazz];

    if(!p.executed){
        var isReady = true;
        for(var i = 0; i < p.dependencies.length; i++){
            var dependencyClass = p.dependencies[i];
            var dependency = require.defines[dependencyClass];
            isReady = isReady && dependency !== undefined && dependency.executed;
        }
        
        if(isReady){
            p.executed = true;
            var scope = require.packagee(clazz);
            p.callback(scope);


            var dependsOn = require.graph[clazz];            
            if(dependsOn !== undefined){
                for(var j = 0; j < dependsOn.length; j++){
                    require.check(dependsOn[j]);
                }
            }
        }
    }
};