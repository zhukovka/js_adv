/*
 This problem is the same as the previous problem (HTTP COLLECT) in that
 you need to use http.get(). However, this time you will be provided with
 three URLs as the first three command-line arguments.

 You must collect the complete content provided to you by each of the URLs
 and print it to the console (stdout). You don't need to print out the
 length, just the data as a String; one line per URL. The catch is that you
 must print them out in the same order as the URLs are provided to you as
 command-line arguments.

 */


var concat = require('concat-stream');

var http = require('http');

all(getUrl, process.argv.slice(2), function(err, data) {
    console.log(data.join("\n"))
})

function all(fn, args, finished) {
    var result = [], count = 0;
    args.forEach(function(arg, i) {
        fn(arg, function(err, data) {
            if (err) return finished(err);

            count += 1;
            result[i] = data;

            if (count == args.length) {
                finished(null, result);
            }
        });
    })
}

function getUrl(url, callback) {
    http.get(url, function(res) {
        res.setEncoding('utf8');
        res.on('error', callback)
        res.pipe(concat(function(data) {
            callback(null, data);
        }))
    });
}