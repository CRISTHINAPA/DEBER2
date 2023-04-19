function EnviarDatos() {
    var apellido = document.getElementById("apellidos").value;
    var nombre = document.getElementById("nombres").value;
    var cuidad = document.getElementById("residencia").value;
    var celular = document.getElementById("telefono").value;
    var email = document.getElementById("correo").value;
    var entrar = false;
    if (apellido == "") {
      alert("El Apellido es obligatorio");
      entrar = true;
      document.getElementById("apellidos").focus();
    }
    if (nombre == "") {
      alert("El nombre es obligatorio");
      entrar = true;
      document.getElementById("nombres").focus();
    }
    if (cuidad == "") {
      alert("La residencia es obligatoria");
      entrar = true;
      document.getElementById("residencia").focus();
    }
    if (celular.length < 10 || isNaN(celular)) {
        alert("Error al digitar su numero telefonico");
        entrar = true;
        document.getElementById("telefono").focus();
      }
    if (email == "") {
        alert("Digite una Direccion de Correo");
        entrar = true;
        document.getElementById("correo").focus();
    }
    if (!entrar) {
      alert("Datos Enviados!!");
  }
}