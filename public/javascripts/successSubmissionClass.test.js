//Unit Tests for successSubmissionClass
//Regulate what the user puts for a new class

//jest.mock('./successSubmissionClass.js');

//Required 
var submitFunctions = require('./successSubmissionClass.js');

//Test for the Course Name
//Format is the required JS file, and then '.', followed by the function that is to be tested
test('Non-Empty Course Name', () => {
	expect(submitFunctions.validateSubmission("", '101')).toBe(false);
});
test('Maximum 4 characters', () => {
	expect(submitFunctions.validateSubmission('EGRRR', '101')).toBe(false);
});
test('2 characters Min', () => {
	expect(submitFunctions.validateSubmission('C', '101')).toBe(false);
});
test('Correct Format', () => {
	expect(submitFunctions.validateSubmission('CS', '101')).toBe(true);
});

//*******************************************************
//Tests for Course Number entry
test('Non-Empty Course Num', () => {
	expect(submitFunctions.validateSubmission('EGR', "")).toBe(false);
});
test('Course Num exceeds 3 numbers', () => {
	expect(submitFunctions.validateSubmission('CS', '1234')).toBe(false);
});
test('Course Num is not 3 numbers', () => {
	expect(submitFunctions.validateSubmission('CS', '12')).toBe(false);
});
test('String in the course num', () => {
	expect(submitFunctions.validateSubmission('CS', '10I')).toBe(false);
});
test('Correct Format', () => {
	expect(submitFunctions.validateSubmission('CS', '101')).toBe(true);
});

test('Both Empty', () => {
	expect(submitFunctions.validateSubmission("", "")).toBe(false);
});
test('Both Valid!', () => {
	expect(submitFunctions.validateSubmission("CS", "101")).toBe(true);
});


//Resources
//https://jestjs.io/docs/en/expect