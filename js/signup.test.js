//Created by Langley Vogt
//Unit Tests for signup.js
//Regulate what the user can enter as their username and password

//Required 
var email = require('./emailEntered');
var password = require('./password');

//Test to see if the email is valid
test('Needs to be a valid UP email', () => {
  expect(email.emailEntered("a")).toBe(true);
});

//Test to see if password is valid
test('Password is valid', () => {
  expect(passwordEntered("b")).toBe(true);
});
