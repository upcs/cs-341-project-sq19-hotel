// Sign Up Functions

//Communicate with the server and database to send this info
function submit(){
	console.log("signup received.");
	var emailin = $('#signupEmail').val();
	var userin = $('#signupUsername').val();
	var passin = $('#signupPassword').val();
	var repeatPassin = $('#signupRepeatPassword').val();
	var validEmail = true;
	var validUser = true;
	var validPass = true;
	if(!emailEntered(emailin)){
		alert("Please enter a valid UP email address");
		validEmail = false;
	}
	if(!userEntered(userin)){
		alert("Please enter a valid username");
		validUser = false;
	}
	if(!passwordEntered(passin, repeatPassin)){
		alert("Please make sure your passwords match");
		validPass = false;
	}
	if(validEmail && validUser && validPass){
		console.log("Valid account.");
		$.post("/postSignup", {email: emailin, user: userin, pass: passin},
		function(result){
			if(result){
				console.log("Signup complete");
				$('.signup').hide();
				$('#signupComplete').show();
			}
			else{
				alert("There is already an account with that email or username");
			}
		});
	}
}

//Valid Email entered
function emailEntered(emailString) {
	var patt = new RegExp("[a-z]+[1-2]?[0-9]?@up.edu");
	return patt.test(emailString);
}

function userEntered(userString) {
	var patt = new RegExp("[a-zA-Z0-9.\-:]+");
	return patt.test(userString);
}

//Password matches the requirements
function passwordEntered(passwordString, repeatPasswordString) {
	var patt = new RegExp(".+");
	if (patt.test(passwordString) && passwordString === repeatPasswordString) {
		return true;
	}
	else {
		return false;
	}
}

module.exports = {
	emailEntered:emailEntered,
	userEntered:userEntered,
	passwordEntered:passwordEntered
}
