class Persona {
  constructor(nombre, apellidos, edad) {
    this.id = new Date().getTime(); // obtiene la fecha pero en numerico
    this.#validarNombre(nombre);
    this.#validarApellidos(apellidos);
    this.#validarEdad(edad);

    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = parseInt(edad);
  }

  #validarEdad(edad) {
    if (!edad) {
      // return genera un error en toda la app.
      throw new Error("Edad no valida");
    }

    // isNaN -> is Non a Number -> Es no un numero -> no es numero?
    if (isNaN(edad)) {
      throw new Error("Edad deberia ser un numero");
    }

    if (edad <= 0) {
      throw new Error("Edad deberia ser mayor a 0");
    }
  }

  #validarApellidos(apellidos) {
    if (!apellidos) {
      throw new Error("Apellidos no valido");
    }
  }

  #validarNombre(nombre) {
    if (!nombre) {
      throw new Error("Nombre no valido");
    }
  }

  get fullName() {
    return `${this.nombre} ${this.apellidos}`;
  }

  get fullInfo() {
    return `${this.nombre} ${this.apellidos} (${this.edad})`;
  }
}
