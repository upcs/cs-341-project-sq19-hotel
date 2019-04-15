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
	
	var parent = $("#post-placeholder").text();
		
	// If statement to determine if vegan was detected, or to proceed.
	if (!validateSubmissionComment(comment)) {
		alert("The text area is invalid.");	
	}
	else {
		var token = document.cookie;
		var user = null;
		console.log(token);
		if(token == null || token == "")
			$("#commentButtonsPopup").replaceWith("<h3> <br> Please login first! <br> </h3>" );
		else{
			$.post("/checkToken", {token: token}, function(result){
				if(!result[0]){
					$("#commentButtonsPopup").replaceWith("<h3> <br> Please login first! <br> </h3>" );
				}
				else{
					var id = ~~((Math.random() * 100000000) + 1000);
					$.post("/postComment", {body: comment, parent: parent, user: result[1].user, id: id}, function(result){ });
				
					//Delay needed or else it will get the post too early and wont have the new comment
					var delayInMilliseconds = 1000; //1 second

					//Call function to display new comment LIVE
					setTimeout;
					
					setTimeout(function() {
					  //code to be executed after 1 second
					  
					  classComment(parent);

					  function classComment(checkPost) {
						$.post("/classCommentGet/", {parent: checkPost}, function(data) {
							
							var list = document.getElementById("comment-placeholder");
							//Display the post clicked on with title and body
							
							indexNewComment = data.length-1;
							//Go to the last element added 
							newComment = data[(indexNewComment)];
							
							console.log("new comment: ", newComment);
							
							//Create ID for the element
							var id = "my" + (indexNewComment).toString + "Div";
							var name = document.createElement("label");
							name.innerHTML = (newComment.user).toString();
							list.appendChild(name);

							var linebreak1 = document.createElement("br");
							list.appendChild(linebreak1);

							//Set attributes
							var listinstance = document.createElement("input");
							listinstance.setAttribute("type","checkbox");
							listinstance.setAttribute("name","comment");
							listinstance.setAttribute("value",(newComment.id).toString()); //only the number for post request later
							
							list.appendChild(listinstance);
							
							var label = document.createElement("label");
							label.setAttribute("for",id);
							label.innerHTML = ("\n" + "&nbsp" + "&nbsp" + newComment.body).toString();
							list.appendChild(label);
							
							var linebreak2 = document.createElement("br");
							list.appendChild(linebreak2);
							
							$("#commentButtonsPopup").replaceWith("<h3> <br> Comment has been submitted. <br> </h3>" );
						
						});
					  }
					}, delayInMilliseconds);

				
				}
			});
		}
	}
}

//Main call that actually starts all the function running
function submissionCommentSetUpMain() {
	$("#submitCommentButton").click(submitClickComment);
		//console.log("Add comment button clicked");
}

//Export to test
//NOTE: THIS WILL THROW AN ERROR ON THE CONSOLE -- "Module is not defined" 
//This is okay and should be ignored.
module.exports = {
	validateSubmissionComment:validateSubmissionComment
}
