
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
  $("#criterios").hide();
  $("#grafico").hide();
  $("#calen").hide();
 

  document.getElementById("correoElectronico").value = '';
  document.getElementById("contrasenaLogin").value = '';

});

function crearCalendario(){
  const fecha3 = new Date();
  var año = fecha3.getFullYear();
  var mes = fecha3.getMonth() + 1;
  var dia = fecha3.getDate()+1;
  var fecha2 = año + "-" + mes + "-" + dia;
  fecha2 = fecha2.toString();
  console.log(fecha2)
  $('#calendar').fullCalendar({
    
      header: {
          left: 'prev,next',
          center: 'title',
          right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: fecha2,
      buttonIcons: true,
      weekNumbers: false,
      editable: true,
      eventLimit: true,
      dayClick: function (date, jsEvent, view) {
          agregarEv(date.format())
      }, 

      eventClick: function (calEvent, jsEvent, view) {
          idEv=calEvent._id
          $('#event-title').text(calEvent.title);
          $('#event-description').html(calEvent.description);
          $("#modal-event").modal('show');
      },  
  });
}

$("#eliminarev").click(function () {

var eventosGUar=$('#calendar').fullCalendar('clientEvents')
for(var i=0;i<eventosGUar.length;i++){
  if(eventosGUar[i]._id==idEv){
    $('#calendar').fullCalendar( 'removeEvents', idEv)
  }
}
$("#modal-event").modal('hide');
});



function agregarEv(fecha2){
  console.log(fecha2)
  events1=[
    {
      title: 'jesus te ama',
              description: 'DESCRIPCION DEL EVENTO UWU',
              start: fecha2,
              color: '#3A87AD',
              textColor: '#ffffff',
    }
  ]
  $('#calendar').fullCalendar('addEventSource', events1);
  var eventosGUar=$('#calendar').fullCalendar('clientEvents')
  console.log(eventosGUar);
}

var idEv=""
var events=[]
var cuidadorlinea = "";
var adultolinea = "";
var jsonadultos = "";
var progresolinea = "";
var s = "";
var actividasnohechaslinea = [];
var id_potencialinea = 0;
var diagnosticoslinea = "";
var table = document.getElementById("tablaCriterios");
var table2 = document.getElementById("tablaCriteriosFinales");
var rowCount = table.rows.length - 1;
var cantidadtablas2 = table.rows.length - 1;
var actiSeleccionada = 0;
var cantidadtablas = 0;
var id_cInicial = 6;
var cont = 0;
var valoracionlinea = 0;
var valorauxIni = 0;
var valorauxFin = 0;
var valoracionlineaIni = 0;
var valoracionlineaFin = 0;
var gra = false;
var barChartIni = new Chart();
var barChartFin = new Chart();
var atras1 = false;
var atras2 = false;
//Modal - Abre la ventana para insertar un nuevo criterio




$("#añadirCriterio").popup().click(function () {
  $("#agC").modal('show');
  $("#criterios").modal('show');
});


$(".ui.modal").modal({
  closable: true
});
$('#eliminarCriterio')
  .popup();


//Crea una nueva fila en la tabla de criterio
function agregarCriterio() {
  var table = document.getElementById("tablaCriterios")
  rowCount = table.rows.length - 1;
  var t = $("#termino").val()
  //console.log(t)
  var row = table.insertRow(-1)
  var cell1 = row.insertCell(0)
  var cell2 = row.insertCell(1)
  rowCount = rowCount + 1;
  cell1.id = "nomcriterio" + id_cInicial;
  cell2.id = "bot" + rowCount;
  cell1.innerHTML = rowCount + ". " + t
  cell2.innerHTML = '<td"><div class="ui centered buttons" style="align:center;"><button class="ui button" onclick="valorValoracion(1,' + rowCount + ')">1</button><button class="ui button" onclick="valorValoracion(2,' + rowCount + ')">2</button><button class="ui button" onclick="valorValoracion(3,' + rowCount + ')">3</button><button class="ui button" onclick="valorValoracion(4,' + rowCount + ')">4</button></div></td>';
  document.getElementById("termino").value = '';
  id_cInicial = id_cInicial + 1;

}

//Elimina las filas de la tabla de cirterios!! depende de la variable rowCount
function eliminarFila() {
  if (rowCount < 6) {
    alert('No puedes eliminar los criterios base!');
  }
  else {
    table.deleteRow(rowCount);
    rowCount = rowCount - 1;
    console.log(rowCount)
    id_cInicial = id_cInicial - 1;
  }
}





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
  $("#grafico").hide();
  aleatorio();
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
  $("#grafico").hide();
  $("#perfilAa").empty();
  aleatorio();
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Consultas/Diag",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      diagnosticoslinea = response;
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
            for (var i = 0; i < diagnosticoslinea.length; i++) {
              if (adultolinea.diagnostico == diagnosticoslinea[i].id_diagnostico) {
                texto +=
                  `<h1>${adultolinea.nombre}</h1>
                <h1>${adultolinea.apellido}</h1>
                <h2>${adultolinea.nacimiento}</h2>
                <p>${diagnosticoslinea[i].nombre}<br>${diagnosticoslinea[i].descripcion}</p>
                `;
                break;
              }
            }
            texto += `<div class="ui info message">
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
            for (var i = 0; i < diagnosticoslinea.length; i++) {
              if (adultolinea.diagnostico == diagnosticoslinea[i].id_diagnostico) {
                texto +=
                  `<h1>${adultolinea.nombre}</h1>
                <h1>${adultolinea.apellido}</h1>
                <h2>${adultolinea.nacimiento}</h2>
                <p>${diagnosticoslinea[i].nombre}<br>${diagnosticoslinea[i].descripcion}</p>
                <table>
					<thead>
						<tr>
							<th class="t">Nombre</th>
							<th  class="tt">Fecha Realizada</th>
							<th>Valoracion Inicial</th>
              <th>Valoracion Final</th>
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

            texto = '';
            $("#contenido").empty();
            texto += `<table>
            <thead>
              <tr>
                <th class="t">Nombre</th>
                <th  class="tt">Fecha Realizada</th>
                <th>Valoracion Inicial</th>
                <th>Valoracion Final</th>
              </tr>
            </thead>
            <tbody id="contenido">
      
              </tbody>`;
            $("#divPerfil").append(texto);
            texto = '';
            for (var i = 0; i < e.length; i++) {
              if (i == e.length - 1) {
                texto += `
                <tr>
                  <th>${e[i].nombre}</th>
                  <th>${e[i].fecha}</th>
                  <th class="valo">${e[i].valoracionIni}</th>
                  <th class="valo">${e[i].valoracionFin}</th>
                </tr>
                `;
                break;
              } else {
                texto += `
              <tr>
                <th>${e[i].nombre}</th>
                <th>${e[i].fecha}</th>
                <th class="valo">${e[i].valoracionIni}</th>
                <th class="valo">${e[i].valoracionFin}</th>
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
  $("#grafico").hide();
  aleatorio();
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
                            <th>${e[i].nombre}</th>
                            <th>${e[i].descripcion}</th>
                            <th>${e[i].valoracionIni}</th>
                            <th>${e[i].valoracionFin}</th>
                            <th>
                            <button class="ui toggle button active" id="gra" onclick="graficas(${e[i].id_actividades})">Ver mas...</button>
                            </th>
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
  document.getElementById("nombreAdulto").value = '';
  document.getElementById("apellidoAdulto").value = '';
  document.getElementById("nacimientoAdulto").value = '';
  document.getElementById("nacimientoAdulto").value = '';

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
  document.getElementById("correoElectronico").value = '';
  document.getElementById("contrasenaLogin").value = '';

});



$("#reg").on("click", function () {
  nombre = $("#nombreCuidador").val();
  correo = $("#emailRegistro").val();
  contra = $("#contrasena").val();
  contra2 = $("#contrasena2").val();
  if (contra == contra2) {
    datos = {
      "email": correo,
      "nombre": nombre,
      "password": contra
    }
    registrar(datos)
    document.getElementById("nombreCuidador").value = '';
    document.getElementById("emailRegistro").value = '';
    document.getElementById("contrasena").value = '';
    document.getElementById("contrasena2").value = '';
  } else {
    alert("Tus contraseñas no coinciden!");
  }

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
  aleatorio()
  $("#opcionesInicio").hide();
  id_potencialinea = 1;
  traerProgreso(adultolinea.id_adulto_mayor, adultolinea.diagnostico, id_potencialinea);
  $("#actiPsico").show();
});

$("#medicacion").click(function () {
  aleatorio()
  $("#opcionesInicio").hide();
  id_potencialinea = 2;
  crearCalendario();
  //traerProgreso(adultolinea.id_adulto_mayor, adultolinea.diagnostico, id_potencialinea);
  //$("#actiPsico").show();
  $("#calen").show();
  
});
$("#descanso").click(function () {
  aleatorio()
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
              <td id="t2">${actividasnohechaslinea[i].nombre}</td>
              <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
              <td class="center aligned">
                <button class="ui primary button" id="t2" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
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
              <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
              <td class="center aligned">
                <button class="ui primary button" id="t2" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
                  Ver mas...
                </button>
              </td>
            </tr>`
              }

              if (actividasnohechaslinea[i].id_potencia == 3 && actividasnohechaslinea[i].id_potencia == id_potencialinea) {
                texto += `
                <tr>
              <td>Descanso</td>
              <td id="t2">${actividasnohechaslinea[i].nombre}</td>
              <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
              <td class="center aligned">
                <button class="ui primary button"  id="t2" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
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
                actiSeleccionada = response2[j].id_actividades;
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
                  <td id="t2">${actividasnohechaslinea[i].nombre}</td>
                  <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
                  <td class="center aligned">
                    <button class="ui primary button" id="t2" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
                      Ver mas...
                    </button>
                  </td>
                </tr>`
                }
                if (actividasnohechaslinea[i].id_potencia == 2 && actividasnohechaslinea[i].id_potencia == id_potencialinea) {
                  texto += `
                    <tr>
                  <td>Medicacion</td>
                  <td id="t2">${actividasnohechaslinea[i].nombre}</td>
                  <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
                  <td class="center aligned">
                    <button class="ui primary button" id="t2" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
                      Ver mas...
                    </button>
                  </td>
                </tr>`
                }

                if (actividasnohechaslinea[i].id_potencia == 3 && actividasnohechaslinea[i].id_potencia == id_potencialinea) {
                  texto += `
                    <tr>
                  <td>Descanso</td>
                  <td id="t2">${actividasnohechaslinea[i].nombre}</td>
                  <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
                  <td class="center aligned">
                    <button class="ui primary button" id="t2" id="${actividasnohechaslinea[i].id_actividades}" onclick="botonAc(${actividasnohechaslinea[i].id_actividades})">
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



function botonAcSeleccion(id_actSele, valoracionIni, valoracionFin) {
  if (gra == false) {
    alert("Aun no la puedes registrar! Debes valorar tus criterios primero!")
  } else {
    const fecha = new Date();
    console.log(valoracionIni + " se")
    console.log(valoracionIni + " sex2")
    var año = fecha.getFullYear();
    var mes = fecha.getMonth() + 1;
    var dia = fecha.getDate();
    var fecha1 = año + "-" + mes + "-" + dia;
    fecha1 = fecha1.toString();

    datos = {
      "id_adulto_mayor": adultolinea.id_adulto_mayor,
      "id_actividades": id_actSele,
      "valoracionIni": valoracionIni,
      "valoracionFin": valoracionFin,
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


}

function guardarCriterios() {
  var cr = []
  var ncr = []
  cantidadtablas = table.rows.length - 1;
  for (var i = 1; i <= cantidadtablas; i++) {
    cr[i] = $("#criterio" + i).val();
    ncr[i] = document.getElementById("nomcriterio" + i).textContent;
  }
  for (var i = 1; i < cr.length; i++) {
    datos = {
      "descripcion": ncr[i],
      "valoracion": cr[i],
      "id_adulto_mayor": adultolinea.id_adulto_mayor,
      "id_actividades": actiSeleccionada,
      "criterio": 1
    }
    if (datos.valoracion == undefined) {
      alert("Recuerda que debes valorar todos los criterios!");
      $("#criterios").modal('show');
      break;
    } else {
      $.ajax({
        data: JSON.stringify(datos),
        url: "services/Registro/Criterios",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, success: function (response) {
          console.log(response)
          cont = cont + 1;
          if (cont == cr.length - 1) {
            alert("Registrado criterios inciales con exito!")
            $("#criterios").modal('hide');
          }
        }, error: function (r) {
          cont = cont + 1;
          if (cont == cr.length - 1) {
            alert("Registrado criterios inciales con exito!")
            $("#criterios").modal('hide');
          }
        }
      });
      $("#criterios").modal('hide');
    }
  }

}

function guardarCriteriosFin() {
  var crfin = []
  var ncrfin = []
  cont = 0;
  cantidadtablas2 = table2.rows.length - 1;
  for (var i = 1; i <= cantidadtablas2; i++) {
    crfin[i] = $("#criteriof" + i).val();
    ncrfin[i] = document.getElementById("nomcriterioa" + i).textContent;
  }
  for (var i = 1; i < crfin.length; i++) {
    datos = {
      "descripcion": ncrfin[i],
      "valoracion": crfin[i],
      "id_adulto_mayor": adultolinea.id_adulto_mayor,
      "id_actividades": actiSeleccionada,
      "criterio": 1
    }
    console.log(datos)
    if (datos.valoracion == undefined) {
      alert("Recuerda que debes valorar todos los criterios!");
      $("#criteriosFin").modal('show');
      break;
    } else {
      $.ajax({
        data: JSON.stringify(datos),
        url: "services/Auto/CriteriosFin",
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, success: function (response) {
          console.log(response)
          cont = cont + 1;
        }, error: function (r) {
          cont = cont + 1;
          if (cont == crfin.length - 1) {
            var text = '';
            alert("Registrado criterios finales con exito!")
            $("#criteriosFin").modal('hide');
            $("#detalles").modal('hide');
            gra = true;
          }
        }
      });
    }
  }

}

function botonAc(id_actSele) {
  gra = false;
  valoracionlineaIni = 0;
  valoracionlineaFin = 0;
  id_cInicial = 6;
  for (var i = 0; i < actividasnohechaslinea.length; i++) {
    if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 1) {
      actiSeleccionada = actividasnohechaslinea[i].id_actividades;
    } if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 2) {
      actiSeleccionada = actividasnohechaslinea[i].id_actividades;
    } if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 3) {
      actiSeleccionada = actividasnohechaslinea[i].id_actividades;
    }
  }
  datos = {
    "id_adulto_mayor": adultolinea.id_adulto_mayor,
    "id_actividades": actiSeleccionada,
    "criterio": 1
  }
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Auto/cIniciales",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      valoracionlineaIni = 0;
      valoracionlineaFin = 0;
      if (response == "0") {
        var texto = '';
        $("#actiSele").empty();
        for (var i = 0; i < actividasnohechaslinea.length; i++) {
          if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 1) {
            actiSeleccionada = actividasnohechaslinea[i].id_actividades;
            texto = ` <tr>
        <td class="center aligned">
          Psicoterapia
          </td>
        <td>
          ${actividasnohechaslinea[i].nombre}
        </td>
        <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
        <td id="botons">
        <div class="center aligned">
        Registra tus criterios de Diagnostico!
        <br>
        <br>
        <div class="ui buttons">
        <button class="ui teal button" onclick="criteriosIni(${1})" id="${actiSeleccionada}i">Iniciales</button>
        <button class="ui blue button" onclick="criteriosFina(${2})" id="${actiSeleccionada}f">Finales</button>
        </div>
        </div>
        </td>
        <td>
          <button class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades},${valoracionlineaIni},${valoracionlineaFin})">Realizada</button></td>
        </tr>`
          }
          if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 2) {
            actiSeleccionada = actividasnohechaslinea[i].id_actividades;
            texto = ` <tr>
        <td class="center aligned">
          Medicacion
          </td>
        <td>
          ${actividasnohechaslinea[i].nombre}
        </td>
        <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
        <td id="botons">
        <div class="center aligned">
        Registra tus criterios de Diagnostico!
        <br>
        <br>
      <div class="ui buttons">
      <button class="ui teal button" onclick="criteriosIni(${1})" id="${actiSeleccionada}i">Iniciales</button>
      <button class="ui blue button" onclick="criteriosFina(${2})" id="${actiSeleccionada}f">Finales</button>
        </div>
        </div>
        </td>
        <td>
          <button class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades},${valoracionlineaIni},${valoracionlineaFin})">Realizada</button></td>
        </tr>`
          }
          if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 3) {
            actiSeleccionada = actividasnohechaslinea[i].id_actividades;
            texto = ` <tr>
        <td class="center aligned">
          Descanso
          </td>
        <td>
         ${actividasnohechaslinea[i].nombre}
        </td>
        <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
        <td id="botons">
        <div class="center aligned">
        Registra tus criterios de Diagnostico!
        <br>
        <br>
      <div class="ui buttons">
      <button class="ui teal button" onclick="criteriosIni(${1})" id="${actiSeleccionada}i">Iniciales</button>
      <button class="ui blue button" onclick="criteriosFina(${2})" id="${actiSeleccionada}f">Finales</button>
        </div>
        </div>
        </td>
        <td>
          <button type="submit" class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades},${valoracionlineaIni},${valoracionlineaFin})">Realizada</button></td>
        </tr>`
          }
        }
        $("#actiSele").append(texto);

        $('.ui.modal')
        $("#detalles").modal('show')
          ;
      } else {
        datos = {
          "id_adulto_mayor": adultolinea.id_adulto_mayor,
          "id_actividades": actiSeleccionada,
          "criterio": 2
        }
        $.ajax({
          data: JSON.stringify(datos),
          url: "services/Auto/cFinales",
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          success: function (response) {
            valoracionlineaIni = 0;
            valoracionlineaFin = 0;
            if (response == "1") {
              var texto = '';
              $("#actiSele").empty();
              for (var i = 0; i < actividasnohechaslinea.length; i++) {
                if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 1) {
                  actiSeleccionada = actividasnohechaslinea[i].id_actividades;
                  texto = ` <tr>
              <td class="center aligned">
                Psicoterapia
                </td>
              <td>
                ${actividasnohechaslinea[i].nombre}
              </td>
              <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
              <td id="botons">
              <div class="center aligned">
              Registra tus criterios de Diagnostico!
              <br>
              <br>
              <div class="ui buttons">
              <button class="ui blue button" onclick="criteriosFina(${2})" id="${actiSeleccionada}f">Finales</button>
              </div>
              </div>
              </td>
              <td>
                <button class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades},${valoracionlineaIni},${valoracionlineaFin})">Realizada</button></td>
              </tr>`
                }
                if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 2) {
                  actiSeleccionada = actividasnohechaslinea[i].id_actividades;
                  texto = ` <tr>
              <td class="center aligned">
                Medicacion
                </td>
              <td>
               ${actividasnohechaslinea[i].nombre}
              </td>
              <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
              <td id="botons">
              <div class="center aligned">
              Registra tus criterios de Diagnostico!
              <br>
              <br>
            <div class="ui buttons">
            <button class="ui blue button" onclick="criteriosFina(${2})" id="${actiSeleccionada}f">Finales</button>
              </div>
              </div>
              </td>
              <td>
                <button class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades},${valoracionlineaIni},${valoracionlineaFin})">Realizada</button></td>
              </tr>`
                }
                if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 3) {
                  actiSeleccionada = actividasnohechaslinea[i].id_actividades;
                  texto = ` <tr>
              <td class="center aligned" >
                Descanso
                </td>
              <td>
                ${actividasnohechaslinea[i].nombre}
              </td>
              <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
              <td id="botons">
              <div class="center aligned">
              Registra tus criterios de Diagnostico!
              <br>
              <br>
            <div class="ui buttons">
            <button class="ui blue button" onclick="criteriosFina(${2})" id="${actiSeleccionada}f">Finales</button>
              </div>
              </div>
              </td>
              <td>
                <button type="submit" class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades},${valoracionlineaIni},${valoracionlineaFin})">Realizada</button></td>
              </tr>`
                }
              }
              $("#actiSele").append(texto);

              $('.ui.modal')
              $("#detalles").modal('show')
                ;
            } else {
              var vIni = []
              var vFin = []

              var aux1 = 0;
              datos = {
                "id_adulto_mayor": adultolinea.id_adulto_mayor,
                "id_actividades": actiSeleccionada
              }

              $.ajax({
                data: JSON.stringify(datos),
                url: "services/Auto/cValoraciones",
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                success: function (response) {
                  for (i = 0; i < response.length; i++) {
                    if (i < response.length / 2) {
                      vIni[i] = response[i].valoracion;
                    } else {
                      vFin[aux1] = response[i].valoracion;
                      aux1 = aux1 + 1;
                    }
                  }
                  if (vIni.length == vFin.length) {
                    for (i = 0; i < vIni.length; i++) {
                      valorauxIni = valorauxIni + vIni[i];
                      valorauxFin = valorauxFin + vFin[i];
                    }
                  }
                  valoracionlineaIni = 0;
                  valoracionlineaFin = 0;

                  valoracionlineaIni = valorauxIni / (response.length / 2);
                  valoracionlineaFin = valorauxFin / (response.length / 2);

                  valoracionlineaIni = valoracionlineaIni.toPrecision(3);
                  valoracionlineaFin = valoracionlineaFin.toPrecision(3);
                  valoracionlineaIni = parseFloat(valoracionlineaIni);
                  valoracionlineaFin = parseFloat(valoracionlineaFin);
                  var texto = '';
                  $("#actiSele").empty();
                  for (var i = 0; i < actividasnohechaslinea.length; i++) {
                    if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 1) {
                      gra = true;
                      actiSeleccionada = actividasnohechaslinea[i].id_actividades;
                      texto = ` <tr>
              <td class="center aligned">
                Psicoterapia
                </td>
              <td>
               ${actividasnohechaslinea[i].nombre}
              </td>
              <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
              <td id="botonsf">
              <div class="center aligned">

              <table>
					      <thead>
						    <tr>
							  <th>Valoracion C. Iniciales</th>
							  <th>Valoracion C. Finales</th>
						    </tr>
					  </thead>
					  <tbody>
            <td class="center aligned" id="valIni" value="${valoracionlineaIni}">
            ${valoracionlineaIni} 
            </td>
            <td class="center aligned" id="valFin" value="${valoracionlineaFin}">
            ${valoracionlineaFin}
            </td>
					  </tbody>
            </table> 

              <br>
              <br>
              <div class="ui buttons">
              <button class="ui toggle button active" id="gra" onclick="graficas(${actiSeleccionada})">Conclusiones!</button>
              </div>
              </div>
              </td>
              <td>
                <button class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades},${valoracionlineaIni},${valoracionlineaFin})">Realizada</button></td>
              </tr>`
                      atras1 = true;
                    }
                    if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 2) {
                      gra = true;
                      actiSeleccionada = actividasnohechaslinea[i].id_actividades;
                      texto = ` <tr>
              <td class="center aligned">
                Medicacion
                </td>
              <td>
                ${actividasnohechaslinea[i].nombre}
              </td>
              <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
              <td id="botonsf">
              <div class="center aligned">
              <table>
					      <thead>
						    <tr>
							  <th>Valoracion C. Iniciales</th>
							  <th>Valoracion C. Finales</th>
						    </tr>
					  </thead>
					  <tbody>
            <td class="center aligned" id="valIni" value="${valoracionlineaIni}">
            ${valoracionlineaIni} 
            </td>
            <td class="center aligned" id="valFin" value="${valoracionlineaFin}">
            ${valoracionlineaFin}
            </td>
					  </tbody>
            </table>
              <br>
              <br>
            <div class="ui buttons">
           <button class="ui toggle button active" id="gra" onclick="graficas(${actiSeleccionada})">Conclusiones!</button>
              </div>
              </div>
              </td>
              <td>
                <button class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades},${valoracionlineaIni},${valoracionlineaFin})">Realizada</button></td>
              </tr>`
                      atras1 = true;
                    }
                    if (actividasnohechaslinea[i].id_actividades == id_actSele && actividasnohechaslinea[i].id_potencia == 3) {
                      gra = true;
                      actiSeleccionada = actividasnohechaslinea[i].id_actividades;
                      texto = ` <tr>
              <td class="center aligned">
                Descanso
                </td>
              <td>
                ${actividasnohechaslinea[i].nombre}
              </td>
              <td class="center aligned" id="t">${actividasnohechaslinea[i].descripcion}</td>
              <td id="botonsf">
              <div class="center aligned">
              <table>
					      <thead>
						    <tr>
							  <th>Valoracion C. Iniciales</th>
							  <th>Valoracion C. Finales</th>
						    </tr>
					  </thead>
					  <tbody>
            <td class="center aligned" id="valIni" value="${valoracionlineaIni}">
            ${valoracionlineaIni} 
            </td>
            <td class="center aligned" id="valFin" value="${valoracionlineaFin}">
            ${valoracionlineaFin}
            </td>
					  </tbody>
            </table>
              <br>
              <br>
              <div class="ui buttons">
              <button class="ui toggle button active" id="gra" onclick="graficas(${actiSeleccionada})">Conclusiones!</button>
              </div>
              </div>
              </td>
              <td>
                <button type="submit" class="ui positive button" onclick="botonAcSeleccion(${actividasnohechaslinea[i].id_actividades},${valoracionlineaIni},${valoracionlineaFin})">Realizada</button></td>
              </tr>`
                      atras1 = true;
                    }
                  }
                  $("#actiSele").append(texto);

                  $('.ui.modal')
                  $("#detalles").modal('show')
                  valoracionlineaIni = 0;
                  valoracionlineaFin = 0;
                  valorauxIni = 0;
                  valorauxFin = 0;
                }, error: function (error) {
                  console.log(error)
                }
              });

            }
          }, error: function (error) {
            console.log(error)
          }
        });
      }



    },
    error: function (error) {
      console.log(error); // Imprimir respuesta de error
    }

  });
}

function criteriosFina(criterio2) {
  datos = {
    "id_adulto_mayor": adultolinea.id_adulto_mayor,
    "id_actividades": actiSeleccionada,
    "criterio": 1
  }
  $("#primeFinal").empty();
  var text = '';
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Auto/cIniciales",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      if (response == 0) {
        alert("Aun no registras criterios inciales, ¡Registralos!");
      } else {
        for (var i = 0; i < response.length; i++) {
          text += `<tr>
          <td class="center aligned" id="nomcriterioa${i + 1}">${response[i].descripcion}</td>
          <td id="bot2${i + 1}" class="center aligned">
            <div class="ui buttons">
              <button class="ui button" onclick="valorValoracion2(1,${i + 1})">1</button>
              <button class="ui button" onclick="valorValoracion2(2,${i + 1})">2</button>
              <button class="ui button" onclick="valorValoracion2(3,${i + 1})">3</button>
              <button class="ui button" onclick="valorValoracion2(4,${i + 1})">4</button>
            </div>
          </td>
          </tr>`
        }
        $("#primeFinal").append(text);

        document.getElementById("termino").value = '';
        $('.ui.modal')
        $("#detalles").modal('hide')
          ;
        $('.ui.modal')
        $("#criteriosFin").modal('show')
          ;
      }
    }, error: function (error) {
      console.log(error)
    }
  });


}



function criteriosIni(criterio) {

  $("#prime").empty();
  var text = '';
  text += `<tr>
