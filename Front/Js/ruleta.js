$( document ).ready(function() {
    elementosTabla()
});

var objRuleta;
var winningSegment;
var distnaciaX = 150;
var distnaciaY = 50;
var ctx ;
function Mensaje() {
  winningSegment = objRuleta.getIndicatedSegment();
	SonidoFinal();
  swal({
    title: " ¡ "+winningSegment.text+" !",
    imageUrl: "img/Muerte.png",
    showCancelButton: true,
    confirmButtonColor: "#e74c3c",
    confirmButtonText: "Ok,Reiniciar",
    cancelButtonText: "Quitar elemento",
    closeOnConfirm: true,
    closeOnCancel: true
  },
  function (isConfirm) {
    if (isConfirm) {} 
    else {
      $('#ListaElementos').val($('#ListaElementos').val().replace(winningSegment.text,""));
      leerElementos();
    }
    objRuleta.stopAnimation(false);
    objRuleta.rotationAngle = 0;
    objRuleta.draw();
    DibujarTriangulo();
    bigButton.disabled = false;
  });
}

function DibujarTriangulo() {
  distnaciaX = 150;
  distnaciaY = 50;
  ctx = objRuleta.ctx;
  ctx.strokeStyle = 'navy';
  ctx.fillStyle = '#000000';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(distnaciaX + 170, distnaciaY + 5);
  ctx.lineTo(distnaciaX + 230, distnaciaY + 5);
  ctx.lineTo(distnaciaX + 200, distnaciaY + 40);
  ctx.lineTo(distnaciaX + 171, distnaciaY + 5);
  ctx.stroke();
  ctx.fill();
}

function DibujarRuleta(ArregloElementos) {
  objRuleta = new Winwheel({
  'canvasId': 'Ruleta',
  'numSegments': ArregloElementos.length,
  'outerRadius': 270,
  'innerRadius': 80,
  'segments':ArregloElementos,
  'animation':{
                'type': 'spinToStop',
                'duration':4,
                'spins': 15,
					      'callbackFinished': 'Mensaje()',
                'callbackAfter': 'DibujarTriangulo()' 
					    }, 
  });
  DibujarTriangulo();
}

function leerElementos() {
  txtListaElementos=$('#ListaElementos').val().trim();
  var Elementos = txtListaElementos.split('\n');
  var ElementosRuleta= [];
  Elementos.forEach(function (Elemento) {
                     if(Elemento){
                        ElementosRuleta.push({ 'fillStyle': "#" + ((1 << 24) * Math.random() | 0).toString(16), 'text': Elemento });
                      }
                    });
  DibujarRuleta(ElementosRuleta);
} 

leerElementos();
var audio = new Audio('alarma.MP3');  // Create audio object and load desired file.
function SonidoFinal(){
	audio.pause();
	audio.currentTime = 0;
	audio.play();
}

function elementosTabla(){
    var nombreactividades = [];
    $.ajax({
        url:'http://localhost:3000/actividadesI',
        type:'GET',
        dataType:'JSON',
        success: function(e){
			for (var i = 0; i < e.length ; i++) {
                nombreactividades.push(e[i].name)
            }
			for (var i = 0; i < nombreactividades.length ; i++) {
				texto =  nombreactividades[i] 
				$("#ListaElementos").append(texto);
				texto = '\n'
				$("#ListaElementos").append(texto);
			}	
		}
	});

}

