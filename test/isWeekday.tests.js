
let assert = require("assert");
let isWeekday = require("../isWeekday");

describe('test my function isWeekDay', function(){
    it('it should return "false" if the day inserted starts with S', function(){
        assert.equal(false, isWeekday("Saturday"));
    });
    it('it should return "true" if the day inserted does not start with S', function(){
        assert.equal(true, isWeekday("Tuesday"));
    });
    it('it should return "true" if the day inserted does not start with S', function(){
        assert.equal(true, isWeekday("Monday"));
    });
});