$(document).ready(function(){

	
	/*до и росле*/
	$(window).load(function() {
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
		$(".before-slider").slick({
			draggable: false //отключаем перелистывание пальцем
		});
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


