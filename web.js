var http = require("http");

var port = 80;

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello! World');
}).listen(port);

console.log('Load http://127.0.0.1/ and see the whole new world');