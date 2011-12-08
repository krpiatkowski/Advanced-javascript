require.define('requires/A/B', ['requires/C'], function(scope){
    var content = document.getElementById("content");
    content.innerHTML = content.innerHTML + " B";
    
    scope.B = function(){
        console.log("B");
    }
});