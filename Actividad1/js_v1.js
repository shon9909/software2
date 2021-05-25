function registrarAdulto(datos){
    $.ajax({
      data: JSON.stringify(datos),
      url: "services/Registro/guardarMedicacion",
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
