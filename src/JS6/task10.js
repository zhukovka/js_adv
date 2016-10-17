/*
 In fact, let's do that right now. You will be given two arguments to your program: a username,
 and a comment. Both will potentially contain HTML-unsafe characters (namely ', ", <, >,
 and &). Your job is to use tagged template strings to log a safely-escaped HTML rendering of the comment.

 For example, if the username is "domenic" and the comment is "<dl> is a fun tag", you should output:

 <b>domenic says</b>: "&lt;dl&gt; is a fun tag"

 As before, you could start doing this using simple ES5 constructs. But the goal is for you to write a function
 that you can use as a tag in a tagged template string, that will do any
 escaping automatically.

 */

var message = process.argv.slice(3).toString();

function replace(arg) {
    return arg
        .replace(/&/gi, "&amp;")
        .replace(/'/gi, '&apos;')
        .replace(/"/gi, "&quot;")
        .replace(/</gi, "&lt;")
        .replace(/>/gi, "&gt;")        ;
}
console.log(`<b>${replace(process.argv[2].toString())} says</b>: "${replace(message)}"`);