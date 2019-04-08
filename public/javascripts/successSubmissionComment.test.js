//Unit Tests for successSubmissionComment
//Regulate what the user puts for a new comment

//Required 
var submitFunctionsComment = require('./successSubmissionComment.js');

//Test for the Course Name
//Format is the required JS file, and then '.', followed by the function that is to be tested
test('Non-empty Comment', () => {
	expect(submitFunctionsComment.validateSubmissionComment("")).toBe(false);
});