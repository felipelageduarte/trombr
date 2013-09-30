console.log('JavaScript Carregado com sucecsso!!!');
/*
function resizeImg(){
	var windowWidth = $(window).width();
	
	var usplogo = $('#usplogo');
	if(windowWidth <= 670){          
	  usplogo.attr('width',windowWidth-50);
	  usplogo.attr('height',((windowWidth-50)*264)/620);
	} else {
	  usplogo.attr('width','620');
	  usplogo.attr('height','264');
	}
	
	var iaulogo = $('#iaulogo');
	if(windowWidth <= 421){          
	  iaulogo.attr('width',windowWidth-50);
	  iaulogo.attr('height',((windowWidth-50)*368)/371);
	} else {
	  iaulogo.attr('width','371');
	  iaulogo.attr('height','368');
	}
}

$(window).load(resizeImg);
$(window).resize(resizeImg);
*/

$(document).ready(function(){
	// Grab a select field
	var el = $('#climasSelectMenu');

	// Select the relevant option, de-select any others
	el.val('some value').attr('selected', true).siblings('option').removeAttr('selected');

	// Initialize the selectmenu
	el.selectmenu();
	console.log("dentro");
	// jQM refresh
	el.selectmenu("refresh", true);
});

$(document).change(function(){
    var latitude = $("#LatitudeTextInput").val();
	item = new String;
	
	if(latitude < -23.5){	
		item += '<option value=1>Frio</option>';
		item += '<option value=2>Subtropical</option>';
		item += '<option value=3>Temperado</option>';
	}else {
		item += '<option value=1>Tropical de Altitude</option>';
		item += '<option value=2>Quente e Úmido</option>';
		item += '<option value=3>Quente e Seco</option>';
		item += '<option value=4>Continental</option>';
	}
	$('#climasSelectMenu').html(item).trigger("create");
});

function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function submitCodigo(){
	//validação do código inserido pelo usuário
	var lat = document.forms["climaForm"]["LatitudeTextInput"].value;
	var clima = document.forms["climaForm"]["climasSelectMenu"].value;
	
	if(lat < -33.77 || lat > 4.5) 
		alert("Latitude inválida. Forneça um valor no intervalor [-33.77,+4.5]");
	
	if(clima == -1)
		alert("Selecione um clima válido");
		
	if(lat < -23.5){
		if(clima == 1){
			window.location="./clima1.html";
		}else if(clima == 2){
			window.location="./clima3.html";
		}else if(clima == 3){
			window.location="./clima2.html";
		}else{
			alert("Selecione um clima válido");
		}
	}else if( lat < -15){
		if(clima == 1){
			window.location="./clima4.html";
		}else if(clima == 2){
			window.location="./clima8.html";
		}else if(clima == 3){
			window.location="./clima7.html";
		}else if(clima == 4){
			window.location="./clima6.html";
		}else{
			alert("Selecione um clima válido");
		}	
	} else{
		if(clima == 1){
			window.location="./clima5.html";
		}else if(clima == 2){
			window.location="./clima11.html";
		}else if(clima == 3){
			window.location="./clima10.html";
		}else if(clima == 4){
			window.location="./clima9.html";
		}else{
			alert("Selecione um clima válido");
		}	
	}
	return false;
}