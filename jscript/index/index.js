
function successHandler (json_response) {
	var responseDiv = document.getElementById('responseDiv');
	var res = "";

	if (json_response.rsp == 200) res += "OK: " + json_response.msg;
	else res += "ERROR: " + json_response.msg;

	responseDiv.innerHTML = res + "<br><br>";
}

function sendName () {
	var name = document.getElementById('inputName').value;
	var params = 'name=' + name;
	var x = new _Conexion('http://' + window.location.hostname + '/Greeting', params, successHandler);
}

window.onload = function() {
	var nameBtn = document.getElementById('nameBtn');
	nameBtn.addEventListener('click', sendName);
}