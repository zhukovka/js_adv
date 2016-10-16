/*
 Write a program that accepts one or more numbers as command-line arguments
 and prints the sum of those numbers to the console (stdout).

 */
function sum (a, b) {
    return a + b;
}
var result =  process.argv.slice(2).map(Number).reduce(sum);
console.log(result);