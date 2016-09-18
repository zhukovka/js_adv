var assert = require('assert');
function addg() {
    return function () {

    }
}

function applyg(func) {

}
function m(a, b) {

}
describe('Closure', function () {
    describe('function that adds from many invocations, until it sees an empty invocation', function () {
        it('should return 15', function test() {
            var actual = addg(1)(2)(4)(8)();
            var expected = 15;
            assert.equal(actual, expected);
        });
        it('should return 12', function test() {
            var actual = addg(3)(4)(5)();
            var expected = 12;
            assert.equal(actual, expected);
        });
    });
    describe('Write a function that will take a binary function and apply it to many invocations.', function () {
        it('should return 12', function test() {
            var actual = 12;
            var expected = applyg(add)(3)(4)(5)();
            assert.equal(actual, expected);
        });
        it('should return 15', function test() {
            var actual = 15;
            var expected = applyg(add)(1)(2)(4)(8)();
            assert.equal(actual, expected);
        });
    });
    describe('Write a function m that takes a value and an optional source string and returns them in an object.', function () {
        it('should "value": 1, "source": "1"', function test() {
            var actual = '{"value": 1, "source": "1"}';
            var expected = JSON.stringify(m(1));
            assert.equal(actual, expected);
        });
        it('should have "value": 3.14159..., "source":"pi"', function test() {
            var actual = '{"value": 3.14159..., "source":"pi"}';
            var expected = JSON.stringify(m(Math.PI, "pi"));
            assert.equal(actual, expected);
        });
    })
});
