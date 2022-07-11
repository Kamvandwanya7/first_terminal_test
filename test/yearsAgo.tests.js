let assert= require("assert");
let yearsAgo= require("../yearsAgo")

describe('test my function yearsAgo', function (){
    it('it should return "81" when 1941 is insterted', function(){
        assert.equal(81, yearsAgo(1941));
    })
    it('it should return "6" when 2016 is inserted', function(){
        assert.equal(6, yearsAgo(2016));
    })
    it('it should return "10" when 2012 is inserted', function(){
        assert.equal(10, yearsAgo(2012));
    })
})