var clima = -1;
var latitude = $("#LatitudeTextInput").val();

//preenche o menu de clima inicial
loadMenu();
function loadMenu(){
	item = new String;	
	item += '<label for="climasSelectMenu" class="select">Selecione o Clima:</label>';
	item += '<select name="climasSelectMenu" id="climasSelectMenu">';
	if(latitude < -23.5){
		if(clima > 3 || clima < 1){
			item += '<option value=-1 selected>Selecione o Clima de sua preferência</option>';
			clima = -1;
		}
		item += '<option value=1 ' + ((clima == 1) ? "selected" : "") +'>Frio</option>';
		item += '<option value=2 ' + ((clima == 2) ? "selected" : "") +'>Subtropical</option>';
		item += '<option value=3 ' + ((clima == 3) ? "selected" : "") +'>Temperado</option>';
	}else {
		if(clima < 4){
			item += '<option value=-1 selected>Selecione o Clima de sua preferência</option>';
			clima = -1;
		}		
		item += '<option value=4 ' + ((clima == 4) ? "selected" : "") +'>Tropical de Altitude</option>';
		item += '<option value=5 ' + ((clima == 5) ? "selected" : "") +'>Quente e Úmido</option>';
		item += '<option value=6 ' + ((clima == 6) ? "selected" : "") +'>Quente e Seco</option>';
		item += '<option value=7 ' + ((clima == 7) ? "selected" : "") +'>Continental</option>';
	}
	item += "</select>";
	
	$('#climaSelect').html(item).trigger("create");
}

$('#climaSelect').on('change', function(){
	clima = $("#climasSelectMenu").val();
	loadMenu();
	clima = $("#climasSelectMenu").val();
//	alert(clima);
});

$("#latitudeRange").on('change', function(){
	latitude = $("#LatitudeTextInput").val();
	loadMenu();
});

//callback para submeter o formulario
$('#submit').on('click',function(){
	
	if(latitude < -33.77 || latitude > 4.5) {
		alert("Latitude inválida. Forneça um valor no intervalor [-33.77,+4.5]");
		return false;
	}
	
	if(clima == -1){
		alert("Selecione um clima válido");
		return false;
	}
	
	nextLocation = new String;
	if(latitude < -23.5){
		if(clima == 1){
			nextLocation="./clima1.html";
		}else if(clima == 2){
			nextLocation="./clima2.html";
		}else if(clima == 3){
			nextLocation="./clima3.html";
		}else{
			alert("Selecione um clima válido");
		return false;
		}
	}else if( latitude < -15){
		if(clima == 4){
			nextLocation="./clima4.html";
		}else if(clima == 5){
			nextLocation="./clima8.html";
		}else if(clima == 6){
			nextLocation="./clima7.html";
		}else if(clima == 7){
			nextLocation="./clima6.html";
		}else{
			alert("Selecione um clima válido");
		return false;
		}	
	} else{
		if(clima == 4){
			nextLocation="./clima5.html";
		}else if(clima == 5){
			nextLocation="./clima11.html";
		}else if(clima == 6){
			nextLocation="./clima10.html";
		}else if(clima == 7){
			nextLocation="./clima9.html";
		}else{
			alert("Selecione um clima válido");
		return false;
		}	
	}
//	alert("lat: " + latitude + " | clima: " + clima + " | nextLocation: " + nextLocation);
//	window.location=nextLocation;
//	window.location.href = nextLocation;
	$.mobile.changePage(nextLocation);
	return true;
});



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

