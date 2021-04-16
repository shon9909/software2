$('document').ready(function () {
  $('.ui.dropdown').dropdown();
  $("#opc").hide(); 
  $("#registroCuidador").hide();
  $("#menu").hide();
  $("#opcionesInicio").hide();  
  $("#selectPersonaMayor").hide(); 
  $("#registroAdulto").hide(); 
  $("#actiPsico").hide();
  
  
});
var cuidadorlinea="";
var adultolinea="";
var jsonadultos="";


$("#crearCuenta").on("click", function (event) {
  event.preventDefault();
  $("#login").hide();
  $("#registroCuidador").show();
});

$("#volverRegaCuidInicio").click(function () {
  $("#registroCuidador").hide();
  $("#login").show();
});

$("#loginIngresar").click(function(){
  datos = {
    "email": $("#correoElectronico").val(),
    "password": $("#contrasenaLogin").val()
  }
    datoscuidadorlinea();
    validar(datos);



});

function datoscuidadorlinea(){
$.ajax({
  data: JSON.stringify(datos),
  url: "services/Registro/ValidarLoginDATOS",
  method: 'POST',
  headers: { 
      'Accept': 'application/json',
      'Content-Type': 'application/json' 
  },
  success: function (response) {
  cuidadorlinea=response[0];
  },error: function (error) {
    alert(error)
 }
});
}


$("#registrarAdultomayor").click(function(){
  console.log(cuidadorlinea)
  $("#diagnosticos").empty();
  $("#diagnosticos").text("Elige el diagnostico");
  var texto='';
 
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Consultas/Diag",
    method: 'POST',
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    success:  function (response) {
        // Imprimir respuesta del archivo
        for(var i=0;i<response.length;i++){
          
        
       texto +=`<option value="${response[i].id_diagnostico}">${response[i].nombre}</option>`


          // ${response[i].id_adulto_mayor},\'${response[i].nombre}\',
          // \'${response[i].apellido}\',
          // \'${response[i].nacimiento}\',
          // \'${response[i].diagnostico}\'
        }
        $("#diagnosticos").append(texto);
        
        
         // Imprimir respuesta del archivo
        $("#registroAdulto").show(); 
        $("#selectPersonaMayor").hide(); 
    },
    error: function (error) {
        console.log(error); // Imprimir respuesta de error
    }

});
});



$("#regAdulto").click(function(){
 

  nombreA=$("#nombreAdulto").val();
  apellidoA=$("#apellidoAdulto").val();
  nacimientoA=$("#nacimientoAdulto").val();
  naciA=moment(nacimientoA).format('YYYY-MM-DD');
  //diagA=document.getElementsByClassName("item active selected");
  diagA=$("#diagnosticos").val();
  datos={
    "nombre": nombreA,
    "apellido": apellidoA,
    "nacimiento": naciA,
    "diagnostico": diagA,
    "id_cuidador": cuidadorlinea.id_cuidador
  }
  console.log(datos);
   registrarAdulto(datos);
   $("#selectPersonaMayor").hide(); 
});

$("#volverRegaAdulSelecc").click(function(){
  

  $.ajax({
    data: JSON.stringify(cuidadorlinea),
    url: "services/Registro/Actualizar",
    method: 'POST',
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    success:  function (response) {
    
      $("#diagnosticos").text("Elige el diagnostico");
    $("#adultos").empty();
    jsonadultos=response
    var texto='';

    for(var i=1;i<response.length;i++){

   
    
      texto +=`<div class="item" onclick="seleccionAdulto(${response[i].id_adulto_mayor})">${response[i].nombre} ${response[i].apellido}</div>`
      // ${response[i].id_adulto_mayor},\'${response[i].nombre}\',
      // \'${response[i].apellido}\',
      // \'${response[i].nacimiento}\',
      // \'${response[i].diagnostico}\'
    }
    $("#adultos").append(texto);
    
    
    
    $("#registroAdulto").hide();
    $("#selectPersonaMayor").show();
    console.log(adultolinea);
    console.log(cuidadorlinea);
    
    
    },
    error: function (error) {
       alert(error)
    }
    
});





});

$("#aceptarAdulto").click(function(){
  $("#menu").show();
  $("#opcionesInicio").show();  
  $("#selectPersonaMayor").hide(); 
});

$("#cerrarUno").click(function(){
    console.log(adultolinea);
    console.log(cuidadorlinea);
    $("#adultos").empty();
	  $("#selectPersonaMayor").hide();
	  $("#login").show();  
	});

cerrarUno

    $("#reg").on("click",function (){
      nombre=$("#nombreCuidador").val();
    correo=$("#emailRegistro").val();
    contra=$("#contrasena").val(); 
    datos={
      "email": correo,
      "nombre": nombre,
      "password": contra 
    }
    registrar(datos)
});

