var a = prompt("Ingrese un numero entero: ");
if (parseInt(a)){
    if (a % 3 == 0){
        document.write("ES MULTIPLO");
    }
    else {
        document.write("NO ES MULTIPLO");
    }
}
else{
    document.write("INGRESE UN NUMERO!!!")
}
