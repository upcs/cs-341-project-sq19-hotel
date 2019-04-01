// Test files for login.js
// Kaitlin Larson

var login = require('./login.js');
var $ = require('jquery');

// Test validateSubmission function
//      Should check that email and password fields are not empty

test('Empty email and password fields, rejected', () => {
	expect(login.validateSubmission("", "")).toBe(false);
});

test('Empty email field, rejected', () => {
	expect(login.validateSubmission("", "yeehaw")).toBe(false);
});

test('Empty password field, rejected', () => {
	expect(login.validateSubmission("doberman20@up.edu", "")).toBe(false);
});

test('Filled email and password fields, accepted', () => {
	expect(login.validateSubmission("doberman20@up.edu", "yeehaw")).toBe(true);
});

/*
// WIP
// Test submitClick function
//      Should send nonempty email and password to server
//      Should inform people if login is successful

// Set up document body
    document.body.innerHTML =
        '<div class="form-group">' +
            '<label for="loginEmail">Email Address</label>' +
            '<input type="email" class="form-control" id="loginEmail" placeholder="Enter email">' +
        '</div>' +
        '<div class="form-group">' +
            '<label for="loginPassword">Password</label>' +
            '<input type="password" class="form-control" id="loginPassword" placeholder="Password">' +
        '</div>'

// set up login information
var loginInfo = {
    email: "yeehaw@up.edu",
    pass: "yeehaw"
}

test('Empty email and/or password fields, alerts user', () => {
    // spy on alert window
    var alert = spyOn(window, 'alert');
    
    login.submitClick();
    expect(alert).toHaveBeenCalled();
});

test('Incorrect login information, alerts user', ()=> {
    
});

test('Correct login information, alerts user', ()=> {
    
});
*/
