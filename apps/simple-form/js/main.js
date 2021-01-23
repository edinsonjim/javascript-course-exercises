// Referencia al boton "btnAgregar" en el HTML
const btnAgregarRef = document.getElementById("btnAgregar");
const btnAnularRef = document.getElementById("btnAnular");

btnAgregarRef.addEventListener('click', () => {
  // Operaciones en el evento 'click' del boton.
  console.log('Boton presionado');

  // Leemos la informacion ingresado en los inputs.
  const nombreRef = document.getElementById("txtNombre");
  const apellidosRef = document.getElementById("txtApellidos");
  const edadRef = document.getElementById("txtEdad");

  // Obtenemos el valor ingresado en la caja de texto(input).
  const nombre = nombreRef.value;
  const apellidos = apellidosRef.value;
  const edad = edadRef.value;
  
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
});


btnAnularRef.addEventListener('click', () => {
  // Limpiar los campos de textos
  const nombreRef = document.getElementById("txtNombre");
  const apellidosRef = document.getElementById("txtApellidos");
  const edadRef = document.getElementById("txtEdad");

  nombreRef.value = '';
  apellidosRef.value = '';
  edadRef.value = '';
})



function getLiHtml(contenido) {
  return `<li>${contenido}</li>`
}