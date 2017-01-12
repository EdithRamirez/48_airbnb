$(document).ready(function() {
	//cambiar color de menu al hacer scroll
	var position = $('#myCarousel').position().top;
	var borde = $('.navbar-brand');

	$(window).on('scroll', function() {
		if ($(window).scrollTop() > position) {
			console.log(position);
			$('nav').addClass('nav-blanco');
			$(borde).addClass('borde');
		} else {
			$('nav').removeClass('nav-blanco');
			$(borde).removeClass('borde');
		}
	});
	
	//intervalo de imagenes de slid
	$('.carousel').carousel({
		interval: 5000
	});
	
	//datepicker calendario
	$(function() {
		//fecha de llegada
		$('#dateEntrada').datepicker();
		//fecha de salida
		$('#dateSalida').datepicker();
	});

	// $('input').on('click', function() {
	// 	$(this).css("border-bottom", "1px solid green")
	// });
});