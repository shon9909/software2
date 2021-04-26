$( document ).ready(function() {
    obtenerinf ()
});

function obtenerinf (){
	mostrar_elementos(e);
}

function mostrar_elementos(e){
	var contenido = "" ;
	$("#contenidoTabla").empty();
	for (var i = 0; i < e.length ; i++) {
		contenido += `
			 		<tr>
						<th>${e[i].fecha}</th>
						<th>${e[i].descripcion}</th>
						<th>${e[i].nombre}</th>
						<th>${e[i].valoracion}</th>
					</tr>
				`
	}
	$("#contenidoTabla").append(contenido);
}