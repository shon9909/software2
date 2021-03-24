$('document').ready(function () {
  $('.ui.dropdown').dropdown();
  $("#registroCuidador").hide();
  $("#menu").hide();
  $("#opcionesInicio").hide();  
  $("#selectPersonaMayor").hide(); 
  header("Access-Control-Allow-Origin: true");
});

$("#crearCuenta").on("click", function (event) {
  event.preventDefault();
  $("#login").hide();
  $("#registroCuidador").show();
});

$("#volverRegaInicio").click(function () {
  $("#registroCuidador").hide();
  $("#login").show();
});

$("#loginIngresar").click(function(){
  datos = {
    "email": $("#correoElectronico").val(),
    "password": $("#contrasenaLogin").val()
  }
  console.log(datos);
  //validarLogin(datos);
  $("#login").hide();
  $("#selectPersonaMayor").show();  
});

$("#reg").on("click", function () {
  datos = {
    "email": $("#nombreCuidador").val(),
    "nombre": $("#emailRegistro").val(),
    "password": $("#contrasena").val()
  }
  console.log(datos);
  registroCuidador(datos); // Ejecutar cuando se quiera enviar los datos
  $("#registroCuidador").hide();
  $("#login").show();
});

$("#aceptarAdulto").click(function(){
  $("#menu").show();
  $("#opcionesInicio").show();  
  $("#selectPersonaMayor").hide(); 
});



/*
function enviarDatos(datos, url) {
  $.ajax({
    data: datos,
    url: url,
    method: 'POST',
    crossOrigin: null,
    mode: "cors",
    success: function (response) {
      console.log(response); // Imprimir respuesta del archivo
    },
    error: function (error) {
      console.log(error); // Imprimir respuesta de error
    }

  });

  console.log(JSON.stringify({"email": correo, "nombre": nombre, "password": password}))
  console.log(nombre);
  console.log(correo);
  console.log(password);
  $.ajax({
    method: "POST",
    url: "http://localhost:8080/nonapp/services/Registro/Cuidador",
    data: JSON.stringify({"email": correo, "nombre": nombre, "password": password}),
    dataType: 'JSON',
    contentType: "JSON",
    success: function(rta){
     console.log(rta)
    }, 
       error: function(rta) {   
        console.log(rta) 
      }         
});
}
*/

/*
$('.ui.form')
  .form({
    fields: {
        correoElectronico: {
            identifier: 'correoElectronico',
            rules: [
              {
                type   : 'empty',
                prompt : 'Por favor ingrese su correo electrónico'
              }
            ]
          },
      contraseña: {
        identifier: 'contraseña',
        rules: [
          {
            type   : 'empty',
            prompt : 'Por favor ingrese su contraseña'
          },
          {
            type   : 'minLength[6]',
            prompt : 'La contraseña debe ser de minimo {ruleValue} caracteres'
          }
        ]
      }
    }
  });

$('select.dropdown')
  .dropdown();
$( 'carouselExampleIndicators').ready(function(){
 $('.carousel').carousel({
   interval: 2000
   })
});
$('.ui.rating')
  .rating({
    initialRating: 3,
    maxRating: 5
  })
;
var panelOne = $('.form-panel.two').height(),panelTwo = $('.form-panel.two')[0].scrollHeight;

$('.form-panel.two').not('.form-panel.two.active').on('click', function(e) {
e.preventDefault();

$('.form-toggle').addClass('visible');
$('.form-panel.one').addClass('hidden');
$('.form-panel.two').addClass('active');
$('.form').animate({
    'height': panelTwo
}, 200);
});

$('.form-toggle').on('click', function(e) {
e.preventDefault();
$(this).removeClass('visible');
$('.form-panel.one').removeClass('hidden');
$('.form-panel.two').removeClass('active');
$('.form').animate({
    'height': panelOne
}, 200);
});



var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");



// When the user starts to type something inside the password field
myInput.onkeyup = function(){
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
      letter.classList.remove("invalid");
      letter.classList.add("valid");
  } else {
      letter.classList.remove("valid");
      letter.classList.add("invalid");
  }

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
      capital.classList.remove("invalid");
      capital.classList.add("valid");
  } else {
      capital.classList.remove("valid");
      capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
      number.classList.remove("invalid");
      number.classList.add("valid");
  } else {
      number.classList.remove("valid");
      number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
      length.classList.remove("invalid");
      length.classList.add("valid");
  } else {
      length.classList.remove("valid");
      length.classList.add("invalid");
  }
}
*/
