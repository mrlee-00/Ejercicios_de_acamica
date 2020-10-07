var horas = prompt ("Ingrese la hora: ");
var turno = " AM";
if (horas >= 0 && horas < 24){
    if (horas >= 13 && horas < 24){
        turno = " PM";
        horas = horas % 12;
    }
    var minutos = prompt("Ingrese los minutos: ");
    if (minutos >= 0 && minutos < 60){
        var horario = horas + ":" + minutos + turno;
        document.write("El Horario Ingresado ahora es: ", horario);
    }
    else{
        document.write("INGRESE UNOS MINUTOS CORRECTOS!!!")
    }
}
else{
    document.write("INGRESE UNA HORA CORRECTA!!!")
}