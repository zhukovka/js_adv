/*
 Use Array#reduce to implement a simple version of Array#map.
 */

module.exports = function arrayMap(arr, fn) {
    var result = [];
    arr.reduce(function (total, number) {
        result.push(fn(number));
    }, 0);
    return result;
};
