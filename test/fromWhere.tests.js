let assert = require("assert");
let fromWhere = require("../fromWhere");


describe('test my function fromWhere', function(){
    it('it should return "Bellvile" when called with "CY"', function(){
        assert.equal("Bellvile", fromWhere("CY"));
    });
    it('it should return "Paarl" when called with "CJ"', function (){
        assert.equal("Paarl",fromWhere("CJ"))
    });
    it('it should return "Some other place!" when "CC" is inserted', function(){
        assert.equal("Some other place!", fromWhere("CC"))
    })
    });