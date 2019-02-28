//Unit Tests for successSubmissionPost
//Regulate what the user puts for a new post

//Required 
var title = require('./successSubmissionPost.js');
var body = require('./successSubmissionPost.js');

//Test to see if Title is Okay
test('Non-Empty Course', () => {
	expect(title(null)).toBe(false);
});

//**************************************************
//Test to see if Body is Okay
test('Non-empty, valid course ID Number', () => {
	expect(body(null)).toBe(false);
});

//Resources
//https://jestjs.io/docs/en/expect