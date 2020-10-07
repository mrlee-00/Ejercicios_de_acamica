var a = prompt("Ingrese un año");
if ( a % 4 == 0 ){
    document.write("Es bisiesto");
}
else if ( a % 100 == 0 && a % 400 == 0){
    document.write("Es bisiesto");
}
else{
    document.write("NO es bisiesto!");
}