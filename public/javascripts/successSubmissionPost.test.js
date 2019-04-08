//Unit Tests for successSubmissionPost
//Regulate what the user puts for a new post

//Required 
var submitPostFunctions = require('./successSubmissionPost.js');

//Test to see if Title is Okay
test('Empty title fails', () => {
	expect(submitPostFunctions.validateSubmissionPost("", "hi how are ya")).toBe(false);
});
test('Empty Body fails', () => {
	expect(submitPostFunctions.validateSubmissionPost("How are you?", "")).toBe(false);
});
test('Too short of title to be constructive', () => {
	expect(submitPostFunctions.validateSubmissionPost("O", "I'm fine how are you?")).toBe(false);
});
test('Too short of body to be constructive', () => {
	expect(submitPostFunctions.validateSubmissionPost("How are you?", "O")).toBe(false);
});

test('Valid entry', () => {
	expect(submitPostFunctions.validateSubmissionPost("How are you?", "I'm doing very well, thank you for asking.")).toBe(true);
});

//Resources
//https://jestjs.io/docs/en/expect
//Ben Tribelhorn: Syntex for referencing the JS file and then the functions
