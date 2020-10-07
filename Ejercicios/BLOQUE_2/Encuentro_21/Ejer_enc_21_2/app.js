var mayores = 0;
var menores = 0;
var a = prompt ("Ingrese edades, ingrese un 0 para finalizar: ");
while (a != 0){
    if (a >= 18){
        mayores = mayores + 1;
        a = prompt ("Ingrese edades, ingrese un 0 para finalizar: ");
    }
    else if (a < 18){
        menores = menores - 1;
        a = prompt ("Ingrese edades, ingrese un 0 para finalizar: ");
    }
}
alert("Hay: ", mayores, " ", "Personas mayores");