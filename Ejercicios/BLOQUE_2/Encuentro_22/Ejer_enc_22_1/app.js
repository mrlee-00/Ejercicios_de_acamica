var miArray = [];
var a  = prompt("Ingrese un numero o stop");
while (a != "stop"){
    var b = parseInt(a);
    var c = typeof(b);
    if (b = parseInt(a)){
        miArray.push(b);
        a  = prompt("Ingrese un numero o stop");
    }
    else{
        a  = prompt("Ingrese un numero o stop");
    }
}
document.write (miArray);