var pares = [];
var impares = [];
var noNumericos = [];
var a = prompt ("Ingrese algo: ");
while (a != 0){
    if (parseInt(a)){
        if ((a % 2 == 0)){
            pares.push(a);
            a = prompt ("Ingrese algo: ");
        }
        else if ((a % 2 !== 0)){
            impares.push(a);
            a = prompt ("Ingrese algo: ");
        }
    }
    else{
        noNumericos.push(a);
        a = prompt ("Ingrese algo: ");
    }
}
document.write(pares);
document.write("  ");
document.write(impares);
document.write("  ");
document.write(noNumericos);