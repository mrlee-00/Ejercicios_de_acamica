var a = prompt( "Ingrese el nombre de una figura");
if (a == "cuadrado"){
    var lado = prompt ("Ingrese el lado");
    var resultado = lado * 4;
    document.write("El resultado es: ", resultado);
}
else if (a == "rectangulo"){
    var lado = prompt("Ingrese el primer lado");
    var lado2 = prompt ("Ingrese el lado2 ");
    var resultado = lado * lado2;
    document.write("El resultado es: ", resultado);
}
else if (a == "cubo"){
    var lado = prompt("Ingrese el lado")
    document.write("El resultado es: ", lado*6);
}
else if (a == "caja"){
    var ancho = prompt("Ingrese el ancho");
    var largo = prompt ("Ingrese el largo");
    var alto = prompt ("Ingrese el alto");
    var resultado = (2 * ancho) + (2 * largo) + (2 * alto);
    document.write("El resultado es: ", resultado);
}
else{
    document.write("INGRESE UNA FORMA CORRECTA!!!!")
}