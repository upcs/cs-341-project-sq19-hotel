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
	
	//alert("made it");
	// Make the  input consistent 
	var comment = $("#textComment").val();
	
	console.log("HI", comment);
	
	var parent = $("#post-placeholder").text();
	
	//alert(parent);
	console.log(parent);
		
	// If statement to determine if vegan was detected, or to proceed.
	if (!validateSubmissionComment(comment)) {
		alert("The text area is invalid.");	
	}
	else {
		var token = document.cookie;
		var user = null;
		/* $.post("/checkToken", {token: token}, function(result){
			if(!result[0]){
				$("#newClassTitle").replaceWith("<h3> <br> Please sign up or log in first! <br> </h3>" );
			}
			else{
				var id = ~~((Math.random() * 100000000) + 1000);
				$.post("/postComment", {body: comment, parent: parent, user: result[1].user, id: id}, function(result){ });
				$("#newClassTitle").replaceWith("<h3> <br> Comment has been submitted. <br> </h3>" );
			}
		}); */
		
		var id = ~~((Math.random() * 100000000) + 1000);
		$.post("/postComment", {body: comment, parent: parent, user: "test", id: id}, function(result){ });
		$("#commentButtonsPopup").replaceWith("<h3> <br> Comment has been submitted. <br> </h3>" );

		//alert("Form removed"); 
	}
}

//Main call that actually starts all the function running
function submissionCommentSetUpMain() {
	$("#submitCommentButton").click(submitClickComment);
		console.log("Add comment button clicked");

}

//Export to test
//NOTE: THIS WILL THROW AN ERROR ON THE CONSOLE -- "Module is not defined" 
//This is okay and should be ignored.
module.exports = {
	validateSubmissionComment:validateSubmissionComment
}
