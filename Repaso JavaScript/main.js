//Declaracion de variables
var nombre = "Enmanuel Cruz";
var altura = 190;

var concatenacion = nombre + " " + altura;

/*
var datos = document.getElementById("datos");
datos.innerHTML = concatenacion;  

//otra forma de mostrar datos
var datos = document.getElementById("datos");
datos.innerHTML = `
  <h1>Hola que tal</h1>
  <h3>Mi nombre es: ${nombre}</h3>
  <h3>Mido: ${altura} cm</h3>`;

//Condicionales
if(altura >= 190){
  datos.innerHTML += `<h1>Eres una persona alta</h1>`;
} else {
  datos.innerHTML += `<h1>Eres una persona baja</h1>`;
}

//Bucles
for(var i = 2016; i <= 2020; i++){
  datos.innerHTML += `<h2>Estamos en el año: ${i}</h2>`;
}*/

//Funciones
function MuestraMiNombre(nombre, altura){
  var misDatos = `  
    <h1>Mi nombre es: ${nombre}</h1>
    <h2>Mido: ${altura} cm</h2>
  `;
  return misDatos;
}   

function imprimir(){
  var datos = document.getElementById("datos");
  datos.innerHTML = MuestraMiNombre("Enmanuel Cruz", 190);
}

imprimir();

//arrays
var nombres = ["Enmanuel", "Ana", "Pepe", "Luis"];
document.write("<h1>Listado de nombres</h1>");
nombres.forEach((nombre) => {
  document.write(nombre + "<br/>");
}); 


//objeto Json
var coche = {
  modelo: "Mercedes Clase A",
  maxima: 500,  
  antiguedad: 2020,
  mostrarDatos(){
    console.log(this.modelo, this.maxima, this.antiguedad);
  },
  propiedad: "Color",
};

document.write("<h1>"+coche.modelo+"</h1>");
coche.mostrarDatos();
console.log(coche);