var pizzas = document.getElementById("pizzas");
var botonAbajo = document.getElementById("btnAbajo");
var botonArriba = document.getElementById("btnArriba");
var apuntar = document.getElementById("apuntar");
var desc = document.getElementsByClassName("des");
var abrirDescripcion = document.getElementsByClassName("btn");
var imagenes = document.getElementsByClassName("imagensotas");
var scroll = new SmoothScroll('a[href*="#"]',{speed: 1000});

var posicion = true;
var salto = 0;
var f=0;
var margen;

function abrirDesc(i){
	if (posicion==true){
		abrirDescripcion[i].className = 'fa fa-arrow-circle-down btn';
		desc[i].style.borderRadius = '20px';
		desc[i].style.marginTop = "-256px";	
		desc[i].style.height = '302px';	
		desc[i].style.position = 'relative';
		//imagenes[i].style.height = '300px';
		posicion=false;
	}else{
		abrirDescripcion[i].className = 'fa fa-arrow-circle-up btn';
		desc[i].style.borderRadius = '0px 0px 20px 20px';
		desc[i].style.marginTop = '0px';	
		desc[i].style.height = '52px';	
		desc[i].style.position = 'relative';
		//imagenes[i].style.height = '250px';
		posicion=true;
	}
}

abrirDescripcion[0].addEventListener('click', function(){abrirDesc(0);});
abrirDescripcion[1].addEventListener('click', function(){abrirDesc(1);});
abrirDescripcion[2].addEventListener('click', function(){abrirDesc(2);});
abrirDescripcion[3].addEventListener('click', function(){abrirDesc(3);});
abrirDescripcion[4].addEventListener('click', function(){abrirDesc(4);});
abrirDescripcion[5].addEventListener('click', function(){abrirDesc(5);});
abrirDescripcion[6].addEventListener('click', function(){abrirDesc(6);});
abrirDescripcion[7].addEventListener('click', function(){abrirDesc(7);});

function cerrarDesc(i){
	abrirDescripcion[i].className = 'fa fa-arrow-circle-up btn';
	desc[i].style.borderRadius = '0px 0px 20px 20px';
	desc[i].style.marginTop = '0px';	
	desc[i].style.height = '52px';	
	desc[i].style.position = 'relative';
	//imagenes[i].style.height = '250px';
	posicion=true;
}

//402.3999938964844
botonAbajo.addEventListener("click", function(){
	cerrarDesc(0);
	cerrarDesc(1);
	cerrarDesc(2);
	cerrarDesc(3);
	cerrarDesc(4);
	cerrarDesc(5);
	cerrarDesc(6);
	cerrarDesc(7);
	if(salto<=0){
		salto=0;
	}
	salto += 406;
	var intervalo = setInterval(function(){
			pizzas.scrollTop = pizzas.scrollTop + 6;
			if(pizzas.scrollTop <= salto){
				intervalo;	
			}else{
				clearInterval(intervalo);
				botonArriba.style.display = "block";
			}
		}, 6);

		//----------------------------------RESPONSIVE----------------------------//
		if(document.body.scrollWidth>300 && document.body.scrollWidth <= 676){
			if(salto >= 2842){
				botonAbajo.style.animation = "none";
				botonAbajo.style.display = "none";
				botonArriba.style.animation = "amarillo 1.5s infinite";
			}
		}else if(document.body.scrollWidth>676 && document.body.scrollWidth <= 1013){
			if(salto >= 1206){
				botonAbajo.style.animation = "none";
				botonAbajo.style.display = "none";
				botonArriba.style.animation = "amarillo 1.5s infinite";
			}
		}else if(document.body.scrollWidth>1013 && document.body.scrollWidth <= 1351){
			if(salto >= 804){
				botonAbajo.style.animation = "none";
				botonAbajo.style.display = "none";
				botonArriba.style.animation = "amarillo 1.5s infinite";
			}
		}else if(document.body.scrollWidth>1351){
			if(salto >= 406){
				botonAbajo.style.animation = "none";
				botonAbajo.style.display = "none";
				botonArriba.style.animation = "amarillo 1.5s infinite";
			}
		}

}, false);



botonArriba.addEventListener("click", function(){
	cerrarDesc(0);
	cerrarDesc(1);
	cerrarDesc(2);
	cerrarDesc(3);
	cerrarDesc(4);
	cerrarDesc(5);
	cerrarDesc(6);
	cerrarDesc(7);
		if(document.body.scrollWidth>300 && document.body.scrollWidth <= 676){
			if(salto >= 2842){
				salto=2842;
			}
		}else if(document.body.scrollWidth>676 && document.body.scrollWidth <= 1013){
			if(salto >= 1206){
				salto=1206;
			}
		}else if(document.body.scrollWidth>1013 && document.body.scrollWidth <= 1351){
			if(salto >= 804){
				salto=804;
			}
		}else if(document.body.scrollWidth>1351){
			if(salto >= 402){
				salto=406;
			}
		}

		salto -= 406;
		var intervalo = setInterval(function(){
			pizzas.scrollTop = pizzas.scrollTop - 6;
			if(pizzas.scrollTop > salto){
				intervalo;	
			}else{
				clearInterval(intervalo);
				botonAbajo.style.display = "block";
			}
		}, 6);

		if(salto<=0){
			botonArriba.style.display = "none";
			botonArriba.style.animation = "none";
			botonAbajo.style.animation = "amarillo 1.5s infinite";
		}

}, false);


window.addEventListener("load", function(){
	botonArriba.style.display = "none";
}, false);
