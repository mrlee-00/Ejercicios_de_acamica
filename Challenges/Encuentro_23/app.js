class Aviones {
    constructor (pes, asient,puert, velocida,tip){
        this.peso = pes;
        this.asientos = asient;
        this.puertas = puert;
        this.velocidad = velocida;
        this.tipo = tip
    }
    tipoDeAvion(){
        return "El avion es un: ", this.tipo;
    }
    setPeso (p){
        if (p >= 5000){
            this.peso = p;
        }
        else{
            alert("El peso ingresado es menor al valido")
        }
    }
    get getPeso() {
        return this.peso;
    }
}

var avionBlanco = new Aviones (60000, 50, 4, 500, "Mediano");
document.write("Avion Numero 1: "+ "<br>")
document.write("Asientos: ", avionBlanco.asientos +"<br>");
document.write("Puertas: ", avionBlanco.puertas +"<br>");
document.write("Velocidad: ", avionBlanco.velocidad +"<br>");
document.write("Tipo: ", avionBlanco.tipo +"<br>");
avionBlanco.setPeso(prompt("Ingrese el peso a cambiar: "));
document.write("Peso Nuevo: ", avionBlanco.getPeso);