function countWords(inputWords) {
    var result = {};

    inputWords.reduce(function (previous, current) {
        if (!result[current]) {
            result[current] = 1;
        }
        else {
            result[current] += 1;
        }
    },0);
    return result; 
}

module.exports = countWords;


