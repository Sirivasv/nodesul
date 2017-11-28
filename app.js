	//First Version with plain http 

	// var http = require('http');
	//  http.createServer(function(req, res) {
	//  	res.writeHead(200, {'Content-Type' : 'text/plain'});
	//  	res.end('Hello this is great actually isn\'t it ?? Imma updating this\n');
	//  }).listen(80, '127.0.0.1');
	
   	/*
	 * 	Second Version using express
   	 */

	var express = require('express');
	var app = express();
	var bodyParser = require('body-parser');

	app.use("/jscript",express.static(__dirname + '/jscript'));
	app.use(bodyParser.urlencoded({ extended: true}));
	//app.use(bodyParser.json());

	app.get('/', function(request, response){
		console.log('request received from: ' + request.ip);
		console.log('request body: ' + request.body);
		response.sendFile(__dirname + '/windows/index.html');
	});

	app.post('/Greeting', function(request, response) {
		var name = request.body.name;
		
		var responseValues = {
			"rsp": 200, 
			"msg": "Feliz Cumpleanos " + name + " !!!"
		};

		var responseString = JSON.stringify(responseValues);
		console.log(responseString);
		response.send(responseString);
	});

	var PORT = 80;
	app.listen(PORT);
	console.log('running on port ' + PORT);
