$('document').ready(function () {
  $('.ui.dropdown').dropdown();
  $("#registroCuidador").hide();
  $("#menu").hide();
  $("#opcionesInicio").hide();  
  $("#selectPersonaMayor").hide(); 
  $("#registroAdulto").hide(); 
  
});
var cuidadorlinea="";
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
  validar(datos);

});

$("#registrarAdultomayor").click(function(){
  
  $("#diagnosticos").empty();
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
          
        
          texto +=`<div class="item" id="${i+1}" >${response[i].nombre}</div>`
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
  diagA=document.getElementsByClassName("item active selected");
  
  datos={
    "nombre": nombreA,
    "apellido": apellidoA,
    "nacimiento": naciA,
    "diagnostico": diagA[0].id,
    "id_cuidador": cuidadorlinea.id_cuidador

  }
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
    
    
    $("#adultos").empty();
    jsonadultos=response
    var texto='';

    for(var i=0;i<response.length;i++){

   
    
      texto +=`<div class="item" onclick="seleccionAdulto(${response[i].id_adulto_mayor})" data-value="${i}">${response[i].nombre} ${response[i].apellido}</div>`
      // ${response[i].id_adulto_mayor},\'${response[i].nombre}\',
      // \'${response[i].apellido}\',
      // \'${response[i].nacimiento}\',
      // \'${response[i].diagnostico}\'
    }
    $("#adultos").append(texto);
    
    
    
    $("#registroAdulto").hide();
    $("#selectPersonaMayor").show();
    
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
	 $.ajax({
	      data: JSON.stringify(datos),
	      url: "services/Registro/ValidarLogin",
	      method: 'POST',
	      headers: { 
	          'Accept': 'application/json',
	          'Content-Type': 'application/json' 
	      },
	      success:  function (response) {
			  

				$("#adultos").empty();
				jsonadultos=response
				var texto='';
	  
				for(var i=0;i<response.length;i++){

				
			  
					texto +=`<div class="item" onclick="seleccionAdulto(${response[i].id_adulto_mayor})" data-value="${i}">${response[i].nombre} ${response[i].apellido}</div>`
					// ${response[i].id_adulto_mayor},\'${response[i].nombre}\',
					// \'${response[i].apellido}\',
					// \'${response[i].nacimiento}\',
					// \'${response[i].diagnostico}\'
				}
				$("#adultos").append(texto);
				
				
			
				$("#login").hide();
				$("#selectPersonaMayor").show();
			  
	      },
	      error: function (error) {
	         alert(error)
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
for (let j = 0; j < jsonadultos.length; j++) {
	if(jsonadultos[j].id_adulto_mayor===id_adulto_mayor){
			jsonadultos=jsonadultos[j]
			$("#login").hide();
			$("#selectPersonaMayor").hide();
			$("#menu").show();
			break
	}
	
}
	// id_adulto_mayor,nombre,apellido,nacimiento,diagnostico
// console.log(id_adulto_mayor+" "+nombre+" "+apellido+" "+nacimiento+"
// "+diagnostico)
}

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
