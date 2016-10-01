var assert = require('assert');
var geometry = require('../src/geometry');
var methods = require('../src/problems');
var hyp = geometry.hyp;
var exp = geometry.exp;
var add = methods.add;
var mul = methods.mul;

describe('Closure', function () {
    describe('Function must return the length of the hypotenuse', function () {
        it('should return 5', function test() {
            var actual = hyp(3, 4);
            var expected = 5;
            assert.equal(actual, expected);
        });
    });
    describe('Function must return the length of the hypotenuse', function () {
        it('should return 5', function test() {
            var hypa = [Math.sqrt, [add,[mul, 3, 3], [mul, 4, 4]]];
            var actual = exp(hypa);
            var expected = 5;
            assert.equal(actual, expected);
        });
    })
});
