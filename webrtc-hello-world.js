var https = require('https');
var fs = require('fs');

const options = {
    key: fs.readFileSync('./security/key.pem'),
    cert: fs.readFileSync('./security/cert.pem')
};

fs.readFile('./pages/webrtc-hello-world.html', function (err, html) {
    if (err) {
        throw err;
    }
    https.createServer(options, function (request, response) {
        response.writeHeader(200, {"Content-Type": "text/html"});
        response.write(html);
        response.end();
    }).listen(8080);
});
