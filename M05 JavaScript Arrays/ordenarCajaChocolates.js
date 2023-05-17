function OrdenarCajaDeChocolates1(arr) {
    const N = arr[0]; // cantidad de espacios en la caja de chocolates
    let count = 0; // contador para el número de maneras en que 2 chocolates pueden guardarse uno al lado del otro

    // comprobar si se pueden colocar 2 chocolates uno al lado del otro en cada par de espacios adyacentes
    for (let i = 1; i < N ; i++) {
      if ((i % 2 == 1 && arr[i] != arr[i+1]) || (i % 2 == 0 && arr[i] != arr[i-1])) {
        count++;
      }
    }

    return count;
  }
console.log(OrdenarCajaDeChocolates1([6,4]))

function OrdenarCajaDeChocolates(arr) {
  // Obtenemos la cantidad de espacios en la caja
  const N = arr[0];
  // Obtenemos los espacios ocupados por chocolates
  const spaces = arr.slice(1);
  // Inicializamos el contador de combinaciones
  let count = 0;
  // Recorremos los espacios de la caja en pares
  for (let i = 0; i < N; i += 2) {
    // Verificamos si los dos espacios están libres
    if (
      !spaces.includes(i) &&
      !spaces.includes(i + 1) //&&
      //   !spaces.includes(i + 2)
    ) {
      // Si están libres, sumamos una combinación
      count++;
    }
  }
  // Recorremos los espacios de la caja en grupos de 2 filas
  for (let i = 0; i < N ; i += 2) {
    // Verificamos si los cuatro espacios están libres
    if (
      !spaces.includes(i) &&
      !spaces.includes(i + 1) &&
      !spaces.includes(i + 2)
    ) {
      // Si están libres, sumamos dos combinaciones (horizontal y vertical)
      count += 2;
    }
  }
  // Devolvemos el contador de combinaciones
  return count;
}

console.log(OrdenarCajaDeChocolates([12, 1, 5, 8, 12]));
