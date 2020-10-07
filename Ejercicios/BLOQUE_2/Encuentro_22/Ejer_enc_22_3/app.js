var numeros = [];
var a = prompt ("Ingrese algo: ");
while (a != 0){
    if (parseInt(a)){
        parseInt(a);
        numeros.push(a);
        a = prompt ("Ingrese algo: ");
    }
    else{
        a = prompt ("Ingrese algo: ");
    }
}
var maximo = Math.max(numeros);
var minimo = Math.min(numeros);
document.write(numeros);
document.write("NUMERO MAXIMO: ", maximo);
document.write("NUMERO MINIMO: ", minimo);