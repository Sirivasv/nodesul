# Welcome!
This is my npm module where I am just testing some features of npm development.

## Installing
* Through github
    * git clone https://github.com/Sirivasv/nodesul.git
    * npm install
* Through npm
    * npm install nodesul

## Running
With Linux to start listening on PORT (this case 80) may require sudo privileges
* Through github 
    * node app.js
* Through npm 
    * node node_modules/nodesul
[landing_page]: https://github.com/Sirivasv/nodesul/raw/master/images/src1.png "Landing page"
[response_received]: https://github.com/Sirivasv/nodesul/raw/master/images/src2.png "Response received"

## Features
* http://<SERVER_IP>/Greeting 
	* Sending a JSON POST request with the form:
	```javascript
		var request = {
			"name" : "<YOUR_NAME_GOES_HERE>"
		};
		//Example
		var request = {
			"name" : "Saul"
		};
	```
	* Will have as a response a JSON of the form:
	```javascript
		var response = {
			"rsp" : "200",
			"msg" : "Feliz Cumpleanos <YOUR_NAME_GOES_HERE>!!!" //I made this on my birthday :p
		};
		//Example
		var response = {
			"rsp" : "200",
			"msg" : "Feliz Cumpleanos Saul!!!"
		};
	```
* http://<SERVER_IP>/
	* Here there will be a render index.html page to handle the POST request (using AJAX) of the previous Greeting feature.
		* ![alt text][landing_page]
	* This is the display of the response.
		* ![alt text][response_received]

* http://<SERVER_IP>/Convert
	* Sending a JSON POST request with the form:
	```javascript
		var request = {
			"from" : "<ORIGIN_CURRENCY_CODE>",
			"to" : "<DESIRED_CURRENCY_CODE>",
			"amount" : <AMOUNT_TO_CONVERT>
		};
		//Example
		var request = {
			"from" : "MXN",
			"to" : "USD",
			"amount" : 1
		};
	```
	* Will have as a response a JSON of the form:
	```javascript
		var response = {
			"from" : "<ORIGIN_CURRENCY_CODE>",
			"to" : "<DESIRED_CURRENCY_CODE>",
			"amount" : <AMOUNT_TO_CONVERT>,
			"convertedAmount" : <CONVERTED_AMOUNT_TO_DESIRED_CURRENCY>
		};
		//Example
		var response = {
			"from" : "MXN",
			"to" : "USD",
			"amount" : 1,
			"convertedAmount" : 0.0524
		};
	```	