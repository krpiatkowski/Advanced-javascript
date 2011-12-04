String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g,"");
};
 
String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
};
 
String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
};

String.prototype.lpad = function(padString, length) {
    var str = this;
    while (str.length < length)
        str = padString + str;
    return str;
};

String.prototype.rpad = function(padString, length) {
	var str = this;
    while (str.length < length)
        str = str + padString;
    return str;
};

String.prototype.readLines = function(){
    return this.split(/\r\n|\r|\n/);
};

String.prototype.eachLine = function(fn){
    var arr = this.readLines();
    var result = "";
    for(var i = 0; i < arr.length; i++){
        result += fn(arr[i]);
    }
    return result;
};

String.prototype.wordWrap = function(length){
  return this;  
};