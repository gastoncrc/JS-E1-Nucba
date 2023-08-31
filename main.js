// 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
// FORMA TRADICIONAL
function parImpar(num) {
  if (num % 2 === 0) {
    console.log(`El numero ${num} es par`);
  } else {
    console.log(`El numero ${num} es impar`);
  }
}
parImpar(6);

// FORMA FLECHA
const parImpar2 = (num) => {
  if (num % 2 === 0) console.log(`El numero ${num} es par`);
  else console.log(`El numero ${num} es impar`);
};
parImpar2(7);

// VER CON DIVISION /2

// 2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

const mayorMenor = (num1, num2) => {
  if (num1 > num2) console.log(`${num1} es mayor a ${num2}`);
  else if (num1 < num2) console.log(`${num2} es mayor a ${num1}`);
  else console.log(`Son iguales`);
};
mayorMenor(1, 1);

// 3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

const multiplo = (num) => {
  if (num % 5 === 0) {
    console.log(`El numero ${num} es multiplo de 5`);
  } else {
    console.log(`El numero ${num} no es multiplo de 5`);
  }
};
multiplo(49);

// 4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.
// FOR
const contadorFor = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
};
contadorFor(5);

// WHILE
const contadorWhile = (num) => {
  let i = 0;
  while (i <= num) {
    console.log(i);
    i++;
  }
};
contadorWhile(6);

// 5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

// OPCION A
const funcion5A = (palabra, numero) => {
  for (let i = 1; i <= numero; i++) {
    console.log(palabra);
  }
};
funcion5A("hola", 5);

// OPCION B
const funcion5 = (palabra, numero) => {
  let frase = ``;
  for (let i = 1; i <= numero; i++) {
    frase += palabra + " ";
  }
  console.log(frase);
};
funcion5("hola", 5);

// 6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

const funcion6 = (array) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};
funcion6(["rojo", "verde", "azul", "blanco", "celeste"]);

// 7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

const funcion7 = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== array[5]) {
      console.log(array[i]);
    }
  }
};
funcion7([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

// 8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

const funcion8 = (array, num) => {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * num);
  }
};
funcion8([1, 2, 3, 4, 5], 5);
