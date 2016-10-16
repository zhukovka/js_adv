function reduce(arr, fn, initial) {
    var result = initial;
    fn = function () {
        var first = arr[0];
        if (!arr.length){
            return result;
        }
        if (!result[first]) {
            result[first] = 1;
            arr = arr.slice(1);
            fn();
        }
        else {
            result[first] += 1;
            arr = arr.slice(1);
            fn();
        }
    };
    fn();
    return result;
}

module.exports = reduce;