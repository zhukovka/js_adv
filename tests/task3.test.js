var assert = require('assert');
var func = require('../src/functions/Task3');
describe('Closure', function () {
    describe('function return array', function () {
        it('should return array', function test() {
            var actual = func.doubleAll([1, 2, 3]);
            var expected = [1, 2, 3];
            assert.equal(expected, actual);
        });
    });
});