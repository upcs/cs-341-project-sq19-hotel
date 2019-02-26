//Created by Langley Vogt
//Unit Tests for signup.js
//Regulate what the user can enter as their username and password

//Required 
var signup = require('./signup.js');

//Test to see if the email is valid
test('a is not a valid email', () => {
	expect(signup.emailEntered("a")).toBe(false);
});
test('nuxoll@gmail.com is not a valid email', () => {
	expect(signup.emailEntered("nuxoll@gmail.com")).toBe(false);
})
test('nuxoll@up.edu is a valid email', () => {
	expect(signup.emailEntered("nuxoll@up.edu")).toBe(true);
})
test('schendel21@up.edu is a valid email', () => {
	expect(signup.emailEntered("schendel21@up.edu")).toBe(true);
})
test('schendel211@up.edu is not a valid email', () => {
	expect(signup.emailEntered("schendel211@up.edu")).toBe(false);
})
test('Not a valid UP email', () => {
	expect(signup.emailEntered(null)).toBe(false);
});

//Test to see if the email is valid
test('Needs to be a valid UP email', () => {
	expect(signup.passwordEntered("a")).toBe(true);
});
test('Not a valid UP email', () => {
	expect(signup.passwordEntered(null)).toBe(false);
});
