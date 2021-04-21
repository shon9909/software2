$('document').ready(function () {
  $('.ui.dropdown').dropdown();
  $("#registroCuidador").hide();
  $("#menu").hide();
  $("#opcionesInicio").hide();
  $("#selectPersonaMayor").hide();
  $("#registroAdulto").hide();
  $("#actiPsico").hide();
  $("#detalles").hide();
  $("#otro").hide();
  $("#historial").hide();
  $("#historialvacio").hide();
  $("#actividadesCompletas").hide();
  $("#perfiladulto").hide();
  $("#historialPerfilVacio").hide();
});

var cuidadorlinea = "";
var adultolinea = "";
var jsonadultos = "";
var progresolinea = "";
var s = "";
var actividasnohechaslinea = [];
var id_potencialinea = 0;
var diagnosticoslinea="";

function inicio() {
  $("#actiPsico").hide();
  $("#detalles").hide();
  $("#Miprogre").hide();
  $("#historial").hide();
  $("#historialvacio").hide();
  $("#opcionesInicio").show();
  $("#actividadesCompletas").hide();
  $("#perfiladulto").hide();
  $("#historialPerfilVacio").hide();


}

function perfilA() {
  $("#opcionesInicio").hide();
  $("#actiPsico").hide();
  $("#detalles").hide();
  $("#Miprogre").hide();
  $("#historial").hide();
  $("#historialvacio").hide();
  $("#actividadesCompletas").hide();
  $("#historialPerfilVacio").hide();
  $("#perfilAa").empty(); 
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Consultas/Diag",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      diagnosticoslinea=response;
      //AQUII
      datos = {
        "id_adulto_mayor": adultolinea.id_adulto_mayor
      }
      $.ajax({
        data: JSON.stringify(datos),
        url: "services/Consultas/HistorialPerfil",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        success: function (e) {

          texto = '';
          if (e == "1") {
            $("#perfilAa").empty(); 
            for(var i =0;i<diagnosticoslinea.length;i++){
              if(adultolinea.diagnostico==diagnosticoslinea[i].id_diagnostico){
                texto+=
                `<h1>${adultolinea.nombre}</h1>
                <h1>${adultolinea.apellido}</h1>
                <h2>${adultolinea.nacimiento}</h2>
                <p>${diagnosticoslinea[i].nombre}</p>`;
                break;
              }
            }  
            texto+=`<div class="ui info message">
            <i class="close icon"></i>
            <div class="header">
              ¡El adulto mayor aun no realiza ninguna actividad!
            </div>
            <ul class="list">
              <li>Puedes ir a la pestaña de Inicio y escoger alguna.</li>
              <li>Puedes realizar el seguimiento a las actividades realizadas en Mi progreso.</li>
            </ul>
          </div>`;
            $("#perfilAa").append(texto);
          } else {
            $("#perfilAa").empty(); 
            var texto = '';
          for(var i =0;i<diagnosticoslinea.length;i++){
            if(adultolinea.diagnostico==diagnosticoslinea[i].id_diagnostico){
              texto+=
              `<h1>${adultolinea.nombre}</h1>
                <h1>${adultolinea.apellido}</h1>
                <h2>${adultolinea.nacimiento}</h2>
                <p>${diagnosticoslinea[i].nombre}</p>
                <table>
					<thead>
						<tr>
							<th>Nombre</th>
							<th>Descripción</th>
							<th>Fecha</th>
							<th>Valoracion</th>
						</tr>
					</thead>
					<tbody id="contenido">

					</tbody>
				</table>
		      `
          break;
            }
          } 
          $("#perfilAa").append(texto); 

          texto='';
            $("#contenido").empty();
            texto += `<table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Valoracion</th>
              </tr>
            </thead>
            <tbody id="contenido">
      
              </tbody>`;
            $("#divPerfil").append(texto);
            texto='';
            for (var i = 0; i < e.length; i++) {
              if(i==e.length-1){
                texto += `
                <tr>
                  <th>${e[i].nombre}</th>
                  <th>${e[i].descripcion}</th>
                  <th>${e[i].fecha}</th>
                  <th>${e[i].valoracion}</th>
                </tr>
                `;
                break;
              }else{
                texto += `
              <tr>
                <th>${e[i].nombre}</th>
                <th>${e[i].descripcion}</th>
                <th>${e[i].fecha}</th>
                <th>${e[i].valoracion}</th>
              </tr>
              `;
            }
              
            }
    
            $("#contenido").append(texto);
    
          }
    
        }, error: function (error) {
          console.log(error); // Imprimir respuesta de error
        }
      });

//AQUI
    }, error: function (error) {
      console.log(error); // Imprimir respuesta de error
    }
  });




  $("#perfiladulto").show();



}
function Miprogreso() {
  $("#opcionesInicio").hide();
  $("#actiPsico").hide();
  $("#detalles").hide();
  $("#historialvacio").hide();
  $("#historial").hide();
  $("#actividadesCompletas").hide();
  $("#perfiladulto").hide();
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Consultas/Diag",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      diagnosticos = response;
      var texto = '';

      $("#Miprogre").empty();
      for (var i = 0; i < response.length; i++) {
        if (response[i].id_diagnostico == adultolinea.diagnostico) {

          texto += `
          <div class="blog-card">
          <div class="meta">
              <div class="photo" style="background-image: url(https://www.nuevarepublica.co/wp-content/uploads/2016/02/familia-colombiana.jpeg)"></div>
          </div>
          <div class="meta">
          <div class="description">
              <h1 class="cuidainfo">  ${cuidadorlinea.nombre}</h1>
              <h2 class="cuidainfo">  ${cuidadorlinea.email}</h2>
              <p class="cuidainfo">¡Eres un gran cuidador!</p>
              <p class="read-more">
                  <a href="#"></a>
              </p>
          </div>
</div>
      </div>
    
        </div>
        <div class="blog-card alt">
          <div class="meta">
            <div class="photo"
              style="background-image: url(https://www.hd.com.do/wp-content/uploads/2019/08/Haroldfeature-1100x618.jpg)">
            </div>
          </div>
          <div class="meta">
            <div class="description">
              <h1>${adultolinea.nombre} ${adultolinea.apellido}</h1>
              <h2>Fecha de nacimiento: ${adultolinea.nacimiento}</h2>
              <p>Diagnostico: ${response[i].nombre}</p>
              <br>
              <button class="ui green button" onclick="historialadultoactivo()">Historial de actividades hechas.</button>
              <p class="read-more">
                <a href="#">ver perfil</a>
              </p>
            </div>
          </div>
        </div>`;
        }
      }
      $("#Miprogre").append(texto);


    }, error: function (error) {
      console.log(error); // Imprimir respuesta de error
    }

  });
  $("#Miprogre").show();
}

