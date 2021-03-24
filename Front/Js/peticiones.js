var url = "http://localhost:8080/nonapp/services/";
var adultos = "";

/**
 * Función de llamado ajax para registrar cuidador
 * @param {JSON} datos Nombre, email y password
 */
function registroCuidador(datos) {
  $.ajax({
    data: datos,
    url: url + "Registro/Cuidador",
    method: 'POST',
    crossOrigin: null,
    mode: "cors",
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    success: function (response) {
      console.log(response); // Imprimir respuesta del archivo
    },
    error: function (error) {
      console.log(error); // Imprimir respuesta de error
    },
    complete: function (e) {
      $("#registroCuidador").hide();
      $("#login").show();
    }
  });
}

/**
 * Función de llamado ajax para validar el login
 * @param {JSON} datos Email y password 
 */
function validarLogin(datos) {
  $.ajax({
    data: datos,
    url: url + "Registro/ValidarLogin", // Path de la petición
    method: 'POST',
    crossOrigin: null,
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    success: function (response) {
      console.log(response); // Imprimir respuesta del archivo
      adultos = response;
    },
    error: function (error) {
      console.log(error); // Imprimir respuesta de error
    },
    complete: function (e) {
      $("#login").hide();
      $("#menu").show();
      $("#selectPersonaMayor").show();
    }
  });
}

