function printMsg(msg) {
	let finalMsg = 'Message: '+ msg;
	console.log(finalMsg);
}

printMsg('Test!');
printMsg('Another Test!');

function userMsg(name, msg) {
	let finalMsg = name + 'says: ' + msg;
	console.log(finalMsg);
}

userMsg('Victor', 'Surprise!');
userMsg('Mary', 'I love Victor!');