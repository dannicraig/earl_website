/*
Author       : Abubakar Siddique
Template Name: NecTech - Responsive App Landing Page
Version      : 1.0
*/

(function($)
{
	"use strict";
	
	// Preloader
	$(window).on('load', function() {
		preloader();
	})
	
	// JQuery for page scrolling feature - requires JQuery Easing plugin
	$(document).on('ready', function () {
		$('a.page-scroll').on('click', function(event) {
			$('.nav li').removeClass('active');
			$(this).parent().addClass('active');
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top-69
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		 
		$('body').scrollspy({ 
			target: '#navbar',
			offset: 70
		}) 
		$(".navbar-nav li a").on('click', function(event) {
			$("#navbar").trigger("offcanvas.toggle");
		});
		
		// Parallax Bg
		$('#banner').parallax("50%", 0.2);
		$('#fun-facts').parallax("50%", 0.2);
		$('#testimonials').parallax("50%", 0.2);
		$('#video').parallax("50%", 0.2);
		$('#subscribe').parallax("50%", 0.2);
		
		// Animation section
		 if($('.wow').length){
			var wow = new WOW(
			  {
				boxClass:     'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset:       0,          // distance to the element when triggering the animation (default is 0)
				mobile:       true,       // trigger animations on mobile devices (default is true)
				live:         true       // act on asynchronously loaded content (default is true)
			  }
			);
			wow.init();
		}
		// App Video
		function autoPlayYouTubeModal() {
			var trigger = $("body").find('[data-toggle="modal"]');
			trigger.on("click",function() {
			  var theModal = $(this).data("target"),
				videoSRC = $('#video-modal iframe').attr('src'),
				videoSRCauto = videoSRC + "?autoplay=1";
			  $(theModal + ' iframe').attr('src', videoSRCauto);
			  $(theModal + ' button.close').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			  $('.modal').on("click",function() {
				$(theModal + ' iframe').attr('src', videoSRC);
			  });
			});
		  }
		  autoPlayYouTubeModal();
		
		// CounterUp 
		$('.counter').counterUp({
			delay: 10,
			time: 2000
		});
		
		// Back to top 
		$(".back-top").hide();
		
		$('.back-top a').on('click', function(event) {
			$('body,html').animate({scrollTop:0},800);
			return false;
		});
	});
	
	$(window).on('scroll', function() {
		//Header
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	
		// Back to top 
		if($(this).scrollTop()>150){
			$('.back-top').fadeIn();
		}
		else{
			$('.back-top').fadeOut();
		}
		
		
	});
	
	// Preload
	function preloader(){
		$(".preloaderimg").fadeOut();
		$(".preloader").delay(200).fadeOut("slow").delay(200, function(){
			$(this).remove();
		});
	}
	
	// Vertical Center Modal
	function centerModals($element) {
		  var $modals;
		  if ($element.length) {
			$modals = $element;
		  } else {
			$modals = $('.modal-vcenter:visible');
		  }
		  $modals.each( function(i) {
			var $clone = $(this).clone().css('display', 'block').appendTo('body');
			var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
			top = top > 0 ? top : 0;
			$clone.remove();
			$(this).find('.modal-content').css("margin-top", top);
		  });
	}
		
	$('.modal-vcenter').on('show.bs.modal', function(e) {
	  centerModals($(this));
	});
	$(window).on('resize', centerModals);
	
})(jQuery);	
	
//fading image
