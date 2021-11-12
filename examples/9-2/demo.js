window.onload = function() {
	let firstP = document.querySelector('div > p');
	//console.log(firstP.style);
	firstP.style.backgroundColor = 'red';
	firstP.style.color = 'white';

	let allDivPs = document.querySelectorAll('div > p');
	allDivPs[1].style.cssText = 'background-color: green; color: red;';
}