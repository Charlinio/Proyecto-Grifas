var pizzas = document.getElementById("pizzas");
var botonAbajo = document.getElementById("btnAbajo");
var botonArriba = document.getElementById("btnArriba");

var salto = 0;

//402.3999938964844
botonAbajo.addEventListener("click", function rotar(){
	if(salto<=0){
		salto=0;
	}
	salto += 402;
	var intervalo = setInterval(function(){
			pizzas.scrollTop = pizzas.scrollTop + 6;
			if(pizzas.scrollTop <= salto){
				intervalo;	
			}else{
				clearInterval(intervalo);
				botonArriba.style.display = "block";
			}
		}, 6);

		

}, false);

botonArriba.addEventListener("click", function rotar(){
		if(salto >= 2814){
			salto=2814;
		}
		salto -= 402;
		var intervalo = setInterval(function(){
			pizzas.scrollTop = pizzas.scrollTop - 6;
			if(pizzas.scrollTop > salto){
				intervalo;	
			}else{
				clearInterval(intervalo);
				botonAbajo.style.display = "block";
			}
		}, 6);

		if(pizzas.scrollTop <= 0){
			
		}
}, false);


window.addEventListener("load", function(){
	botonArriba.style.display = "none";

}, false);











