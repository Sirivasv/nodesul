	var express = require('express');
	const converter = require('google-currency');

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
			from: from,
			to: to,
			amount: amount
		};

		converter(options).then(value => { 

			console.log(value);

			var responseValues = {
				"rsp" : 200,
				"from" : from,
				"to" : to,
				"amount" : amount,
				"convertedAmount" : value.converted
			};

			var responseString = JSON.stringify(responseValues);
			console.log(responseString);
			response.send(responseString);

		});
		

	});

	var PORT = 80;
	app.listen(PORT);
	console.log('running on port ' + PORT);
