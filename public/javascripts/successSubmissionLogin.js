/*---------------------------------------------------------------------------------- */
/* CONFIRMATION SUBMISSION LOGIN
/* CS 341 | Nuxoll */
/*----------------------------------------------------------------------------------*/
function validateSubmissionLogin(textEmail, textPassword){
	// check if email and password fields are empty
	if(textEmail == "" || textPassword == ""){
		console.log('failed, null');
		return false;
	} else if(!textEmail.includes("@up.edu")){ // check if email contains @up.edu string
		console.log('failed, null');
		// PRETTY SURE THERE NEEDS TO BE MORE HERE
	} else { // everything else passes
		console.log('PASS')
		return true;
	}
}

// Function that does the work with the HTML
function submitClickLogin(){
	var textEmail = $("#loginEmail").val();
	var textPassword = $("#loginPassword").val();

	console.log(textEmail);
	console.log(textPassword);

	// AYYE GOOD FUCKING LUCK BECAUSE I LITERALLY HAD NO CLUE WHAT TO DO HERE ::::

	if(!validateSubmissionLogin(textEmail, textPassword)){
		alert("Login submission is invalid");
	} else {
		alert("Login submission is valid");
	}
}

//Main call that actually starts all the function running
function submissionLoginSetupMain(){
	$("#submitLogin").click(submitClickLogin);
}

//Export to test
//NOTE: THIS WILL THROW AN ERROR ON THE CONSOLE -- "Module is not defined" 
//This is okay and should be ignored.
module.exports = {
	validateSubmissionLogin:validateSubmissionLogin
}