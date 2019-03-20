//Unit Tests for login.js
//Regulate what the user puts for a new class

//Required 
var loginSub = require('./login.js');

test('Empty login or password email', () => {
	expect(loginSub.validateSubmission(null, null)).toBe(false);
});
test('Email or password is invalid', () => {
	expect(loginSub.validateSubmission(null, "12345")).toBe(false);
});
test('Valid login', () => {
	expect(loginSub.validateSubmission("vogtl19@up.edu", "123456")).toBe(false);
});
test('Valid login', () => {
	expect(loginSub.validateSubmission("vogtl19@up.edu", "123456")).toBe(true);
});
test('No email extension', () => {
	expect(loginSub.validateSubmission("vogtl19", "123456")).toBe(false);
});
test('Not UP email extension', () => {
	expect(loginSub.validateSubmission("vogtl19@gmail.com", "123456")).toBe(false);
});
test('Not UP email, without graduating year', () => {
	expect(loginSub.validateSubmission("vogt@up.edu", "123456")).toBe(false);
});
test('Password too short', () => {
	expect(loginSub.validateSubmission("vogtl19@up.edu", "0")).toBe(false);
});