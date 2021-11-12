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
	console.log(siteTitle);
}