var assert = require('assert');
var func = require('../src/Task1');
var upperCaser = func.upperCaser;
describe('Closure', function () {
    describe('function return uppercase', function () {
        it('should uppercase', function test() {
            var actual = upperCaser('hello world');
            var expected = 'HELLO WORLD';
            assert.equal(expected, actual);
        });
    });
});