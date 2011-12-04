function test() {
    var data = [
        10,
        15,
        20
    ];
    
    var util = {};
    util.a = {}
    util.a.b = function(fn,n){
        var first = 1;
        var second = 0;
        var sum = 0;
        for(var i = 0; i < n; i++){
            second = first;
            first = sum;
            sum = second + first;
        }
        return sum;
    }
    
    var sum = 0;
    for(var i = 0; i < data.length; i++){
        sum += util.a.b(util.a.b, data[i]);
    }
    return sum;
}

JSLitmus.test('test', test);
document.getElementById('content').innerHTML = test();