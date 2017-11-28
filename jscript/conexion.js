/*
Clase encargada de hacer las peticiones AJAX con POST así como recibir datos en caso necesario
This class makes POST Ajax requests and receives iformation if available
*/

class _Conexion{ 
    //the necesary components for making a connection are the id that we are using, what we want to send and the function to return
    constructor(path,parametro,func){
        this.func=func;
        if(window.XMLHttpRequest)//IE7+, firefox, Chrome, Opera, Safari
               this.xmlhttp = new XMLHttpRequest();
        else//IE6, IE5
               this.xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        this.parametro = parametro;
        this.url = path;
        this._mandar();

    }
    //starts the verification of aknowledgement and sends any parameter
    _mandar(){
        this.xmlhttp.onreadystatechange = this._verificar.bind(this);
        if(this.parametro != ""){
            this.xmlhttp.open("POST", this.url, true);
            this.xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;charset=UTF-8");
            this.xmlhttp.send(this.parametro);
        }
    }
    //checks for re reply
    _verificar () {
        if(this.xmlhttp.readyState == 1){
        }else if(this.xmlhttp.readyState == 2){
        }else if(this.xmlhttp.readyState == 3){
        }
        else if (this.xmlhttp.readyState == 4 && this.xmlhttp.status == 200){ //correct state and 200 as reply
            if(this.xmlhttp.responseText != null && this.xmlhttp.responseText.length > 0){ //verify we received somethings
                var r = JSON.parse(this.xmlhttp.responseText);
                this.func(r);
            }
            else{
                alert("We are currently updating the system, this option is temporarily unavailable"); //caught error in case we receive nothing
            }
            
        }
        
    }
}