function historialadultoactivo() {
  $("#Miprogre").hide();
  datos = {
    "id_adulto_mayor": adultolinea.id_adulto_mayor
  }
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Consultas/Historial",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (e) {
      if (e == "1") {
        $("#historial").hide();
        $("#historialvacio").show();

      } else {
        var contenido = '';
        $("#contenidoTabla").empty();
        for (var i = 0; i < e.length; i++) {
          contenido += `
                         <tr>
                            <th>${e[i].fecha}</th>
                            <th>${e[i].descripcion}</th>
                            <th>${e[i].nombre}</th>
                            <th>${e[i].valoracion}</th>
                        </tr>`

        }
        $("#contenidoTabla").append(contenido);
      }

    }, error: function (error) {
      console.log(error); // Imprimir respuesta de error
    }
  });
  $("#historial").show();
}

$("#crearCuenta").on("click", function (event) {
  event.preventDefault();
  $("#login").hide();
  $("#registroCuidador").show();
});

$("#volverRegaCuidInicio").click(function () {
  $("#registroCuidador").hide();
  $("#login").show();
});

$("#loginIngresar").click(function () {
  datos = {
    "email": $("#correoElectronico").val(),
    "password": $("#contrasenaLogin").val()
  }
  datoscuidadorlinea();
  validar(datos);



});

