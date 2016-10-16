var assert = require('assert');
var func = require('../src/functions/task4');
describe('Closure', function () {
    describe('function return array < 50 symbols', function () {
        it('should return array', function test() {
            var actual = func.getShortMessages([{message: 'Non magna nisi non ipsum labore consequat laborum exercitation.'}, {message: 'Non magna nisi non ipsum labore consequat laborum exercitation.'}, {message: 'Non magna nisi non ipsum labore consequat laborum exercitation.'}, {message: 'Non magna nisi non ipsum labore consequat laborum exercitation.'}]);
            var expected = ['Non magna nisi non ipsum labore consequat laborum exercitation.', 'Non magna nisi non ipsum labore consequat laborum exercitation.', 'Non magna nisi non ipsum labore consequat laborum exercitation.', 'Non magna nisi non ipsum labore consequat laborum exercitation.'];
            assert.equal(expected, actual);
        });
    });
});