require.define('requires/C', [], function(scope){
    var content = document.getElementById("content");
    content.innerHTML = content.innerHTML + " C";
    
    scope.C = function(){
        console.log("C");
    }
});