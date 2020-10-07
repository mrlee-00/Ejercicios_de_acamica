var distancia = prompt("Que distancia quiere recorrer?");

if (isNaN(distancia)){
    alert("ERROR: No ingreso un numero!")
}
else{
    var rendimiento = 15;
    var capacidad = 45;

    if (distancia > rendimiento * capacidad){
    alert ("Necesitara reabastecerse...");
    }
    else {
        alert ("Llegara Tranquilo!")
    }
}
