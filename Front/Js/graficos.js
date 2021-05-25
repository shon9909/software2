let InicioChart = document.getElementById("Inicio").getContext("2d");
let FinChart = document.getElementById("Fin").getContext("2d");

elementosTabla(InicioChart)
elementosTabla(FinChart)
console.log(InicioChart)


function elementosTabla(t){
    var nombreactividades = [];
    var valoracion = [];
    $.ajax({
        url:'http://localhost:3000/actividadesI',
        type:'GET',
        dataType:'JSON',
        success: function(e){
            for (var i = 0; i < e.length ; i++) {
                nombreactividades.push(e[i].name)
                valoracion.push(e[i].valoracion)
            }
            var densityData = {
                label: t.canvas.id,
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
                  'rgba(0, 99, 132, 1)',
                  'rgba(30, 99, 132, 1)',
                  'rgba(60, 99, 132, 1)',
                  'rgba(90, 99, 132, 1)',
                  'rgba(120, 99, 132, 1)',
                  'rgba(150, 99, 132, 1)',
                  'rgba(180, 99, 132, 1)',
                  'rgba(210, 99, 132, 1)',
                  'rgba(240, 99, 132, 1)'
                ],
                borderWidth: 2
              };
              
              var chartOptions = {
                  indexAxis: 'y',
              };
              
              var barChart = new Chart(t, {
                type: 'bar',
                data: {
                  labels:nombreactividades,
                  datasets: [densityData]
                },
                options: chartOptions
              });
        }
    });	
    
}

