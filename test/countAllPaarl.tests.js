let assert = require("assert");
let countAllPaarl = require("../countAllPaarl");


describe('test my function countAllPaarl', function () {
    it('it should return 1 when called with "CL 124,CY 567,CL 345, CJ 456,CL 341, CL"', function (){
        assert.equal(1, countAllPaarl("CL 124,CY 567,CL 345, CJ 456,CL 341, CL"));
    });
    it('it should return 0 when "CH 4673, WEG7579" is inserted', function(){
        assert.equal(0, countAllPaarl("CH 4673, WEG7579"));
    });
    it('it should return 3 when "CJ 4673, CJ G7579, CJ 564" is inserted', function(){
        assert.equal(3, countAllPaarl("CJ 4673, CJ G7579, CJ 564"));
    });
});