function datoscuidadorlinea() {
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Registro/ValidarLoginDATOS",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      cuidadorlinea = response[0];
    }, error: function (error) {
      alert(error)
    }
  });
}


$("#registrarAdultomayor").click(function () {
  console.log(cuidadorlinea)
  $("#diagnosticos").empty();
  $("#diagnosticos").text("Elige el diagnostico");
  var texto = '';

  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Consultas/Diag",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      // Imprimir respuesta del archivo
      for (var i = 0; i < response.length; i++) {


        texto += `<option value="${response[i].id_diagnostico}">${response[i].nombre}</option>`


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



$("#regAdulto").click(function () {


  nombreA = $("#nombreAdulto").val();
  apellidoA = $("#apellidoAdulto").val();
  nacimientoA = $("#nacimientoAdulto").val();
  naciA = moment(nacimientoA).format('YYYY-MM-DD');
  //diagA=document.getElementsByClassName("item active selected");
  diagA = $("#diagnosticos").val();
  datos = {
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

$("#volverRegaAdulSelecc").click(function () {


  $.ajax({
    data: JSON.stringify(cuidadorlinea),
    url: "services/Registro/Actualizar",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {

      $("#diagnosticos").text("Elige el diagnostico");
      $("#adultos").empty();
      jsonadultos = response
      var texto = '';

      for (var i = 1; i < response.length; i++) {



        texto += `<div class="item" onclick="seleccionAdulto(${response[i].id_adulto_mayor})">${response[i].nombre} ${response[i].apellido}</div>`
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

$("#aceptarAdulto").click(function () {
  $("#menu").show();
  $("#opcionesInicio").show();
  $("#selectPersonaMayor").hide();
});

$("#cerrarUno").click(function () {
  console.log(adultolinea);
  console.log(cuidadorlinea);
  $("#adultos").empty();
  $("#selectPersonaMayor").hide();
  $("#login").show();
});



$("#reg").on("click", function () {
  nombre = $("#nombreCuidador").val();
  correo = $("#emailRegistro").val();
  contra = $("#contrasena").val();
  datos = {
    "email": correo,
    "nombre": nombre,
    "password": contra
  }
  registrar(datos)
});

function registrarAdulto(datos) {
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Registro/Adulto",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {

      alert("Registrado con exito!")

    },
    error: function (error) {
      console.log(error); // Imprimir respuesta de error
    }

  });

}

function registrarAdulto2(datos) {
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Registro/Adulto",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {

    },
    error: function (error) {
      console.log(error); // Imprimir respuesta de error
    }

  });

}



function registrar(datos) {

  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Registro/Cuidador",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
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


$("#ingresarLogin").on("click", function (event) {
  event.preventDefault();
  datos = {
    "email": $("#correoElectronico").val(),
    "password": $("#contrasenaLogin").val()
  }

  validar(datos)



});




$("#psico").click(function () {
  $("#opcionesInicio").hide();
  id_potencialinea = 1;
  traerProgreso(adultolinea.id_adulto_mayor, adultolinea.diagnostico, id_potencialinea);
  $("#actiPsico").show();
});

$("#medicacion").click(function () {
  $("#opcionesInicio").hide();
  id_potencialinea = 2;
  traerProgreso(adultolinea.id_adulto_mayor, adultolinea.diagnostico, id_potencialinea);
  $("#actiPsico").show();
});
$("#descanso").click(function () {
  $("#opcionesInicio").hide();
  id_potencialinea = 3;
  traerProgreso(adultolinea.id_adulto_mayor, adultolinea.diagnostico, id_potencialinea);
  $("#actiPsico").show();
});

function traerProgreso(id_adulto_mayor, id_diagnostico, id_potencialinea) {

  datos = {
    "id_adulto_mayor": id_adulto_mayor
  }

  $.ajax({

    data: JSON.stringify(datos),
    url: "services/Consultas/Miprogreso",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response1) {
      progresolinea = ""
      if (response1 != "1") {
        progresolinea = response1;
      }
      datos = {
        "id_diagnostico": id_diagnostico
      }

      $.ajax({

        data: JSON.stringify(datos),
        url: "services/Consultas/Actividades",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        success: function (response2) {


          if (response1 == "1") {
            actividasnohechaslinea = response2;
            $("#uno").empty();
            var texto = '';
            for (var i = 0; i < actividasnohechaslinea.length; i++) {
              if (actividasnohechaslinea[i].id_potencia == 1 && actividasnohechaslinea[i].id_potencia == id_potencialinea) {
                texto += `
                <tr>
              <td>Psicoterapia</td>
              <td>${actividasnohechaslinea[i].nombre}</td>
              <td class="center aligned">${actividasnohechaslinea[i].descripcion}</td>
              <td class="center aligned">
                <button class="ui primary button" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
                  Ver mas...
                </button>
              </td>
            </tr>`
              }
              if (actividasnohechaslinea[i].id_potencia == 2 && actividasnohechaslinea[i].id_potencia == id_potencialinea) {
                texto += `
                <tr>
              <td>Medicacion</td>
              <td>${actividasnohechaslinea[i].nombre}</td>
              <td class="center aligned">${actividasnohechaslinea[i].descripcion}</td>
              <td class="center aligned">
                <button class="ui primary button" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
                  Ver mas...
                </button>
              </td>
            </tr>`
              }

              if (actividasnohechaslinea[i].id_potencia == 3 && actividasnohechaslinea[i].id_potencia == id_potencialinea) {
                texto += `
                <tr>
              <td>Descanso</td>
              <td>${actividasnohechaslinea[i].nombre}</td>
              <td class="center aligned">${actividasnohechaslinea[i].descripcion}</td>
              <td class="center aligned">
                <button class="ui primary button" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
                  Ver mas...
                </button>
              </td>
            </tr>`
              }
            }

            $("#uno").append(texto);

          }
          else {
            for (var i = 0; i < response1.length; i++) {
              for (var j = 0; j < response2.length; j++) {

                if (response1[i].id_actividades == response2[j].id_actividades && response2[j].id_potencia == id_potencialinea) {
                  ////actividasnohechaslinea REVISARRRRRRRRRRR pintar pestaña xd
                  response2[j].id_actividades = null;
                }

              }
            }
            var aux = 0;
            var aux2 = 1;
            for (var j = 0; j < response2.length; j++) {
              if (response2[j].id_actividades != null && response2[j].id_potencia == id_potencialinea) {
                aux = aux + 1;
                aux2 = aux2 + 1;
                s = "["
              }
            }


            for (var j = 0; j < response2.length; j++) {
              if (response2[j].id_actividades != null && response2[j].id_potencia == id_potencialinea) {
                console.log(response2[j])
                if (aux == 1) {
                  s += JSON.stringify(response2[j]);
                  s += "]"
                  aux = 0;
                } else {
                  s += JSON.stringify(response2[j]);
                  s += ","
                  aux = aux - 1;
                  aux2 = aux2 - 1;
                }

              }

            }

            if (aux2 == 1) {
              $("#uno").empty();
              $("#actiPsico").hide();
              $("#actividadesCompletas").show();
            } else {
              actividasnohechaslinea = JSON.parse(s);
              $("#uno").empty();
              var texto = '';
              for (var i = 0; i < actividasnohechaslinea.length; i++) {
                if (actividasnohechaslinea[i].id_potencia == 1 && actividasnohechaslinea[i].id_potencia == id_potencialinea) {
                  texto += `
                    <tr>
                  <td>Psicoterapia</td>
                  <td>${actividasnohechaslinea[i].nombre}</td>
                  <td class="center aligned">${actividasnohechaslinea[i].descripcion}</td>
                  <td class="center aligned">
                    <button class="ui primary button" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
                      Ver mas...
                    </button>
                  </td>
                </tr>`
                }
                if (actividasnohechaslinea[i].id_potencia == 2 && actividasnohechaslinea[i].id_potencia == id_potencialinea) {
                  texto += `
                    <tr>
                  <td>Medicacion</td>
                  <td>${actividasnohechaslinea[i].nombre}</td>
                  <td class="center aligned">${actividasnohechaslinea[i].descripcion}</td>
                  <td class="center aligned">
                    <button class="ui primary button" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
                      Ver mas...
                    </button>
                  </td>
                </tr>`
                }

                if (actividasnohechaslinea[i].id_potencia == 3 && actividasnohechaslinea[i].id_potencia == id_potencialinea) {
                  texto += `
                    <tr>
                  <td>Descanso</td>
                  <td>${actividasnohechaslinea[i].nombre}</td>
                  <td class="center aligned">${actividasnohechaslinea[i].descripcion}</td>
                  <td class="center aligned">
                    <button class="ui primary button" id="${actividasnohechaslinea[i].id_actividades}" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
                      Ver mas...
                    </button>
                  </td>
                </tr>`
                }
              }

              $("#uno").append(texto);
            }

          }

        }, error: function (error) {

        }


      });

    }, error: function (error) {

    }

  });

}
function botonAcSeleccion(id_actSele) {
  const fecha = new Date();
  var valoracion = parseInt($("#valoraSele").val());
  var año = fecha.getFullYear();
  var mes = fecha.getMonth() + 1;
  var dia = fecha.getDate();
  var fecha1 = año + "-" + mes + "-" + dia;
  fecha1 = fecha1.toString();

  datos = {
    "id_adulto_mayor": adultolinea.id_adulto_mayor,
    "id_actividades": id_actSele,
    "valoracion": valoracion,
    "fecha": fecha1,
  }
  console.log(datos)
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Auto/guardarProgreso",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      console.log(response)
      $('.ui.modal')
      $("#detalles").modal('hide')
        ;
      traerProgreso(adultolinea.id_adulto_mayor, adultolinea.diagnostico, id_potencialinea);

    }, error: function (error) {
      console.log(error)
    }
  });

}
function botonAc(id_actSele) {
  var texto = '';
  $("#actiSele").empty();
  for (var i = 0; i < actividasnohechaslinea.length; i++) {
    if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 1) {
      texto = ` <tr>
      <td class="center aligned">
        Psicoterapia
        </td>
      <td>
        <h2 class="ui center aligned header">${actividasnohechaslinea[i].nombre}</h2>
      </td>
      <td class="center aligned">${actividasnohechaslinea[i].descripcion}</td>
      <td id="botons">
      <div class="center aligned">
      <div class="ui buttons">
      <button class="ui toggle button" onclick="valorValoracion(${1})" value="${1}">1</button>
      <button class="ui toggle button" onclick="valorValoracion(${2})" value="${2}">2</button>
      <button class="ui toggle button" onclick="valorValoracion(${3})" value="${3}">3</button>
      <button class="ui toggle button" onclick="valorValoracion(${4})" value="${4}">4</button>
      <button class="ui toggle button" onclick="valorValoracion(${5})" value="${5}">5</button>
      </div>
      </div>
      </td>
      <td>
        <button class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades})">Realizada</button></td>
      </tr>`
    }
    if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 2) {
      texto = ` <tr>
      <td class="center aligned">
        Medicacion
        </td>
      <td>
        <h2 class="ui center aligned header">${actividasnohechaslinea[i].nombre}</h2>
      </td>
      <td class="center aligned">${actividasnohechaslinea[i].descripcion}</td>
      <td id="botons">
      <div class="center aligned">
      <div class="ui buttons">
      <button class="ui toggle button" onclick="valorValoracion(${1})" value="${1}">1</button>
      <button class="ui toggle button" onclick="valorValoracion(${2})" value="${2}">2</button>
      <button class="ui toggle button" onclick="valorValoracion(${3})" value="${3}">3</button>
      <button class="ui toggle button" onclick="valorValoracion(${4})" value="${4}">4</button>
      <button class="ui toggle button" onclick="valorValoracion(${5})" value="${5}">5</button>
      </div>
      </div>
      </td>
      <td>
        <button class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades})">Realizada</button></td>
      </tr>`
    }
    if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 3) {
      texto = ` <tr>
      <td class="center aligned">
        Descanso
        </td>
      <td>
        <h2 class="ui center aligned header">${actividasnohechaslinea[i].nombre}</h2>
      </td>
      <td class="center aligned">${actividasnohechaslinea[i].descripcion}</td>
      <td id="botons">
      <div class="center aligned">
      <div class="ui buttons">
      <button class="ui toggle button" onclick="valorValoracion(${1})" value="${1}">1</button>
      <button class="ui toggle button" onclick="valorValoracion(${2})" value="${2}">2</button>
      <button class="ui toggle button" onclick="valorValoracion(${3})" value="${3}">3</button>
      <button class="ui toggle button" onclick="valorValoracion(${4})" value="${4}">4</button>
      <button class="ui toggle button" onclick="valorValoracion(${5})" value="${5}">5</button>
      </div>
      </div>
      </td>
      <td>
        <button type="submit" class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades})">Realizada</button></td>
      </tr>`
    }
  }
  $("#actiSele").append(texto);

  $('.ui.modal')
  $("#detalles").modal('show')
    ;



}



