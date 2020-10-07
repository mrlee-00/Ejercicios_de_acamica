var numeros = 0;
var a = prompt ("Ingrese un numero o salir para terminar");
while (a != "salir"){
    if (a < 10){
        numeros = numeros + 1;
        a = prompt ("Ingrese un numero o salir para terminar");
    }
    else{
        a = prompt ("Ingrese un numero o salir para terminar");
    }
}
alert(numeros);