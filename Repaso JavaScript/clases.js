class Coche{
    // Atributos o propiedades
    constructor(marca, modelo, velocidad){
        this.marca = marca;
        this.modelo = modelo;
        this.velocidad = velocidad;
    } 
    // Metodos
    acelerar(){
        this.velocidad += 1;
    }           
    frenar(){
        this.velocidad -= 1;
    }

}   

// Herencia
class Autobus extends Coche{
    constructor(marca, modelo, velocidad){
        super(marca, modelo, velocidad);
        this.altura = 5;
    }
    mostrarAltura(){
        return "La altura del autobus es: " + this.altura; 
    }
}

// Instanciar la clase Autobus
var autobus1 = new Autobus("Mercedes", "Sprinter", 80);
console.log(autobus1.mostrarAltura());

// Instanciar la clase (crear un objeto)
var coche = new Coche("Toyota", "Corolla", 100);
var coche2 = new Coche("Seat", "Ibiza", 120);
var coche3 = new Coche("Citroen", "Saxo", 90);

// Usar el objeto
document.write("La velocidad del coche es: " + coche.velocidad + "<br>");

// Acelerar 3 veces
coche.acelerar();
coche.acelerar();
coche.acelerar();

// Usar el objeto
document.write("La velocidad del coche es: " + coche.velocidad + "<br>");