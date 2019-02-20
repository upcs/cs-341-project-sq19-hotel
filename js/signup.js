// Sign Up Functions
//Communicate with the server and database to send this info


emailString = "string1";
passwordString = "string2";

//Valid Email entered
function emailEntered(emailString) {
	
	if (emailString !== null) {
		return true;
	}
	else {
		return false;
	}
	//enter actual test stuff here
	
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