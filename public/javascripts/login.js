// Login Functions
// Logs user into their personal account with all their info

/*---------------------------------------------------------------------------------- */
/* CONFIMATION SUBMISSION CLASS
/* CS 341 | Nuxoll */
/*----------------------------------------------------------------------------------*/

//Function that is actually tested using jest and codecov
function validateSubmission(email, pass) {
	var emailPatt = new RegExp("[a-z]+[1-2]?[0-9]?@up.edu");
	var passPatt = new RegExp(".+");
	if(emailPatt.test(email) && passPatt.test(pass))
		return true;
	return false;
}

function checkToken(){
	var token = document.cookie;
	console.log("Token: " + token);
	if (token != null && token != ""){
		$.post("/checkToken", {token: token},
		function(result){
			if(result[0]){
				$("#loginRow").replaceWith("<h3><br>Already Logged In!<br></h3>");
			}
		});
	}
}

//Function that does all the hard work in conjuction with the html
function submitClick() {
	// Make the  input consistent 
	var email = $("#loginEmail").val();
	var pass = $("#loginPassword").val();
		
	// If statement to determine if vegan was detected, or to proceed.
	if (!validateSubmission(email, pass)) {
		alert("Login information is invalid, try again.");	
	}
	else {
		$.post("/postLogin", {email: email, pass: pass},
		function(result){
			if(result[0] == true){
				$("#loginRow").replaceWith("<h3> <br> Login Successful! <br> </h3>" );
				document.cookie = result[1] + "; path=/";
				window.location.href = "../index.html";
			}
			else{
				alert("Incorrect email or password");
			}
		});
	}
}


//Export to test
//NOTE: THIS WILL THROW AN ERROR ON THE CONSOLE -- "Module is not defined" 
//This is okay and should be ignored.
module.exports = {
	validateSubmission:validateSubmission
}
