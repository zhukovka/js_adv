/*
 # Task

 Given an Array of strings, use Array#reduce to create an object that contains the number of times each string occured in the array. Return the object directly (no need to console.log).



 */
function countWords(inputWords) {
    return inputWords.reduce(function (result, word) {
        if (!result[word]) {
            result[word] = 1;
        } else {
            result[word] += 1;
        }
        return result;
    }, {});
}

module.exports = countWords;


