require.define('requires/A', ['requires/C', 'requires/A/B'], function(scope){
    var content = document.getElementById("content");
    content.innerHTML = content.innerHTML + " A";
});