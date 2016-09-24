var assert = require('assert');
var methods = require('../src/problems');
describe('Closure', function () {
    describe('function that adds from many invocations, until it sees an empty invocation', function () {
        it('should return 0', function test() {
            var actual = methods.addg();
            var expected = 0;
            assert.equal(actual, expected);
        });
        it('should return 15', function test() {
            var actual = methods.addg(1)(2)(4)(8)();
            var expected = 15;
            assert.equal(actual, expected);
        });
        it('should return 12', function test() {
            var actual = methods.addg(3)(4)(5)();
            var expected = 12;
            assert.equal(actual, expected);
        });
    });
    describe('Write a function that will take a binary function and apply it to many invocations.', function () {
        var add = methods.add;
        it('should return 0', function test() {
            var actual = 0;
            var expected = methods.applyg(add)();
            assert.equal(actual, expected);
        });
        it('should return 3', function test() {
            var actual = 3;
            var expected = methods.applyg(add)(3)();
            assert.equal(actual, expected);
        });
        it('should return 12', function test() {
            var actual = 12;
            var expected = methods.applyg(add)(3)(4)(5)();
            assert.equal(actual, expected);
        });
        it('should return 15', function test() {
            var actual = 15;
            var expected = methods.applyg(add)(1)(2)(4)(8)();
            assert.equal(actual, expected);
        });
    });
    describe('Write a function m that takes a value and an optional source string and returns them in an object.', function () {
        it('should "value": 1,"source": "1"', function test() {
            var actual = methods.m(1);
            var expected = {"value": 1, "source": "1"};
            assert.deepEqual(actual, expected);
        });
        it('should have "value": 3.14159...,"source":"pi"', function test() {
            var actual = {"value": Math.PI, "source": "pi"};
            var expected = methods.m(Math.PI, "pi");
            assert.deepEqual(actual, expected);
        });
        it('should have "value": 3,"source":4', function test() {
            var actual = {"value": 3, "source": 4};
            var expected = methods.m(3, 4);
            assert.deepEqual(actual, expected);
        });
    })
});
