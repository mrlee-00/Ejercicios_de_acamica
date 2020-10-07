var a = prompt("Ingrese una palabra");
var b = prompt("Ingrese otra palabra");
if ( typeof a === "string"){
    if (a < b){
        document.write("La primera: ", b);
        document.write("La segunda: ", a);
    }
    else if (a > b){
        document.write("La primera: ", a);
        document.write("La segunda: ", b);
    }
    else{
        document.write("Son Iguales las palabras...")
    }
}
 /* else if ( typeof a === False){
    a = prompt("Ingrese una palabra");
}
else if (typeof a ===  False){
    b = prompt("Ingrese otra palabra");
}
*/