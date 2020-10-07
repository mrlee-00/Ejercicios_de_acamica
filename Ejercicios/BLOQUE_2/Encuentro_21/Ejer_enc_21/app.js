var promedio = 0;
for (var i = 0; i < 5; i++) {
    var num = prompt ("Ingrese un numero: ");
    num = parseInt(num);
    promedio = promedio + num;
}
alert(promedio / 5);