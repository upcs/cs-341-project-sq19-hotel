// Sign Up Functions
//Communicate with the server and database to send this info
//if(emailEntered(emailin) && userEntered(userin) && passwordEntered(passin, repeatPassin){


function submit(){
	console.log("signup received.");
	var emailin = $('#signupEmail').val();
	var userin = $('#signupUsername').val();
	var passin = $('#signupPassword').val();
	var repeatPassin = $('#signupRepeatPassword').val();
	$.post("/completeSignup", {email:emailin, user:userin, pass:passin},
	function(result){
		alert('Account added!');
	});
}

//Valid Email entered
function emailEntered(emailString) {
	var patt = new RegExp(/[a-z]+[1-2]?[0-9]?@up.edu/i);
	return patt.test(emailString);
}

function userEntered(userString) {
	if (userString !== null){
		return true;
	}
	else{
		return false;
	}
}

//Password matches the requirements
function passwordEntered(passwordString, repeatPasswordString) {
	if (passwordString !== null && passwordString === repeatPasswordString) {
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
