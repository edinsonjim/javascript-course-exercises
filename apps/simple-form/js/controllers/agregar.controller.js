function agregarController() {
  // Operaciones en el evento 'click' del boton.

  // Leemos la informacion ingresado en los inputs.
  const nombreRef = document.getElementById("txtNombre");
  const apellidosRef = document.getElementById("txtApellidos");
  const edadRef = document.getElementById("txtEdad");

  // Obtenemos el valor ingresado en la caja de texto(input).
  const nombre = nombreRef.value;
  const apellidos = apellidosRef.value;
  const edad = edadRef.value;

  try {
    const personaRegistrada = new Persona(nombre, apellidos, edad);

    const personasRegistradasUlRef = document.getElementById('personasRegistradasUL');

    // creamos el elemento <li> con la info de la persona.
    const liContentPersona = getLiHtml(personaRegistrada.fullInfo);

    // agregagos el contenido html al contenedor
    personasRegistradasUlRef.innerHTML += liContentPersona;
    
    // limpiamos los inputs
    nombreRef.value = '';
    apellidosRef.value = '';
    edadRef.value = '';

    // Limpiamos el contenedor de errores
    renderErrorHtml('');
  } catch (error) {
    // Mostramos el mensaje del error en el html
    renderErrorHtml(error.message);
  }
}