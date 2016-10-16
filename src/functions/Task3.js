function doubleAll(numbers) {
    var result;
    return result = numbers.map(function (num) {
        return num * 2;
    });
}

module.exports = doubleAll;