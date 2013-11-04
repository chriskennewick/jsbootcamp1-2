$(document).ready(function() {

	$('.form-group').children('input').focus(function(){
		$(this).css({"background-color":"#fffff0"})
	});

	$('.form-group').children('input').blur(function(){
		$(this).css({"background-color":"#f3f3f3"});
	});
})