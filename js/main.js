$(document).ready(function() {
	//intervalo de imagenes de slider
	$('.carousel').carousel({
		interval: 5000
	});

	//datepicker
	$(function() {
		//fecha de llegada
		$('#dateEntrada').datepicker();
		//fecha de salida
		$('#dateSalida').datepicker();
	});
});