//console.log('Hi!');

// window: The entire browser window

var winWidth = window.innerwidth;
var winHeight = window.innerHeight;

//console.log(winWidth);
//console.log(winHeight);  //這兩行沒印出來

//window.location.href = 'https://google.com';
//window.location.pathname = '/nosuchpath';

window.onload = function() {   // 確定整個html建立好再存取html的內容
	//alert('Website is ready!');
	// window.document: The entire HTML document
	// document: The entire HTML document
	let siteTitle = document.title;
	//console.log(siteTitle);

	let allDivs = document.getElementsByTagName('div');
	//console.log(allDivs.length;)
	//console.log(allDivs[0]);
	//console.log(allDivs[1].innerText);

	let emById = document.getElementById('div3');
	//console.log(emById.innerText);

	let classEms = document.getElementsByClassName('group1');
	//console.log(classEms[0].innerText);

	let emBySelector = document.querySelector('div > p'); // First match only
	//console.log(emBySelector);

	let emsBySelector = document.querySelectorAll('div > p'); // All matches
	//console.log(emsBySelector.length);
}