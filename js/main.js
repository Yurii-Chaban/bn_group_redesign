
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
			$(".filter-block").toggleClass("filter-active");
		});
// click mobile filter lists
		// $(".filter-header-mobile")['on']("click", function(){

		// 	if ($(this).parent().children(".filter-menu-content").css("display") == "none"){
		// 		$(".filter-menu-content").css("display","none");
		// 		$(this).parent().children(".filter-menu-content").css({"display" : "block"});
		// 	}

		// });

		$(".filter-header-mobile").click(function() {
			if (!$(this).parent().children(".filter-menu-content").hasClass("filter-menu-content-active")) {
				$(".filter-menu-content").removeClass("filter-menu-content-active");
				$(this).parent().children(".filter-menu-content").toggleClass("filter-menu-content-active");
			}
			else {
				$(".filter-menu-content").removeClass("filter-menu-content-active");
			}
		});
// click desctop filter listst 
$(".filter-header").click(function() {
	if (!$(this).parent().children(".filter-menu-content").hasClass("filter-menu-content-active")) {
		$(".filter-menu-content").removeClass("filter-menu-content-active");
		$(this).parent().children(".filter-menu-content").toggleClass("filter-menu-content-active");
	}
	else {
		$(".filter-menu-content").removeClass("filter-menu-content-active");
	}
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

	// school more slider 
	// $('.school-slider').slick({
	// 	infinite: false,
	// 	centerMode: true,
	// 	speed: 300,
	// 	slidesToShow: 3,
	// 	slidesToScroll: 1,
	// 	centerPadding: '20px',
	// 	responsive: [
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			arrows: true,
	// 			centerMode: true,
	// 			centerPadding: '20px',
	// 			slidesToShow: 3
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 480,
	// 		settings: {
	// 			arrows: false,
	// 			centerMode: true,
	// 			centerPadding: '20px',
	// 			slidesToShow: 3
	// 		}
	// 	}
	// 	],
	// 	nextArrow: '<div class="btn-next"><i class="fa fa-angle-right"></i></div>',
	// 	prevArrow: '<div class="btn-prev"><i class="fa fa-angle-left"></i></div>',
	// });
	var swiper = new Swiper('.swiper-container', {
		nextButton: '.swiper-button-next',
		prevButton: '.swiper-button-prev',
		effect: 'coverflow',
		keyboardControl: true,
		loop: true,
		grabCursor: true,
		centeredSlides: true,
		slidesPerView: 'auto',
		slidesPerView: 1,
		autoplay: 52500,
		coverflow: {
			rotate: 0,
			stretch: 70,
			depth: 180,
			modifier: 1,
			slideShadows : true
		}
	});

	// press-center- more page fancybox
	$(".fancybox").fancybox({
		helpers: {
			overlay: {
				locked: false
			}
		}
	});

// use isotop
	// var $container = $('.grid'); 
	// $container.isotope({ 
	// 	filter: '*', 
	// 	animationOptions: { 
	// 		duration: 750, 
	// 		easing: 'linear', 
	// 		queue: false, 
	// 	}
	// }); 

	// $('.filter-list li a').click(function(){ 
	// 	var selector = $(this).attr('data-filter'); 
	// 	$container.isotope({ 
	// 		filter: selector, 
	// 		animationOptions: { 
	// 			duration: 750, 
	// 			easing: 'linear', 
	// 			queue: false, 
	// 		} 
	// 	}); 
	// 	return false; 
	// }); 


});

	// use slider
	jQuery(document).ready(function ($) {

		var jssor_1_options = {
			$AutoPlay: true,
			$SlideWidth: 600,
			$Cols: 2,
			$Align: 100,
			$ArrowNavigatorOptions: {
				$Class: $JssorArrowNavigator$
			},
			$BulletNavigatorOptions: {
				$Class: $JssorBulletNavigator$
			}
		};

		var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

		/*responsive code begin*/
		/*you can remove responsive code if you don't want the slider scales while window resizing*/
		function ScaleSlider() {
			var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
			if (refSize) {
				refSize = Math.min(refSize, 800);
				jssor_1_slider.$ScaleWidth(refSize);
			}
			else {
				window.setTimeout(ScaleSlider, 30);
			}
		}
		ScaleSlider();
		$(window).bind("load", ScaleSlider);
		$(window).bind("resize", ScaleSlider);
		$(window).bind("orientationchange", ScaleSlider);
		/*responsive code end*/
	});
