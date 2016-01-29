jest.dontMock('../src/sum');

describe('sum',function(){
   it('add 1 +2 to equal 3',function(){
     var sum = require('../src/sum');
     expect(sum(1,2)).tobe(3);
   });
});
