/*
 Write an HTTP server that receives only POST requests and converts
 incoming POST body characters to upper-case and returns it to the client.

 Your server should listen on the port provided by the first argument to
 your program.

 */

var http = require('http');
var map = require ('through2-map');

var server = http.createServer(function (request, responsee) {
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase()
    })).pipe(responsee)
});


server.listen(process.argv[2]);