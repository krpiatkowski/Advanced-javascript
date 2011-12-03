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

/**
 * @param {string} padString Padding string
 */
String.prototype.rpad = function(padString, length) {
	var str = this;
    while (str.length < length)
        str = str + padString;
    return str;
};