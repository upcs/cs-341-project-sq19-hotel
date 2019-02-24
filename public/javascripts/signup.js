// Sign Up Functions
//Communicate with the server and database to send this info

//Valid Email entered
function emailEntered(emailString) {
	var patt = /[a-z]+[1-2]?[0-9]?@up.edu/i;
	var match = emailString.match(patt);
	if(match == emailString){
		return true;
	}
	return false;
}

//Password matches the requirements
function passwordEntered(passwordString) {
	
	if (passwordString !== null) {
		return true;
	}
	else {
		return false;
	}
}

module.exports = emailEntered;
module.exports = passwordEntered;
