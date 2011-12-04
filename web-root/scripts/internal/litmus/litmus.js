function test() {
    var data = {
        1:10,
        2:15,
        3:20
    };
    
    var util = new Object();
    util.a = new Object();
    util.a.b = new Function("fn", "n", "return n<2?n:fn(fn, n-1)+fn(fn, n-2);");    
    
    var sum = 0;
    for(var sampleKey in data){
        with(util.a){
            sum += b(b, data[sampleKey]);
        }
    }
    return sum;
}

JSLitmus.test('test', test);
document.getElementById('content').innerHTML = test();