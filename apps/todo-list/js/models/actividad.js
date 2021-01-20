class Actividad {
  #id = Math.random();

  constructor(titulo) {
    this.titulo = titulo;
  }

  get Id() {
    return this.#id;
  }
}
