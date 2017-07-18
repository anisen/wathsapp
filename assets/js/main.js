$(document).ready( function(){


	$(".fa-microphone").click(function(event) {
		var mensaje= $("#input-mensajes").val();
		$("#acomu-msj").append('<div id="mensaje">'+mensaje+'</div>');
	});


});