/*---------------------------------------------------------------------------------- */
/* CONFIRMATION SUBMISSION POST
/* CS 341 | Nuxoll */
/*----------------------------------------------------------------------------------*/

//Function that is actually tested using jest and codecov
function validateSubmissionPost(textPostTitle, textPostBody) {
	if(textPostTitle == ""){
		console.log('failed, null');
		return false;
	}
	else if(textPostBody == "") {
		console.log('failed, null');
		return false;
	}
	
	//Does it fit within the length specifications?
	else if(textPostTitle.length > 200 || textPostTitle.length < 2) {
		console.log(textPostTitle.length);
		console.log('failed, too short');
		return false;
	}
	//Does it fit within the length specifications?
	else if(textPostBody.length < 2) {
		console.log(textPostBody.length);
		console.log('failed, too short');
		return false;
	}
	else { //Passes everything
		console.log('PASS');
		return true;
	}
}

//Function that does all the hard work in conjuction with the html
function submitClickPost() {
		
	// Make the  input consistent 
	var textPostTitle = $("#title").val();
	var textPostBody = $("#text").val();

	console.log(textPostTitle);
	console.log(textPostBody);
		
	// If statement to determine if vegan was detected, or to proceed.
	if (!validateSubmissionPost(textPostTitle, textPostBody)) {
		alert("One of the text areas is invalid.");	
	}
	else {
		//alert("safe");
		$.post("/postPost", {title: textPostTitle, body: textPostBody, id: "CS", user: "NuxollForPrez2020"},
		function(result){
		});
		$("#newPost").replaceWith("<h3> <br> Post has been submitted. <br> </h3>" );
		//alert("Form removed"); 
	}
}

//Main call that actually starts all the function running
function submissionPostSetUpMain() {
	$("#subbuttonPost").click(submitClickPost);
}

//Export to test
//NOTE: THIS WILL THROW AN ERROR ON THE CONSOLE -- "Module is not defined" 
//This is okay and should be ignored.
module.exports = {
	validateSubmissionPost:validateSubmissionPost
}
