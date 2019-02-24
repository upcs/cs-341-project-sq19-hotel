//Created by Langley Vogt
//Unit Tests for signup.js
//Regulate what the user can enter as their username and password

//Required 
var emailEntered = require('./signup.js');
var passwordEntered = require('./signup.js');

//Test to see if the email is valid
test('Needs to be a valid UP email', () => {
	//var a = "hi";
	expect(emailEntered("a")).toBe(true);
});
test('Not a valid UP email', () => {
	//var a = "hi";
	expect(emailEntered(null)).toBe(false);
});

//Test to see if the email is valid
test('Needs to be a valid UP email', () => {
	//var a = "hi";
	expect(passwordEntered("a")).toBe(true);
});
test('Not a valid UP email', () => {
	//var a = "hi";
	expect(passwordEntered(null)).toBe(false);
});