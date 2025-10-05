"use strict" // Modo estricto de JavaScript

//Prueba con constantes. Esta variable no puede cambiar su valor
const ip = "172.18.20.191";
console.log(ip); // 172.18.20.191

const web = "https://www.google.com";
console.log(web); // https://www.google.com

ip = "27837.20.191"; // Uncaught TypeError: Assignment to constant variable.
web = "https://www.facebook.com"; // Uncaught TypeError: Assignment to constant variable. 
console.log(ip, web); 

