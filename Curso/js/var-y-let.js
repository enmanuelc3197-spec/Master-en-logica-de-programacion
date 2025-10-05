//Prueba con var
var numero = 40;
console.log(numero); // 40  

if(true){
  var numero = 50;
  console.log(numero); // 50
}
console.log(numero); // 50

//Prueba con let
let texto = "Curso de JavaScript";
console.log(texto); // Curso de JavaScript  
if(true){
  let texto = "Curso de ReactJS";
  console.log(texto); // Curso de ReactJS
}   
console.log(texto); // Curso de JavaScript
