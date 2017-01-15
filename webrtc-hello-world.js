var http = require('http');
var fs = require('fs');


fs.readFile('./pages/webrtc-hello-world.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function (request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(80);
});