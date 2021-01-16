class ValidatorResponse {
  constructor(isValid, message) {
    this.isValid = isValid;
    this.message = message;
  }
}

class TareaHelper {

  // metodo estatico permite acceder al metodo sin instanciar la clase.
  static isTituloValido(titulo) {
    
    if(!titulo) {
      return new ValidatorResponse(false, "Ingresa un titulo valido");
    }

    if (titulo.length < 3) {
      return new ValidatorResponse(false, "Ingresa un titulo con 3 caracteres minimo");
    }

    return new ValidatorResponse(true, null);
  }
}