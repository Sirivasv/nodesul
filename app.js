	var express = require('express');
	var https = require('https');

	var app = express();
	var bodyParser = require('body-parser');

	app.use("/jscript",express.static(__dirname + '/jscript'));
	app.use(bodyParser.urlencoded({ extended: true}));
	app.use(bodyParser.json());

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

	app.post('/Convert', function(request, response) {
		

		var from = request.body.from;
		var to = request.body.to;
		var amount = request.body.amount;

		var options = {
			host: 'free.currencyconverterapi.com',
			port: 443,
			path: '/api/v5/convert?q='+ from + '_' + to + '&compact=ultra',
			method: 'GET'
		};

		var getHttpsRequest = https.request(options, function(httpsRequestResponse){
			console.log(httpsRequestResponse);
			httpsRequestResponse.on('data', function(data){
				var responseCurrency = JSON.parse(data);
				var value = responseCurrency[from + '_' + to];
				var responseValues = {
					"rsp" : 200,
					"from" : from,
					"to" : to,
					"amount" : amount,
					"convertedAmount" : parseFloat(amount) * parseFloat(value)
				};

				var responseString = JSON.stringify(responseValues);
				console.log(responseString);
				response.send(responseString);
			});
		});

		getHttpsRequest.end();
	    getHttpsRequest.on('error', function(err){
	        console.log("Error: ", err);
	    }); 

	});

	var PORT = 99;
	app.listen(PORT);
	console.log('running on port ' + PORT);
