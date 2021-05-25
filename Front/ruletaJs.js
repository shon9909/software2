const array_concursantes=[
			//Se ingresan las actividades que lleva la rueta
			'Actividad 1'
			,'Actividad 2'
			,'Actividad 3'
			,'Actividad 4'
			,'Actividad 5'
			,'Actividad 6'
			,'Actividad 7'
		];
let canvas=document.getElementById("idcanvas");
let context=canvas.getContext("2d");
let center=canvas.width/2;

context.beginPath();
context.moveTo(center,center);
context.arc(center,center,center,0, 2*Math.PI);
context.lineTo(center,center);
context.fillStyle ='#33333333';
context.fill();

context.beginPath();
context.moveTo(center,center);
context.arc(center,center,center-10,0, 2*Math.PI);
context.lineTo(center,center);
context.fillStyle ='black';
context.fill();

for (var i = 0; i < array_concursantes.length; i++) {
	context.beginPath();
	context.moveTo(center,center);
	context.arc(center,center,center-20,i*2*Math.PI/array_concursantes.length, (i+1)*2*Math.PI/array_concursantes.length);
	context.lineTo(center,center);
	context.fillStyle =random_color();
	context.fill();
	context.save();
	context.translate(center, center);
	context.rotate(3*2*Math.PI/(5*array_concursantes.length)+i*2*Math.PI/array_concursantes.length);
	context.translate(-center, -center);
	context.font = "13px Comic Sans MS";
	context.textAlign = "right";
	context.fillStyle = "white";
	context.fillText(array_concursantes[i], canvas.width-30, center);
	context.restore();
}

let pos_ini=0;
let clic=0;
let movement;
function sortear(){
	if (clic==0) {
		let canvas=document.getElementById("idcanvas");
		movement=setInterval(function(){
			pos_ini+=10;
			canvas.style.transform='rotate('+pos_ini+'deg)';
		},10);
		clic=1;
		document.getElementById("idestado").innerHTML="Detener";
	}else{
		clearInterval(movement);
		clic=0;
		document.getElementById("idestado").innerHTML="Sortear";
	}
}

function random_color(){
	let ar_digit=['2','3','4','5','6','7','8','9'];
	let color='';
	let i=0;
	while(i<6){
		let pos=Math.round(Math.random()*(ar_digit.length-1));
		color=color+''+ar_digit[pos];
		i++;
	}
	return '#'+color;
}