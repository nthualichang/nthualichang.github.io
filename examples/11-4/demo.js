window.onload = function() {
	// Add an event listener using on() to all matched elements
	/*$('body > button').on('click', function() {
		alert('Button clicked!');
	});*/
	
	//Add an event listener using on() to the second matched element
	$('body > button').eq(1).on('click', function() {
		alert('Button clicked!');
	});

	$('body > input').eq(0).on('keyup', function() {
		let inputVal = $(this).val(); // val() = value   打字的內容 
		let textarea = $('body > textarea').eq(0);
		textarea.html(inputVal);
	});
};