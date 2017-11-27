   var http = require('http');
    http.createServer(function(req, res) {
    	res.writeHead(200, {'Content-Type' : 'text/plain'});
    	res.end('Hello this is great actually isn\'t it ?? Imma updating this\n');
    }).listen(800, '127.0.0.0');