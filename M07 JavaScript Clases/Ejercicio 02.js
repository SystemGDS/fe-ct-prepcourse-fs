/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

class Persona {
  // Crea el constructor de la clase "Persona".
  // Debe tener las propiedades: "nombre", "apellido", "edad" y "domicilio".
  // Debe tener un método llamado "detalle" que nos devuelva un objeto con las propiedades de la persona y
  // sus valores.

  constructor(
    nombre,
    apellido,
    edad,
    domicilio /*Escribir los argumentos que recibe el constructor*/
  ) {
    // Crea el constructor:
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.domicilio = domicilio;
  }
  detalle() {
    return {
      nombre: this.nombre,
      apellido: this.apellido,
      edad: this.edad,
      domicilio: this.domicilio,
    };
  }
}

function crearInstanciaPersona(nombre, apellido, edad, domicilio) {
  // En este ejercicio debes crear una instancia de la clase construida en el ejercicio anterior.
  // Recibirás las propiedades por parámetro.
  // Retornar la instancia creada.
  // Tu código:
  const nuevaPersona = new Persona(nombre, apellido, edad, domicilio);
  return nuevaPersona;
}
// const nuevaPersona = new Persona(nombre, apellido, edad, domicilio);
//   return nuevaPersona;
function agregarMetodo() {
  // La función agrega un método "datos" a la clase "Persona".
  // Este método toma la propiedad "nombre" y "edad", y devuelve el string:
  // Ejemplo: "Juan, 22 años".
  // Tu código:
  Persona.prototype.datos = () => {
    return `${this.nombre}, ${this.edad} años`;
  };
  //Esta implementación no funcionará correctamente. La razón es que en una arrow function,
  //el valor de this es tomado del contexto en el que la función es definida, y no del contexto
  //en el que es ejecutada. En este caso, el valor de this será el objeto global en lugar
  //de la instancia de la clase Persona, lo que causará que this.nombre y this.edad sean undefined.

  // Para solucionar esto, es mejor utilizar una función regular para el método datos,
  //que se enlace al objeto de la instancia de la clase Persona a través del valor de this.
  //Así que puedes escribirlo así:

  Persona.prototype.datos = function () {
    return `${this.nombre}, ${this.edad} años`;
  };
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
  crearInstanciaPersona,
  agregarMetodo,
  Persona,
};
