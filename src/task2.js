function repeat(operation, num) {
    if (num > 0 ) {
        num -= 1;
        operation();
    }
}

module.exports = repeat;