function valorValoracion(id) {
  $("#botons").empty();
  var tex = '';
  for (var i = 1; i <= 5; i++) {
    if (i == id) {
      tex += `<div class="center aligned">
    <button class="ui toggle button active" value="${i}" id="valoraSele">${i}</button>
    </div>`;
    }
  }
  $("#botons").append(tex);
}






function validar(datos) {

  $("#seleccionAD").text("SELECCIONA...");

  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Registro/ValidarLogin",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      s
      $("#diagnosticos").text("Elige el diagnostico");

      $("#adultos").empty();
      jsonadultos = response
      var texto = '';

      for (var i = 1; i < response.length; i++) {



        texto += `<div class="item" onclick="seleccionAdulto(${response[i].id_adulto_mayor})">${response[i].nombre} ${response[i].apellido}</div>`
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

      if (error.statusText == "error") {
        alert("Revisa tus datos!");

      } else {
        alert("No tienes ningun adulto mayor registrado, registralo!!!!");
        nombreA = "a";
        apellidoA = "a";
        nacimientoA = "2020-01-01";
        naciA = moment(nacimientoA).format('YYYY-MM-DD');
        diagA = 1;
        datos = {
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
      cuidadorlinea = response[0];
    }, error: function (error) {
      alert(error)
    }
  });

}


