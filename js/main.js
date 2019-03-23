	$(window).load(function() {

		/*выпадающее меню в навигации*/
		$('.menu-button').on('click', function(){
			$('.menu').toggleClass('menu_active');
		});

		/*Настройка select*/
		$('.select_checked').on('click', function(){
			$('.select__dropdown').toggleClass('select__dropdown_open');
		});
		//Передаем выбранное значение в списке
		$('.select__option').on('click', function(){
			var value = $(this).attr('data-value');
			$('#select-type').val(value);
			$('.select_checked').text(value);
			$('.select__dropdown').toggleClass('select__dropdown_open');
		});

		/*слайдер до и росле*/
  $(".before-after").twentytwenty({
			//default_offset_pct: 0.7, // How much of the before image is visible when the page loads
   //orientation: 'vertical', // Orientation of the before and after images ('horizontal' or 'vertical')
   before_label: 'До нас', // Set a custom before label
   after_label: 'После нас', // Set a custom after label
   //no_overlay: true, //Do not show the overlay with before and after
   //move_slider_on_hover: true, // Move slider on mouse hover?
   //move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement. 
   //click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
		});

		/*слайдер slick*/
		$(".before-slider").slick({
			//autoplay:true, //автоматическое листание слайдеров
			draggable: false, //отключаем перелистывание пальцем
			//arrows: false, //убрать стрелки
			prevArrow: "<button type='button' class='arrow slick-prev'></button>",
			nextArrow: "<button type='button' class='arrow slick-next'></button>",
			dots: true, //отобразим точки для слайда
			//dotsClass: 'before-slider__dots' //присваиваем точкам наш класс или оставляеа по умолчанию slick-dots
		});

		/*Анимированная прокрутка при клике на ссылку с якорем*/
		$("a[href^='#']").click(function() {
			var _href = $(this).attr('href');
			$('html, body').animate({ scrollTop: $(_href).offset().top -100 + "px"});
			return false;
		});
		



























	/*стрелка прокрутки вверх*/
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() > 700) {
			$('.go-top').fadeIn();
		} else {
			$('.go-top').fadeOut();
		}
		});
			$('.go-top').click(function() {
			$('body,html').animate({scrollTop:0},600);
	});
});











}); 


