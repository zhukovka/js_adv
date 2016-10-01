var assert = require('assert');
var methods = require('../src/problems');
var add = methods.add;
var mul = methods.mul;
var m = methods.m;
var square = methods.square;
var geometry = require('../src/geometry');

describe('Test geometry functions', function () {
    describe('Write a function that takes the lengths of two sides of a triangle and computes the length of the hypotenuse. (Hint: c2 = a2 + b2)', function () {
        it('should return 5', function test() {
            var actual = geometry.hyp(3, 4);
            var expected = 5;
            assert.equal(actual, expected);
        });
    });
    describe('Write a function that evaluates array expressions.', function () {
        it.skip('should return 5', function test() {
            var hypa = [mul, 4, 4];
            var actual = geometry.exp(hypa);
            var expected = 16;
            assert.equal(actual, expected);
        });
        it.skip('should return 25', function test() {
            var hypa = [
                add,
                [mul, 3, 3],
                [mul, 4, 4]
            ];
            var actual = geometry.exp(hypa);
            var expected = 25;
            assert.equal(actual, expected);
        });
        it('should return 5', function test() {
            var hypa = [
                Math.sqrt,
                [
                    add,
                    [mul, 3, 3],
                    [mul, 4, 4]
                ]
            ];
            var actual = geometry.exp(hypa);
            var expected = 5;
            assert.equal(actual, expected);
        });
    })
});