let assert = require("assert");
let countRegNumber = require("../countRegNumber");


describe('test my countRegNumber function', function () {
    it('it should return 5 as a total number of plates', function () {
        assert.equal(5, countRegNumber("CY 3748, DY 7389, FG 8998, AA 7878, RP 0837"))
    });
    it('it should return 1 as a total number of plates', function(){
  assert.equal(1, countRegNumber("SH 2345"))
});
it('it should return 12 as a total number of plates', function(){
assert.equal(12, countRegNumber("SG23333, SH2389, HJ3877, DG39393, HDBHHH38, HGF6478, SG23333, SH2389, HJ3877, DG39393, HDBHHH38, HGF6478"));
});
});