window.onload = function() {
	// Mixing jQuery codes with JavaScript codes
	let ps = $('body > p');
	//console.log(ps[0]);

	// Get the last element in Javascript and jQuery
	let ps = document.querySelectorAll('body > p');
	let emLength = ps.length;
	let lastPos = emLength - 1;
	console.log(ps[lastPos]);
};