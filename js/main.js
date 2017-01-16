$(document).ready(function() {   
	// for mobile navigation
	var sideslider = $('[data-toggle=collapse-side]');
	var sel = sideslider.attr('data-target');
	var sel2 = sideslider.attr('data-target-2');
	sideslider.click(function(event){
		$(sel).toggleClass('in');
		$(sel2).toggleClass('out');
	});


	// for main slider
	$('.main-slider').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		centerPadding: '0',
	});

	

	// for mobile menu submenu
	$(".sub-menu-mobile > a")['on']("click", function(){

		if ($(this).parent().children(".sub-menu-block").css("display") == "none"){
			$(".sub-menu-block").css("display","none");

			$(this).parent().children(".sub-menu-block").css({"display" : "block"});

			return false;
		}

	});

	// enable search form 
	$(".btn-search").click(function() {
		$(".search-block").toggleClass("search-visible");
	});

	$("#submit-voiting").click(function() {
		$(".voiting-result-sign").css({
			"display" : "block"
		});
		$(".voting-form-wrapper").css({
			"display" : "none"
		});
		$(".voting-form-result-wrapper").css({
			"display" : "block"
		});
	});

	// for show filter block
	$(document).ready(function() {
		$(".filter-btn").click(function() {
			$(".filter-block").toggleClass("filter-actve");
		});
		$(".filter-header").click(function() {
			$(".filter-menu-content").toggleClass("filter-menu-content-actve");
		});
	});

	// for press-center slider
	$('.press-center-more-slider').slick({
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 3
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '40px',
				slidesToShow: 1
			}
		}
		],
		nextArrow: '<div class="slider-next"><i class="fa fa-angle-right"></i></div>',
		prevArrow: '<div class="slider-prev"><i class="fa fa-angle-left"></i></div>',
	});

	// press-center- more page fancybox
	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});
	
});