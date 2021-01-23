function anularController() {
  // Limpiar los campos de textos
  const nombreRef = document.getElementById("txtNombre");
  const apellidosRef = document.getElementById("txtApellidos");
  const edadRef = document.getElementById("txtEdad");

  nombreRef.value = '';
  apellidosRef.value = '';
  edadRef.value = '';

  renderErrorHtml('');
}