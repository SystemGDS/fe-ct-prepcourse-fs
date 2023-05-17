/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
  // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
  // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
  // Estos elementos debe ser cada par clave:valor del objeto recibido.
  // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
  // Tu código:

  let array = [];
  let clave = Object.keys(objeto);

  for (let i = 0; i < clave.length; i++) {
    let letras = clave[i];
    array.push([letras, objeto[letras]]);
  }

  return array;
}

console.log(deObjetoAarray({ D: 1, B: 2, C: 3 }));
function numberOfCharacters(string) {
  // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
  // letras del string, y su valor es la cantidad de veces que se repite en el string.
  // Las letras deben estar en orden alfabético.
  // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
  // Tu código:

  let ordenada = string
    .split("")
    .sort(function (a, b) {
      return a.charCodeAt(0) - b.charCodeAt(0);
    })
    .join("");

  let object = {};
  for (let i = 0; i < ordenada.length; i++) {
    if (Object.keys(object).includes(ordenada[i])) {
      object[ordenada[i]]++;
    } else {
      object[ordenada[i]] = 1;
    }
  }
  return object;
}

console.log(numberOfCharacters("adsjffskdjflasjdfalksjdfsajdñkl"));

function capToFront(string) {
  // Recibes un string con algunas letras en mayúscula y otras en minúscula.
  // Debes enviar todas las letras en mayúscula al comienzo del string.
  // Retornar el string.
  // [EJEMPLO]: soyHENRY ---> HENRYsoy
  // Tu código:
  let results = "";
  let mayus = "";
  let minus = "";

  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i].toUpperCase()) {
      mayus += string[i];
    } else {
      minus += string[i];
    }
  }
  return (results = mayus + minus);
}

function asAmirror(frase) {
  // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
  // La diferencia es que cada palabra estará escrita al inverso.
  // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
  // Tu código:
  let arrayfrase = frase.split(" ");
  let fraseEspejo = [];

  for (let i = 0; i < arrayfrase.length; i++) {
    let espejo = arrayfrase[i].split("").reverse().join("");
    fraseEspejo.push(espejo);
  }
  return fraseEspejo.join(" ");
}
console.log(asAmirror("The Henry Challenge is close!"));

function capicua(numero) {
  // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
  // Caso contrario: "No es capicua".
  // Tu código:
  //213           ["2","1","3"]     ["3","1","2"]    //"321"
  let num = numero.toString().split("").reverse().join("");
  if (num == numero) return "Es capicua";
  return "No es capicua";
}
console.log(capicua(3113));
console.log(capicua(213));
function deleteAbc(string) {
  // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
  // Retorna el string sin estas letras.
  // Tu código:
  return string.replace(/[abc]/g, "");
}
console.log(deleteAbc("Hola mundo abecedario"));
function sortArray(arrayOfStrings) {
  // Recibes un arreglo de strings.
  // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
  // de la longitud de cada string.
  // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
  // Tu código:
  return arrayOfStrings.sort((a, b) => a.length - b.length);
}
console.log(sortArray(["You", "are", "beautiful", "looking"]));
function buscoInterseccion(array1, array2) {
  // Recibes dos arreglos de números.
  // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
  // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
  // Si no tienen elementos en común, retornar un arreglo vacío.
  // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
  // Tu código:
  let comunes = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      comunes.push(array1[i]);
    }
  }
  return comunes;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  deObjetoAarray,
  numberOfCharacters,
  capToFront,
  asAmirror,
  capicua,
  deleteAbc,
  sortArray,
  buscoInterseccion,
};