<td class="center aligned" id="nomcriterio1">1. Estado de ánimo.</td>

<td id="bot1" class="center aligned">
  <div class="ui buttons">
    <button class="ui button" onclick="valorValoracion(1,1)">1</button>
    <button class="ui button" onclick="valorValoracion(2,1)">2</button>
    <button class="ui button" onclick="valorValoracion(3,1)">3</button>
    <button class="ui button" onclick="valorValoracion(4,1)">4</button>
  </div>
</td>
</tr>


<tr>
<td class="center aligned" id="nomcriterio2">2. Nivel de conciencia emocional ante la situacion.</td>
<td id="bot2" class="center aligned">
  <div class="ui buttons">
    <button class="ui button" onclick="valorValoracion(1,2)">1</button>
    <button class="ui button" onclick="valorValoracion(2,2)">2</button>
    <button class="ui button" onclick="valorValoracion(3,2)">3</button>
    <button class="ui button" onclick="valorValoracion(4,2)">4</button>
  </div>
</td>
</tr>

<tr>
<td class="center aligned" id="nomcriterio3">3. Nivel de Descanso</td>
<td id="bot3" class="center aligned">
  <div class="ui buttons">
    <button class="ui button" onclick="valorValoracion(1,3)">1</button>
    <button class="ui button" onclick="valorValoracion(2,3)">2</button>
    <button class="ui button" onclick="valorValoracion(3,3)">3</button>
    <button class="ui button" onclick="valorValoracion(4,3)">4</button>
  </div>
