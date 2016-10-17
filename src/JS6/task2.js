/*
 You will be given a name as the first argument to your program (process.argv[2]). 
 You should output a two-line message, first greeting that person, and then telling them their name in
 lowercase. For example, if the name was "Domenic", you would output:

 Hello, Domenic!
 Your name lowercased is "domenic".

 You can start by doing this using ES5 constructs if you like, but the correct solution should use a single 
 ES6 template string, and not use the + operator.
 */

var name = process.argv[2];

console.log(`Hello, ${process.argv[2]}!
Your name lowercased is "${process.argv[2].toLowerCase()}".`);