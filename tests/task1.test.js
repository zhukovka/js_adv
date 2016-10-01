var assert = require('assert');
var task1 = require('../src/task1');

describe('uppercase', function () {
    it('should uppercase', function test() {
        var expected = 'HELLO WORLD';
        var actual = task1('Hello World');
        assert.equal(actual, expected);
    });
});