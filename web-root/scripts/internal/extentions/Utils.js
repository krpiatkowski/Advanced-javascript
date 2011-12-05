var scripts = document.getElementsByTagName('script');
var index = scripts.length - 1;
console.log(scripts[index])


var PACKAGE_DILIMITER = '.';

function package(str){
    var strArr = str.split(PACKAGE_DILIMITER);
    var cur = window[strArr[0]];
    
    if(cur === undefined){
        cur = {};
        window[strArr[0]] = cur;
    }

    for(var i = 1; i < strArr.length; i++){
        var next = cur[strArr[i]];
        cur[strArr[i]] = next ? next : {};
        cur = next;
    }
    
    return cur;
}