</td>
</tr>


<tr>
<td class="center aligned" id="nomcriterio4">4. Nivel de interes ante trabajos u actividades.</td>
<td id="bot4" class="center aligned">
  <div class="ui buttons">
    <button class="ui button" onclick="valorValoracion(1,4)">1</button>
    <button class="ui button" onclick="valorValoracion(2,4)">2</button>
    <button class="ui button" onclick="valorValoracion(3,4)">3</button>
    <button class="ui button" onclick="valorValoracion(4,4)">4</button>
  </div>
</td>
</tr>


<tr>
<td class="center aligned" id="nomcriterio5">5. Nivel de serenidad ante las situaciones negativas.</td>
<td id="bot5" class="center aligned">
  <div class="ui buttons">
    <button class="ui button" onclick="valorValoracion(1,5)">1</button>
    <button class="ui button" onclick="valorValoracion(2,5)">2</button>
    <button class="ui button" onclick="valorValoracion(3,5)">3</button>
    <button class="ui button" onclick="valorValoracion(4,5)">4</button>
  </div>
</td>
</tr>`
  $("#prime").append(text);

  $('.ui.modal')
  $("#detalles").modal('hide')
    ;
  $('.ui.modal')
  $("#criterios").modal('show')
    ;
  document.getElementById("termino").value = '';

}


function valorValoracion(id, rowCount) {
  event.preventDefault();
  $("#bot" + rowCount).empty();
  var tex = '';
  for (var i = 1; i <= 4; i++) {
    if (i == id) {

      tex += `<div class="center aligned">
    <button class="ui toggle button active" value="${i}" id="criterio${rowCount}">${i}</button>
    </div>`;
    }
  }
  $("#bot" + rowCount).append(tex);
}
function valorValoracion2(id, rowCount) {
  event.preventDefault();
  $("#bot2" + rowCount).empty();
  var tex = '';
  for (var i = 1; i <= 4; i++) {
    if (i == id) {

      tex += `<div class="center aligned">
    <button class="ui toggle button active" value="${i}" id="criteriof${rowCount}">${i}</button>
    </div>`;
    }
  }
  $("#bot2" + rowCount).append(tex);
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
  aleatorio();
  $("#seleccionAD").text("SELECCIONA...");
  texto = '';
  for (let j = 0; j < jsonadultos.length; j++) {
    if (jsonadultos[j].id_adulto_mayor === id_adulto_mayor) {
      adultolinea = jsonadultos[j];
      adultolinea.id_cuidador = cuidadorlinea.id_cuidador;
      jsonadultos = jsonadultos[j]
      $("#menucaja").empty();
      texto += ` <div class="item">${cuidadorlinea.nombre}</div><div class="item" onclick="cambiarAdul()">Cambiar adulto Mayor</div><div class="item" onclick="cerrarmenu()">Cerrar sesión</div>`
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


function cambiarAdul() {

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

  $("#adultos").empty();
  $("#menu").hide();
  $("#opcionesInicio").hide();
  $("#actiPsico").hide();
  $("#Miprogre").hide();
  $("#historial").hide();
  $("#historialvacio").hide();
  $("#actividadesCompletas").hide();
  $("#perfiladulto").hide();
  $("#historialPerfilVacio").hide();
  $("#selectPersonaMayor").show();
  $("#grafico").hide();

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
  $("#grafico").hide();


  document.getElementById("correoElectronico").value = '';
  document.getElementById("contrasenaLogin").value = '';


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
function graficas(actividad) {
  event.preventDefault();
  $("#concluNega").empty();
  $("#conCIniciales").empty();
  $("#historial").hide();

  var text = '';
  var valIni = [];
  var valFin = [];
  var auxIni = 0;
  var auxFin = 0;
  var aux3 = 0;
  datos = {
    "id_adulto_mayor": adultolinea.id_adulto_mayor,
    "id_actividades": actividad
  }
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Auto/cValoraciones",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    success: function (response) {
      for (i = 0; i < response.length; i++) {
        if (i < response.length / 2) {
          text += `<li>${response[i].descripcion}</li>`
          valIni[i] = response[i].valoracion;
        } else {
          valFin[aux3] = response[i].valoracion;
          aux3 = aux3 + 1;
        }
      }
      $("#conCIniciales").append(text);
      for (var i = 0; i < valIni.length; i++) {
        auxIni = auxIni + valIni[i];
        auxFin = auxFin + valFin[i];
      }

      auxIni = auxIni / (response.length/2);
      auxFin = auxFin / (response.length/2);
      auxIni=auxIni.toPrecision(3);
      auxFin=auxFin.toPrecision(3);
    if(auxFin<=auxIni){
    var t='';
    t=`<div class="ui centered negative message" >
    <i class="close icon"></i>
    <div class="header">
      Lamentablemente el promedio de los criterios iniciales es mayor que el promedio de los criterios finales
    </div>
    <p>Con una puntuacion incial de ${auxIni} y una puntuacion final de ${auxFin}</<p>
    <p>Con esto sabemos que la dicha actividad no favorecio positivamente a la potencializacion del tratamiento del adulto mayor ${adultolinea.nombre} ${adultolinea.apellido}</p>
    <p>¡Intentalo con otra actividad!</p>
    </div>`;
    $("#concluNega").append(t);
    }else{
      var t='';
      t=`<div class="ui positive message">
      <i class="close icon"></i>
      <div class="header">
        <b>¡Felicitaciones!</b> ¡La actividad realizada potencializo el tratamiento de tu adulto mayor!
      </div>
      <p>Con una valoracion en los criterios iniciles de ${auxIni} y una valoracion de los criterios finales de ${auxFin}</p>
      <p><b>¡Sorprendente!</b></p>
    </div>`;
      $("#concluNega").append(t);
    }

    }, error: function (error) {
      alert(error)
    }
  });
  



  var InicioChart = document.getElementById("Inicio").getContext("2d");
  var FinChart = document.getElementById("Fin").getContext("2d");
  datos = {
    "id_adulto_mayor": adultolinea.id_adulto_mayor,
    "id_actividades": actividad,
    "criterio": 1
  }
  datos2 = {
    "id_adulto_mayor": adultolinea.id_adulto_mayor,
    "id_actividades": actividad,
    "criterio": 2
  }
  elementosTablaIn(InicioChart, datos)
  elementosTablaFin(FinChart, datos2)
  $('.ui.modal')
  $("#detalles").modal('hide')
    ;
  $("#actiPsico").hide();
  $("#grafico").show();


}

function aleatorio() {
  $.ajax({
    url: "services/Auto/reco",
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }, success: function (e) {
      $("#recomen").empty();
      var text = '';
      text = `<p class="textoSegundoEn">${e[0].descripcion}</p>`
      $("#recomen").append(text);
    }, error: function (error) {
      console.log(error)
    }
  });
}

function elementosTablaFin(t, datos) {
  barChartFin.destroy();
  var nombreactividades = [];
  var valoracion = [];
  data = null;
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Auto/cFinales",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, success: function (e) {

      for (var i = 0; i < e.length; i++) {
        nombreactividades.push("Criterio Final: " + (i + 1))
        valoracion.push(e[i].valoracion)
      }

      var densityData = {
        label: "Criterios Finales",
        data: valoracion,
        backgroundColor: [
          'rgba(0, 99, 132, 0.6)',
          'rgba(30, 99, 132, 0.6)',
          'rgba(60, 99, 132, 0.6)',
          'rgba(90, 99, 132, 0.6)',
          'rgba(120, 99, 132, 0.6)',
          'rgba(150, 99, 132, 0.6)',
          'rgba(180, 99, 132, 0.6)',
          'rgba(210, 99, 132, 0.6)',
          'rgba(240, 99, 132, 0.6)'
        ],
        borderColor: [
          'rgb(0, 0, 0)'

        ],
        borderWidth: 2
      };


      var chartOptions = {
        indexAxis: 'y',
        scales: {
          x: {
            min: 0,
            max: 4,
            ticks: {
              stepSize: 1
            }
          }
        },
        elements: {
          rectangle: {
            borderSkipped: 'left',
          }
        }
      };

      barChartFin = new Chart(t, {
        type: 'bar',
        data: {
          labels: nombreactividades,
          datasets: [densityData]
        },
        options: chartOptions

      });


    }




  });

}


function elementosTablaIn(t, datos) {
  barChartIni.destroy();
  var nombreactividades = [];
  var valoracion = [];
  data = null;
  $.ajax({
    data: JSON.stringify(datos),
    url: "services/Auto/cIniciales",
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }, success: function (e) {

      for (var i = 0; i < e.length; i++) {
        nombreactividades.push("Criterio Inicial: " + (i + 1))
        valoracion.push(e[i].valoracion)
      }
      var densityData = {
        label: "Criterios Iniciales",
        data: valoracion,
        backgroundColor: [
          'rgba(8, 21, 138, 0.6)',
          'rgba(10, 40, 139, 0.6)',
          'rgba(12, 90, 156, 0.6)',
          'rgba(15, 120, 170, 0.6)',
          'rgba(19, 155, 183, 0.6)',
          'rgba(23, 170, 196, 0.6)',
          'rgba(26, 200, 200, 0.6)',
          'rgba(31, 233, 220, 0.6)',
          'rgba(37, 240, 230, 0.6)'

        ],
        borderColor: [
          'rgb(0, 0, 0)'
        ],
        borderWidth: 2
      };


      var chartOptions = {
        indexAxis: 'y',
        scales: {
          x: {
            min: 0,
            max: 4,
            ticks: {
              stepSize: 1
            }
          }
        },
        elements: {
          rectangle: {
            borderSkipped: 'left',
          }
        }
      };

      barChartIni = new Chart(t, {
        type: 'bar',
        data: {
          labels: nombreactividades,
          datasets: [densityData]
        },
        options: chartOptions

      });


    }




  });

}





