var cont=3
$("#Btn_crear").click(function(){
  event.preventDefault();
  let tabla=document.querySelector('#body_actividades');
  var estado=false 
  var actividad=$("#actividadtxt").val();
  var fecha=$("#fechatxt").val();
  if ($('#estadocheck').is(":checked"))
	{
		estado=true;
	}else{
		estado=false;
	}
  cont=cont+1;
  console.log(cont);
  tabla.innerHTML+="<tr>"+"<th scope='row'>"+cont+"</th>"+
	          "<td>"+fecha+"</td>"+
	          "<td>"+actividad+"</td>"+
	          "<td>"+
	          "<input type='checkbox' class='btn-check' id='btn-check' autocomplete='off'>"+
	          "</td>"+
	          "</tr>"
  $('#agregarActividad_Modal').modal('hide')
  //tabla.innerHTML+='';
});

