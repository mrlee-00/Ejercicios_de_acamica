var a = prompt("Ingrese un numero");
var b = prompt("Ingrese otro numero");
var c = prompt("Ingrese un ultimo numero");
var resultado;

if (isNaN(a) && isNaN(b) && isNaN(c)){
    document.write("INGRESE NUMEROS!!!!")
}
else{
    if (a > b && a > c){
        if (b > c){
            resultado = "El orden de los objetos es: ", c, b, a;
            document.write(resultado);
        }
        else{
            resultado = b, c, a;
            document.write(resultado);
        }
    }

}