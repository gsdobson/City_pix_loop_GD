
 function updateCity (){

//variable is the city selected///

	var city = $('#city-type').val();

	if (city == 'NYC'){
		$('body').attr('class','nyc');
	}

	else if (city == 'SF'){
		$('body').attr('class','sf');
	}

	else if (city == 'ATX'){
		$('body').attr('class','austin');
	}

	else if (city == 'SYD'){
	$('body').attr('class','sydney');
	}

	else if (city == 'LA'){
	$('body').attr('class','la');
	}

	console.log(city);
}

$(document).ready(function(){

//function to ensure image changes with selectoin///

	var images=['NYC', 'SF', 'LA', 'ATX', 'SYD'];

	for(i=0;i<images.length;i++){
		$('#city-type').append('<option value='+images[i]+'>'+images[i]+'</option>');
	}

		$('#city-type').change(updateCity);

});