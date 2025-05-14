console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tiene hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

saludar("Jen");

function saludar (nombre){
  console.log("Qué te gustaria de regalo de cumpleaños? " + nombre);
}




/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    const nombreVariable = function nombreFuncion (parámetros){
        instrucciones;
    };
*/
/* darRegalo("Jen","snickers") */

const darRegalo = function (nombre, regalo){
  console.log(`Felicidades ${nombre}, te traje ${regalo}`);
};

darRegalo("Jen","Tristeza");

/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/
sumaDos(5,7);
function sumaDos(num1, num2){
  return console.log(`La suma de ${num1} + ${num2} es = ${num1+num2}`);
}

const restaDos = function (num1, num2){
  return console.log(`La resta de ${num1} - ${num2} es = ${num1-num2}`);
}

restaDos(7,5);

/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

/* Las funciones anonimas se pueden autoinvocar con (función completa)(); */
(function(dato){
  console.log("Configuración inicial de la aplicación ");
  console.log(`valor de dato autinvocado es ${dato}`);
})(18);



/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return
 - Sí y solo sí solo tienes un parámetro de entrada puedes omitir los parentesís
sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

// Realizar una función fecha que calcule el área de un triángulo
// la función debe retonrar el resultado.
// Área = (base * altura) / 2;

/* Función declarada */
console.log(`El area del triangulo declarada es ${areaTrianguloDeclarada(5,3)}`);
function areaTrianguloDeclarada (base, altura){
  return ((base * altura)/2);
};

/* Función expresada */
const areaTrianguloExpresada = function (base, altura){
  return ((base * altura)/2);
}
console.log(`El area del triangulo expresada es ${areaTrianguloExpresada(5,3)}`)

/* Función flecha */
const areaTrianguloFlecha = (base, altura) => (base * altura)/2;
console.log(`El area del triangulo flecha es ${areaTrianguloFlecha(5,3)}`);

// ¿Qué sucede si uso console.log como retorno?
const imprimirArea = (base, altura) => console.log(areaTrianguloFlecha(base, altura));
imprimirArea(12, 20);

console.log(imprimirArea(12,20));

function imprimirEnConsole(mensaje){
  console.log(mensaje);
}
console.log(imprimirEnConsole("Hola mundo")); // undefined

// Realizar una función flecha que calcule el área de un círculo
// Área = pi * radio^2
// Usar una función flecha para imprimir el resultado 

const areaCirculoFlecha = radio =>  Math.PI * radio ** 2;
const imprimirAreaCirculoFlecha = radio => document.getElementById('area-circulo').innerText = areaCirculoFlecha(radio).toFixed(2) + " u²";
imprimirAreaCirculoFlecha(5);

/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/
const saludarPersona= ( nombre = "persona invitada" ) => console.log(`Hola ${nombre}, ya nos vamos a descansar.`)
saludarPersona(); // Pasas un argumento vació por lo tanto nombre va a ser indefinido al pasar unargumento vacio o pasa con el parámetro por defecto que es igalado en la declaración del parametro
saludarPersona("Hambrientos de poder")

// ParseInt ("Valor", Base) Base predeterminada 10
console.log( parseInt ("5"));
console.log( parseInt ("5"));
console.log( parseInt ("5"));
console.log( parseInt ("1000" , 2)); // 8 (base 10) 1000 (base 2)
console.log( parseInt ("D2042D")); // NaN (base 10)
console.log( parseInt ("D2042D", 16)); // 13,763,629


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola Ch54");
                                            // 18("Hola Ch54");
                                            // "patito"("Hola Ch54");
                                            // console.log("Hola Ch54");
                                            // undefined("Hola Ch54");
 // imprimirMensaje( 18 ); // fncCallBack is not a function
 // imprimirMensaje( "Patito" ); // fncCallBack is not a function
 imprimirMensaje( console.log ); // "Hola Ch54"
 // imprimirMensaje( console.log("Luis") ); //  fncCallBack is not a function
 // imprimirMensaje( undefined ); //  fncCallBack is not a function

 const enviarAParrafo = mensaje => {
  const saluda = "Hola, buen día";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saluda} ${mensaje}`
 };

 imprimirMensaje(enviarAParrafo);

 // usando la función imrpimirMensaje, enviar un callback para que 
 // imprima con alert

/*  
 const enviarAlerta = mensaje => alert(mensaje);
 imprimirMensaje(enviarAlerta);
*/

 // imprimirMensaje(alert);

// =========================================================
/* 
  Realizar una función que sume dos números y que imprima
  el resultado.
  - inicialmente se imprimirá en la consola
  - es posible que se  te pida imprimir en el dom
  - es posible que se te pida imprimir en un alert
*/

const sumarDosNumeros = (a,b ) => a + b;

const sumarEImprimir = (a, b, imprimir = console.log) => {
  const resultado = sumarDosNumeros(a, b);
  const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
  imprimir (mensaje);
}

const ImprimirEnParagraph = mensaje => document.getElementById('resultado-sumatoria').innerText = mensaje;
const ImprimirEnH2 = mensaje => document.getElementById('resultado-sumatoriaH2').innerText = mensaje;
const imprimirPorID = (id, mensaje) => document.getElementById(`${id}`).innerText = mensaje
const imprimirEnDomParagraph = (mensaje) =>{
  const refParagraph = mensaje =>{
    document.getElementById(resultado-sumatoria);
    refParagraph.innerText = mensaje;}
}

sumarEImprimir(10 , 14,);
sumarEImprimir(10 , 14, console.log);
sumarEImprimir(10 , 14, ImprimirEnParagraph);
sumarEImprimir(10 , 14, ImprimirEnH2);
//sumarEImprimir(10, 14, alert);


// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); // factorial = factorial * (numero - i);
      console.log(`i: ${i}, factorial For: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de en For 5 es: ${factorialConCicloFor(5)}`); // 120

// calculando el factorial con recursividad
 
function factorialConRecursividad ( numero ){
  if( numero <= 0) return 1;
  const result = factorialConRecursividad( numero - 1) * numero;
  console.log(`El factorial de ${numero} es ${result}`);
  return result;
}
factorialConRecursividad (5);

/*
 Generar una función recursiva que muestre en consola un saludo
 donde se indique el número saludo deseado.
  ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/

function saludoConRecursividad (numero) {
  if (numero <= 1) return (console.log(`Saludo ${numero}`));
  const result = saludoConRecursividad (numero - 1);
  console.log(`Saludo ${numero}`);
  return result; 
}

saludoConRecursividad(10);
