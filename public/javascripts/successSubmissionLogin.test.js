var login = require('./successSubmissionLogin.js');

test('Empty parameters', () => {
	expect(login.validateSubmission("", "")).toBe(false);
});

test('No UP email', () => {
	expect(login.validateSubmission("jayazicate", "1hfs24swB!"))
})

test('Correct parameters', () => {
	expect(login.validateSubmission("azicate20@up.edu", "1hfs24swB!")).toBe(true);
});


