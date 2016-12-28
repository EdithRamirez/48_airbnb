//slider de secciones
var prev = '<a class="slick-prev"><span class="fa fa-chevron-left fa-2x" aria-hidden="true"></span></a>';
var next = '<a class="slick-next"><span class="fa fa-chevron-right fa-2x" aria-hidden="true"></span></a>';
$('#sliderExper').slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	prevArrow : prev,
	nextArrow: next,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		}
	},
	{
		breakpoint: 600,
		settings: {
		slidesToShow: 3,
		slidesToScroll: 1
		}
	},
	{
		breakpoint: 480,
		settings: {
		slidesToShow: 2,
		slidesToScroll: 1
		}
	}
	]
});
$('#sliderAlojar').slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	prevArrow : prev,
	nextArrow: next,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		}
	},
	{
		breakpoint: 600,
		settings: {
		slidesToShow: 3,
		slidesToScroll: 1
		}
	},
	{
		breakpoint: 480,
		settings: {
		slidesToShow: 2,
		slidesToScroll: 1
		}
	}
	]
});

$('#sliderDestino').slick({
	slidesToShow: 6,
	slidesToScroll: 1,
	prevArrow : prev,
	nextArrow: next,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
		slidesToShow: 3,
		slidesToScroll: 1,
		infinite: true,
		}
	},
	{
		breakpoint: 600,
		settings: {
		slidesToShow: 3,
		slidesToScroll: 1
		}
	},
	{
		breakpoint: 480,
		settings: {
		slidesToShow: 3,
		slidesToScroll: 1
		}
	}
	]
});	