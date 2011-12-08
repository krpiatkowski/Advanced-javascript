require.define('test', ['requires/A'], function(){
    console.log(requires.A);    
    console.log(requires.A.B);
    console.log(requires.C);        
});