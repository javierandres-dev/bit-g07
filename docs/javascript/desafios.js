'use strict';
// Hacer un programa que envíe un mensaje a la consola y a la interfaz de usuario.
/* console.log('Hola');
document.write('Hola'); */

// Hacer un programa que reciba un nombre por parte del usuario, si existe nombre saludar por nombre de otra manera saludar 'Hola'.
/* const nombreUsuario = prompt('Ingrese su nombre');
if (nombreUsuario) {
  document.write('Hola, ' + nombreUsuario + '!');
} else {
  document.write('Hola');
} */

// Hacer un programa que reciba aparte nombre y apellido y muestre el nombre completo.
/* const nombre = prompt('Ingrese su nombre');
const apellido = prompt('Ingrese su apellido');
console.log(nombre + ' ' + apellido);
document.write(nombre + ' ' + apellido);
// Interpolación de variables
document.write(`Su nombre completo es: ${nombre} ${apellido}`); */

// Hacer un programa que reciba 2 números del usuario y los sume.
/* const numero1 = Number(prompt('Ingrese el primer número'));
const numero2 = parseInt(prompt('Ingrese el segundo número'));
console.log(numero1 + numero2);
document.write(numero1 + numero2);
document.write(`La suma de ${numero1} y ${numero2} es ${numero1 + numero2}`); */

// Hacer un programa que reciba del usuario un número y muestre si el número ingresado es cero, de otra manera que muestre si es positivo o si es negativo.
let numero = Number(prompt('Ingrese un número'));
//console.log(isNaN(numero));
console.log(numero);
if (isNaN(numero)) {
  document.write('El valor ingresado no es un número');
} else {
  if (numero == 0) {
    document.write('El número ingresado es cero');
  } else if (numero > 0) {
    document.write('El número ingresado es positivo');
  } else {
    document.write('El número ingresado es negativo');
  }
}

// Hacer un programa que reciba del usuario dos números y muestre cual es el número mayor y cual es el número menor.
