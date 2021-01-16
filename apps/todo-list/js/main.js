const btnAgregarTarea = document.getElementById("btnAgregarTarea");

btnAgregarTarea.addEventListener("click", () => {
  // TODO: 
  // 1. leer el texto ingresado por el usuario
  // 2. Validar si el texto ingresado cumple reglas
  // 3. agregar a la lista de TODO's
  
  // accedemos al form.input del DOM(Document Object Model)
  const inputNombreTarea = document.getElementById("txtNombreTarea");

  // leemos el valor ingresado en el input html
  const nombreTariaTexto = inputNombreTarea.value;

  const validatorTitulo = TareaHelper.isTituloValido(nombreTariaTexto);
  if (!validatorTitulo.isValid) {

    // accedemos al div con id nombreTareaError
    const divNombreTareaError = document.getElementById("nombreTareaError");

    // Agregamos el texto del mensaje en el contenedor(div) con id 'nombreTareaError'
    divNombreTareaError.innerHTML = validatorTitulo.message;

  } else {
    // accedemos al div con id nombreTareaError
    const divNombreTareaError = document.getElementById("nombreTareaError");

    // Limpiamos el texto del error ingresando un texto en blanco en el contenedor(div) con id 'nombreTareaError'
    divNombreTareaError.innerHTML = '';
  }
});

