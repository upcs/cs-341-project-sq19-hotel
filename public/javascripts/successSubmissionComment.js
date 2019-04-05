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
		if (!validateSubmissionPost(textPostTitle, textPostBody)) {
			alert("One of the text areas is invalid.");	
		}
		else {
			var token = document.cookie;
			$.post("/checkToken", {token: token}, function(result){
				if(!result[0]){
					$("#newPost").replaceWith("<h3> <br> Please sign up or log in first! <br> </h3>" );
				}
				else{
					var id = ~~((Math.random() * 100000000) + 1000);
					$.post("/postComment", {title: textPostTitle, body: textPostBody, parent: , user: result[1].user, id: id}, function(result){ });
					$("#newPost").replaceWith("<h3> <br> Post has been submitted. <br> </h3>" );
				}
			});
		}
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