function seleccionAdulto(id_adulto_mayor) {
  $("#seleccionAD").text("SELECCIONA...");
  texto = '';
  for (let j = 0; j < jsonadultos.length; j++) {
    if (jsonadultos[j].id_adulto_mayor === id_adulto_mayor) {
      adultolinea = jsonadultos[j];
      adultolinea.id_cuidador = cuidadorlinea.id_cuidador;
      jsonadultos = jsonadultos[j]
      $("#menucaja").empty();
      texto += ` <div class="item">${cuidadorlinea.nombre}</div><div class="item">Cambiar adulto Mayor</div><div class="item" onclick="cerrarmenu()">Cerrar sesión</div>`
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


function cerrarmenu() {
  console.log(adultolinea);
  console.log(cuidadorlinea);
  $("#adultos").empty();
  $("#menu").hide();
  $("#login").show();
  $("#opcionesInicio").hide();
  $("#actiPsico").hide();
  $("#Miprogre").hide();
  $("#historial").hide();
  $("#historialvacio").hide();
  $("#actividadesCompletas").hide();
  $("#perfiladulto").hide();
  $("#historialPerfilVacio").hide();


}



//Valoraciom
$('.ui.rating')
  .rating({
    initialRating: 3,
    maxRating: 5
  });
//Actividades 
$('.tabular.menu .item').tab();

//Progreso de las actividades
$('.ui.button').on('click', function () {
  $('.progress').progress('increment')
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
