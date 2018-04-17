let encodeEmail = function(email) {
	let byteArray = [];
	for(i =0; i < email.length; i++) {
		byteArray.push(email.charCodeAt(i));
	}
	return encodeURIComponent(byteArray.toString());
}

let decodeEmail = function(encodedEmail) {
	let byteArray = decodeURIComponent(encodedEmail).split(',');
	let email = String.fromCharCode(...byteArray);

	return email;
}
