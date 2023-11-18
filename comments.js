// Create web server
// 1. Load http module
var http = require('http');
var fs = require('fs');
var path = require('path');
var url = require('url');
var comments = [];
// 2. Create http server
var server = http.createServer(function (req, res) {
    // 2.1 Parse the request containing file name
    var pathname = url.parse(req.url).pathname;
    // 2.2 Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // 3. Write the content of the file to response body
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data.toString());
        }
        // 4. Send the response body
        res.end();
    });
}).listen(8080);
console.log('Server running at http://