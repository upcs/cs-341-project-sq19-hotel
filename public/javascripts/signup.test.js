//Created by Langley Vogt
//Unit Tests for signup.js
//Regulate what the user can enter as their username and password

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

//Test to see if username is valid
test('a is a valid username', () => {
	expect(signup.userEntered("a")).toBe(true);
});
test('null is an invalid username', () => {
 expect(signup.userEntered("a")).toBe(true);
});

//Test to see if the password is valid
test('Needs to be a valid password with matching passwords', () => {
	expect(signup.passwordEntered("a", "a")).toBe(true);
});
test('Not a valid password', () => {
	expect(signup.passwordEntered(null)).toBe(false);
});