function registrarAdulto(datos){
    $.ajax({
      data: JSON.stringify(datos),
      url: "services/Registro/Adulto",
      method: 'POST',
      headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json' 
      },
      success:  function (response) {
         
          alert("Registrado con exito!")
      
      },
      error: function (error) {
          console.log(error); // Imprimir respuesta de error
      }
      
});
  
}

function registrarAdulto2(datos){
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Registro/Adulto",
    method: 'POST',
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    success:  function (response) {
  
    },
    error: function (error) {
        console.log(error); // Imprimir respuesta de error
    }
    
});

}



function registrar(datos){
	
	  $.ajax({
	      data: JSON.stringify(datos),
	      url: "services/Registro/Cuidador",
	      method: 'POST',
	      headers: { 
	          'Accept': 'application/json',
	          'Content-Type': 'application/json' 
	      },
	      success:  function (response) {
	          console.log(response); // Imprimir respuesta del archivo
			  alert("Registrado con exito!")
	          $("#registroCuidador").hide();
	          $("#login").show();
			  
	      },
	      error: function (error) {
	          console.log(error); // Imprimir respuesta de error
	      }
	      
	});
}

    
$("#ingresarLogin").on("click",function (event){
	event.preventDefault();
	datos = {
		    "email": $("#correoElectronico").val(),
		    "password": $("#contrasenaLogin").val()
		  }

      validar(datos)
      
		  
		   
});
    


function validar(datos){

  $("#seleccionAD").text("SELECCIONA...");

	 $.ajax({
	      data: JSON.stringify(datos),
	      url: "services/Registro/ValidarLogin",
	      method: 'POST',
	      headers: { 
	          'Accept': 'application/json',
	          'Content-Type': 'application/json' 
	      },
	      success:  function (response) {
          $("#diagnosticos").text("Elige el diagnostico");

				$("#adultos").empty();
				jsonadultos=response
				var texto='';
	  
				for(var i=1;i<response.length;i++){

				
			  
					texto +=`<div class="item" onclick="seleccionAdulto(${response[i].id_adulto_mayor})">${response[i].nombre} ${response[i].apellido}</div>`
					// ${response[i].id_adulto_mayor},\'${response[i].nombre}\',
					// \'${response[i].apellido}\',
					// \'${response[i].nacimiento}\',
					// \'${response[i].diagnostico}\'
				}
				$("#adultos").append(texto);
				
				
			
				$("#login").hide();
				$("#selectPersonaMayor").show();
        console.log(adultolinea);
        console.log(cuidadorlinea);
			  
	      },
	      error: function (error) {

          if(error.statusText=="error"){
          alert("Revisa tus datos!");

          }else{
            alert("No tienes ningun adulto mayor registrado, registralo!!!!");
            nombreA="a";
            apellidoA="a";
            nacimientoA="2020-01-01";
            naciA=moment(nacimientoA).format('YYYY-MM-DD');
            diagA=1;
          datos={
            "nombre": nombreA,
            "apellido": apellidoA,
            "nacimiento": naciA,
            "diagnostico": diagA,
            "id_cuidador": cuidadorlinea.id_cuidador
          }
          console.log(cuidadorlinea.id_cuidador);
          
           registrarAdulto2(datos);
           
           $("#login").hide(); 
           $("#selectPersonaMayor").show(); 
           console.log(adultolinea);
          console.log(cuidadorlinea);
          }
   
	}



	      
	});

  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Registro/ValidarLoginDATOS",
    method: 'POST',
    headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json' 
    },
    success: function (response) {
    cuidadorlinea=response[0];
    },error: function (error) {
      alert(error)
   }
  });
	
}
    

function seleccionAdulto(id_adulto_mayor){
  $("#seleccionAD").text("SELECCIONA...");
  texto='';
for (let j = 0; j < jsonadultos.length; j++) {
	if(jsonadultos[j].id_adulto_mayor===id_adulto_mayor){
    adultolinea=jsonadultos[j];
      adultolinea.id_cuidador=cuidadorlinea.id_cuidador;
			jsonadultos=jsonadultos[j]
      $("#menucaja").empty();
      texto +=` <div class="item">${cuidadorlinea.nombre}</div><div class="item">Perfil</div> <div class="item">Cambiar adulto Mayor</div><div class="item" onclick="cerrarmenu()">Cerrar sesión</div>`
      $("#menucaja").append(texto);
			$("#login").hide();
			$("#selectPersonaMayor").hide();
			$("#menu").show();
			break
	}
  $("#opcionesInicio").show(); 
	
}

console.log(adultolinea);
console.log(cuidadorlinea);
}


function cerrarmenu(){
  console.log(adultolinea);
  console.log(cuidadorlinea);
  $("#adultos").empty();
  $("#menu").hide();
  $("#login").show();
  $("#opcionesInicio").hide(); 
}

$("#psico").click(function(){
  $("#actiPsico").show();
  $("#opcionesInicio").hide();

});



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



//When the user starts to type something inside the password field
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
