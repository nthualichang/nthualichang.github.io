function anotherMsg() {
	alert('I say the mouse cursor has entered the first div!');
}
window.onload = function() {
	let bodyEM = document.querySelector('body');
	bodyEM.addEventListener('click', function() {
		// Callback function 等click才會執行
		//alert('Body is clicked!');
	});

	let firstDiv = document.querySelector('div');
	//firstDiv.addEventListener('mouseenter', anotherMsg);

	let button = document.querySelector('button');
	button.addEventListener('click',function(){
		firstDiv.style.backgroundColor = 'red';
	})
};

