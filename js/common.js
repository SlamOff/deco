$(document).ready(function() {
	$('.select-label').click(function(){
		$(this).find('img').toggleClass('rotated');
		$(this).find('.interest-list').slideToggle(300);
	});
	var picture = $('.service-item').find('.service-item-pict');
	// $(picture).each(function(index, elem){
	// 	var indexEl = index + 1;
	// 	$(elem).attr('src', 'img/item_' + +(index + 1) + '.png')
	// 	$('.service-item').hover(function(){
	// 		console.log(this);
	// 		pict = $(this).find('.service-item-pict');
	// 		$(pict).attr('src', 'img/item_' + +(index + 1) + '_rose' + '.png');
	// 		console.log($(pict).attr('src', 'img/item_' + +(index + 1) + '_rose' + '.png'));
	// 		$(pict).css('opacity', '1');
	// 		// console.log(index)
	// 	},
	// 	function(){
	// 		$(elem).attr('src', 'img/item_' + +(index + 1) + '.png');
	// 		$(elem).css('opacity', '.25');
	// 	});
	// });
	// $('.service-item-subtitle span').click(function(){
	// 	$(this).
	// });
	jQuery(function($){
		$('.phone').mask('+38(099) 999-9999');
	});
	$('#form').validate({
		rules: {
			name: {
				required: true,
				minlength: 2,
				maxlength: 16
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true
			},
			message: {
				required: true
			}
		}
		
	});
	$('.toggle_btn').click(function(){
		$('.sandwich').toggleClass('active');
		if($('.navigation').is(':visible')) {
			$('.navigation').slideUp(300);
		} else {
			$('.navigation').slideDown(300);
		};
	});
	$('.service-item').hover(function(){
			var thisPict = $(this).find('.service-item-pict');
			var pictures = $('.service-item').find('.service-item-pict');
			for(var i = 0; i < pictures.length ; i++){
				$(pictures[i]).attr('data-num', i + 1);
				$(thisPict).attr('src', 'img/item_' + $(thisPict).attr('data-num') + '_rose' + '.png');
				$(thisPict).css('opacity', '1');
			}
		},
		function(){
			var thisPict = $(this).find('.service-item-pict');
			var pictures = $('.service-item').find('.service-item-pict');
			for(var i = 0; i < pictures.length; i++){
				$(pictures[i]).attr('src', 'img/item_' + +(i + 1) + '.png');
				$(pictures[i]).css('opacity', '.25');
			}
		});
	
	$('.interest-list li').click(function(){
		var text = $(this).text();
		var input = $(this).closest('.feedback-form--left').find('#select')
		input.val(text);
		$('.interest-title').text(text);
	});
	// remove placeholder after click
		$('input, textarea').focus(function(){
			$(this).data('placeholder',$(this).attr('placeholder'))
			$(this).attr('placeholder','');
		});
		$('input, textarea').blur(function(){
			$(this).attr('placeholder', $(this).data('placeholder'));
		});
	window.onscroll = function(){
		var	scrolled = window.pageYOffset || document.documentElement.scrollTop,
			header = document.querySelector('.header');
		if (scrolled > 100 && $(window).width() > 768){
			$(header).addClass('header--scrolled');
		}
		else {
			$(header).removeClass('header--scrolled');
		}
	}
	$('.main-content-btn').click( function(){
	var scrollEl = $('.scroll').attr('href');
		if ($(scrollEl).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollEl).offset().top }, 400);
		}
		return false;
	});
	
	$('.navigation ul .scroll').click( function(){
	var scrollNav = $(this).attr('href');
		if ($(scrollNav).length != 0) {
			$('html, body').animate({ scrollTop: $(scrollNav).offset().top }, 400);
		}
		return false;
	});
// 	function arrowAnimate(){
// 		var arrow = $(this).find('span');
// 		$(arrow).css('top', '0');
// 	};
	
// 	function addEvent(elem, type){
// 		var elem = $(this).find('span');
// 		elem.addEventListener('mouseover', arrowAnimate);
// 	}
// 	var elem = $('.main-content--btn');
// 	addEvent();
// $('.main-content--btn:before').css('top',  '-100px');
	// ScrollTo
	//$('.menu a').mPageScroll2id();
	
	// toggle_btn
	// $('.toggle_btn').click(function(){
	// 	$(".sandwich").toggleClass("active");
	// 	if($('.menu').is(':visible')) {
	// 		$('.menu').slideUp(300);
	// 	} else {
	// 		$('.menu').slideDown(300);
	// 	};
	// });

	//popup
	// $('.popup').magnificPopup({
	// 	type: 'inline'
	// });

	// brand carousel
	// $('.brand_slider').slick({
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	prevArrow: '.brand_prev',
	// 	nextArrow: '.brand_next',
	// 	responsive: [
	// 		{
	// 		breakpoint: 1200,
	// 		settings: {
	// 			slidesToShow: 3
	// 		}
	// 		},
	// 		{
	// 		breakpoint: 992,
	// 		settings: {
	// 			slidesToShow: 2
	// 		}
	// 		},
	// 		{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 3
	// 		}
	// 		},
	// 		{
	// 		breakpoint: 620,
	// 		settings: {
	// 			slidesToShow: 2
	// 		}
	// 		},
	// 		{
	// 		breakpoint: 420,
	// 		settings: {
	// 			slidesToShow: 1
	// 		}
	// 		}
	// 	]
	// });
	
	





});
/*
// preloader
$(window).load(function(){
	$('.preloader_inner').fadeOut();
	$('.preloader').delay(100).fadeOut('fast');
});
*/