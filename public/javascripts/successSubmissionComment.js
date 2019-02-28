/*---------------------------------------------------------------------------------- */
/* CONFIRMATION SUBMISSION COMMENT
/* CS 341 | Nuxoll */
/*----------------------------------------------------------------------------------*/

//Function that is actually tested using jest and codecov
function validateSubmissionComment(comment) {
	
	if(comment == "") {
		console.log('failed, null');
		return false;
	}
	else { //Passes everything
		console.log('PASS');
		return true;
	}
}


//Function that does all the hard work in conjuction with the html
function submitClickComment() {
		
	// Make the  input consistent 
	var comment = $("#comment-textarea").val();
	
	console.log(comment);
		
	// If statement to determine if vegan was detected, or to proceed.
	if (!validateSubmissionComment(comment)) {
		alert("Comment area is invalid.");	
	}
	else {
		//alert("safe"); 
		$(".input-group").replaceWith("<h3> <br> Comment has been submitted. <br> </h3>" );
	}
}

//Main call that actually starts all the function running
function submissionCommentSetUpMain() {
	$("#comment-button").click(submitClickComment);
}

//Export to test
//NOTE: THIS WILL THROW AN ERROR ON THE CONSOLE -- "Module is not defined" 
//This is okay and should be ignored.
module.exports = {
	validateSubmissionComment:validateSubmissionComment
}