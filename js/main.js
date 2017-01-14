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

	// use video
	var videoPlayButton,
	videoWrapper = document.getElementsByClassName('video-wrapper')[0],
	video = document.getElementsByTagName('video')[0],
	videoMethods = {
		renderVideoPlayButton: function() {
			if (videoWrapper.contains(video)) {
				this.formatVideoPlayButton()
				video.classList.add('has-media-controls-hidden')
				videoPlayButton = document.getElementsByClassName('video-overlay-play-button')[0]
				videoPlayButton.addEventListener('click', this.hideVideoPlayButton)
			}
		},

		formatVideoPlayButton: function() {
			videoWrapper.insertAdjacentHTML('beforeend', '\
				<svg class="video-overlay-play-button" viewBox="0 0 200 200" alt="Play video">\
				<circle cx="100" cy="100" r="90" fill="none" stroke-width="5" stroke="#ffaf13"/>\
				<polygon points="70, 55 70, 145 145, 100" fill="#ffaf13"/>\
				</svg>\
				')
		},

		hideVideoPlayButton: function() {
			video.play()
			videoPlayButton.classList.add('is-hidden')
			video.classList.remove('has-media-controls-hidden')
			video.setAttribute('controls', 'controls')
		}
	}

	videoMethods.renderVideoPlayButton();

	// hide poster video on click play video
	$(".video-overlay-play-button").click(function() {
		$(".poster-img").css({
			"display" : "none"
		});
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
});