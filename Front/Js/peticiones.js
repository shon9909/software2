const header = document.querySelector('header');
$("#a").on("click",function (event){
    nombre=$("#n").val();
  correo=$("#e").val();
  contra=$("#c").val(); 

  datos={
    "email": correo,
    "nombre": nombre,
    "password": contra
    
  }
  console.log(datos)
  var url = "http://localhost:8080/nonapp/services/Registro/Cuidador"; // URL a la cual enviar los datos
  enviarDatos(datos, url); // Ejecutar cuando se quiera enviar los datos
  });



function enviarDatos(datos, url){
  $.ajax({
          data: datos,
          url: url,
          method: 'POST',
          crossOrigin: null,
          crossDomain : true,
          xhrFields: {
              withCredentials: true
          },
          success:  function (response) {
              console.log(response); // Imprimir respuesta del archivo
          },
          error: function (error) {
              console.log(error); // Imprimir respuesta de error
          }
          
  });
}
