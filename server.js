const http = require('http'),
    fileSystem = require('fs'),
    path = require('path');


const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer(function (req, res) {
    var readStream;
    switch (req.url){
        case '/':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            readStream = fileSystem.createReadStream('./index.html');
            return readStream.pipe(res);
        case '/config':
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            readStream = fileSystem.createReadStream('./config.json');
            return readStream.pipe(res);
        case '/bundle.js':
            res.statusCode = 200;
            // res.setHeader('Content-Type', 'application/json');
            readStream = fileSystem.createReadStream('./bundle.js');
            return readStream.pipe(res);
        case '/error':
            res.statusCode = 500;
            res.end();
        default:
            return res.end('404 Not found');
    }
});

server.listen(port, hostname, function () {
    console.log('Server running at http://' + hostname + ':' + port + '}/');
});