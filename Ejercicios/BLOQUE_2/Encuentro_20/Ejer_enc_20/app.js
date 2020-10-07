var ingreso = prompt("Que motor tiene usted?");
var capacidad = 50;
if (isNaN(ingreso)){
    alert("Vuelva a ingresar un numero!");
}
else{
    var distancia = prompt("Cuanto va a viajar usted?");
    if (isNaN(distancia)){
        alert("Ingrese una distancia correcta!");
    } 
    else{
        if (ingreso == 1.6){
            var rendimiento = 15 * 50;
            if (distancia > rendimiento){
                alert( "Necesitara unos: " + ((distancia / rendimiento) - 1) + "tanques extra para hacer el recorrido!");                }
                else {
                    alert ("Llegara Tranquilo!")
                }
        }
        if (ingreso == 1.8){
            var rendimiento = 12 * 50;
            if (distancia > rendimiento){
                alert( "Necesitara unos: " + ((distancia / rendimiento) - 1) + "tanques extra para hacer el recorrido!");
                }
                else {
                    alert ("Llegara Tranquilo!")
                }
        }
        if (ingreso == 2.0){
            var rendimiento = 10 * 50;
            if (distancia > rendimiento){
                alert( "Necesitara unos: " + ((distancia / rendimiento) - 1) + " tanques extra para hacer el recorrido!");
                }
                else {
                    alert ("Llegara Tranquilo!")
                }
        }
    }
}

