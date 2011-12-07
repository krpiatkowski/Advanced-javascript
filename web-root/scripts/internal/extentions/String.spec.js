describe('String', function(){
    describe('triming', function(){
        it('trimes both sides', function(){
            expect(' test '.trim()).toBe('test');
        });
    });
});