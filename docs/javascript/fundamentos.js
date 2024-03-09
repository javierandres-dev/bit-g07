// Este es un comentario de JavaScript de una sola línea
/*
Este es un
comentario de
varia líneas
*/

/* Métodos de interacción */
// Entrada
/* let entrada = prompt();
entrada = prompt("Instrucciones");
console.log(entrada); */
// Salida
/* console.log("mensaje en consola")
document.write("mensaje en interfaz de usuario")
alert("mensaje en ventana emergente") */

/* VARIABLES */
// Declaración
/* saludo1 = "hola1"
var saludo2 = "hola2"
let saludo3 = "hola3"
const saludo4 = "hola4"
console.log(saludo1)
console.log(saludo2)
console.log(saludo3)
console.log(saludo4) */

// Ámbito de las variables
/* let variableGlobal = "soy variable global"
console.log(variableGlobal)
{
  let variableLocal = "soy variable local"
  console.log(variableLocal)
} */

/* let cambiaValor = 1;
const noCambiaValor = 2;
cambiaValor = "1";
noCambiaValor = 2;
console.log(cambiaValor)
console.log(noCambiaValor) */

/* Modo estricto */
'use strict';
/* saludo = "hola";
console.log(saludo); */

/* Tipos de dato primitivos */
// string
let miVariable = '';
miVariable = "este es un texto de 'ejemplo 1'";
miVariable = 'este es un texto de "ejemplo 2"';
miVariable = `este es un 'texto' de "ejemplo" 3`;
// number
miVariable = 10;
miVariable = 9.5;
miVariable = 0xff;
miVariable = 123e5;
// boolean
miVariable = true;
miVariable = false;
// undefined
let miVariableSinAsignacion;
//console.log(miVariableSinAsignacion);
// null
miVariable = null;
// console.log(miVariable);

/* Operador typeof */
let entradaUsuario = '123';
/* console.log(entradaUsuario);
console.log(typeof entradaUsuario); */
entradaUsuario = 123;
/* console.log(entradaUsuario);
console.log(typeof entradaUsuario); */

/* Conversión de tipos */
/* let numero1 = '1';
let numero2 = '2';
let numero3 = '3';
let resultado = numero1 + numero2 + numero3;
console.log(resultado);
numero1 = Number(numero1);
numero2 = parseInt(numero2);
numero3 = +numero3;
resultado = numero1 + numero2 + numero3;
console.log(resultado); */

/* let numeroDecimal1 = '1.5';
let numeroDecimal2 = '2.5';
let numeroDecimal3 = '3.5';
resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado);
numeroDecimal1 = parseFloat(numeroDecimal1);
numeroDecimal2 = parseFloat(numeroDecimal2);
numeroDecimal3 = Number(numeroDecimal3);
resultado = numeroDecimal1 + numeroDecimal2 + numeroDecimal3;
console.log(resultado); */

/* let telefono = 555;
let codigoPais = 57;
console.log(telefono);
console.log(typeof telefono);
console.log(codigoPais);
console.log(typeof codigoPais);
telefono = String(telefono);
console.log(telefono);
console.log(typeof telefono);
codigoPais = codigoPais.toString();
console.log(codigoPais);
console.log(typeof codigoPais);
console.log('Número completo:', codigoPais + telefono); */

/* Expresiones booleanas */
// Truthy o verdaderos
/* console.log(true)
console.log(1)
console.log(-1)
console.log("a") */
// Falsy o falsos
/* console.log(false)
console.log(0)
console.log("")
console.log(undefined)
console.log(null) */

/* Control de flujo */
// Condicionales
/* if (true) {
  console.log("se cumple la condición 1")
}

if (false) {
  console.log("se cumple la condición 2")
} else {
console.log("no se cumple la condición 2")
}

if (false) {
  console.log("se cumple la condición 3 a")
} else if (true) {
  console.log("se cumple la condición 3 b")
} else {
console.log("no se cumple la condición 3")
}

if (false) {
  console.log("se cumple la condición 4")
}
if (true) {
  console.log("se cumple la condición 5")
} */

/* const perfil = 'profesor';
switch (perfil) {
  case 'estudiante':
    console.log('eres un estudiante');
    break;
  case 'profesor':
    console.log('eres un profesor');
    break;
  default:
    console.log('perfil no permitido');
    break;
} */

/* Operadores */
// Concatenación
//console.log('Pepita' + ' ' + 'Pérez');
// Aritméticos
/* console.log(8 + 4);
console.log(8 - 4);
console.log(8 * 4);
console.log(8 / 4);
console.log(8 % 4);
console.log(10 % 3);
console.log(2 ** 3); */

/* miVariable = 3;
console.log(miVariable); */
// Incremento
/* miVariable++;
console.log(miVariable); */
// Decremento
/* miVariable--;
console.log(miVariable); */

// Asignación =
/* let numero1 = 8;
let numero2 = 4;
let resultado = numero1 + numero2;
resultado += 3;
resultado -= 5;
resultado *= 2;
resultado /= 2;
resultado %= 3;
resultado **= 2;
console.log(resultado); */

// Comparación
/* console.log(8 == 4);
console.log(8 === 4);
console.log(8 == 8);
console.log(8 === 8);
console.log(8 == '8');
console.log(8 === '8');
console.log('8' === '8');
console.log('pepita' === 'Pepita');
console.log(8 != 4);
console.log(8 != '8');
console.log(8 !== '8');
console.log(8 > 4);
console.log(8 < 4);
console.log(8 >= 4);
console.log(8 <= 4); */

// Lógicos
/* console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log(true || true);
console.log(true || false);
console.log(false || false);
console.log(!true);
console.log(!false); */
