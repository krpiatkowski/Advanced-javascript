var PACKAGE_DILIMITER = '.';

var require = {};

require.pack = function(str){
    var strArr = str.split(PACKAGE_DILIMITER);
    var cur = window[strArr[0]];
    
    if(cur === undefined){
        cur = {};
        window[strArr[0]] = cur;
    }

    for(var i = 1; i < strArr.length; i++){
        var next = cur[strArr[i]];
        cur[strArr[i]] = next || {};
        cur = next;
    }
    
    return cur;
};



require.require = function(string, callback){

};

require.define = function(pack, dependecies, scope){
     
});