/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
  // Esta función recibe un nombre (string).
  // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
  // [Ejemplo]: "mario" ----> "Mario".
  // Tu código:
  var res = "";
  var separar = nombre.split("");
  console.log(separar);
  var mayuscula = separar[0].toUpperCase();
  console.log(mayuscula);
  for (let i = 1; i < separar.length; i++) {
    res = res + separar[i];
  }
  return mayuscula + res;

  //   return nombre.charAt(0).toUpperCase() + nombre.slice(1);
}
console.log(mayuscula("jorge"));
function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  return cb();
}

function operacionMatematica(num1, num2, cb) {
  // En este ejercicio recibirás dos números y un callback.
  // El callback realiza una operación matemática, por lo que necesita de los dos números.
  // Retorna el resultado del callback pasándole como parámetros los números.
  // Tu código:
  return cb(num1, num2);
}

function sumarArray(arrayOfNumbers, cb) {
  // Recibes un arreglo de números y un callback.
  // Suma todos los números del arreglo.
  // Este resultado debes pasárselo como argumento al callback recibido.
  // [NOTA]: no debes reotrnar nada.
  // Tu código:
  let suma = arrayOfNumbers.reduce((acc, vActual) => acc + vActual);
  cb(suma);
}

function forEach(array, cb) {
  // Recibes un arreglo y un callback.
  // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
  // Debes pasarle el elemento como argumento al callback.
  // Tu código:
  array.forEach((element) => {
    cb(element);
  });
}

function map(array, cb) {
  // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  //return array.map((e) => cb(e));
  newArray = array.map(function (e) {
    return cb(e);
  });
  return newArray;
}

function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  //  return arrayOfStrings.filter((e) => e.startsWith("a"));
  newArray = arrayOfStrings.filter(function (e) {
    return cb(e.startsWith("a"));
  });
  return newArray;
}

//return array.map((element) => cb(element));
//return arrayOfStrings.filter((element) => element.startsWith("a"));
/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  mayuscula,
  invocarCallback,
  operacionMatematica,
  sumarArray,
  forEach,
  map,
  filter,
};
