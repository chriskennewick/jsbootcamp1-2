$(document).ready(function() {

	$('.form-group').children('input').focus(function(){
		$(this).css({"background-color":"#ffffff"})
	});

	$('.form-group').children('input').blur(function(){
		$(this).css({"background-color":"#f3f3f3"});
	});
})