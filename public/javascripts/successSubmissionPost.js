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
		return true;
	}
}

//Function that does all the hard work in conjuction with the html
function submitClickPost() {
		
	// Make the  input consistent 
	var textPostTitle = $("#title").val();
	var textPostBody = $("#text").val();
	var parent = $("#class-placeholder").text();
		
	// If statement to determine if vegan was detected, or to proceed.
	if (!validateSubmissionPost(textPostTitle, textPostBody)) {
		alert("One of the text areas is invalid.");	
	}
	else {
		var token = document.cookie;
		var user = null;
		if(token == null || token == "")
			$("#newPost").replaceWith("<h3> <br> Please sign up or log in first! <br> </h3>" );
		else{
			$.post("/checkToken", {token: token}, function(result){
				if(!result[0]){
					$("#newPost").replaceWith("<h3> <br> Please sign up or log in first! <br> </h3>" );
				}
				else{
					var id = ~~((Math.random() * 100000000) + 1000);
					$.post("/postPost", {title: textPostTitle, body: textPostBody, parent: parent, user: result[1].user, id: id}, function(result){ });
					
					var delayInMilliseconds = 1000; //1 second

					setTimeout;
					
					setTimeout(function() {
					  //code to be executed after 1 second
					  
					  classPost(parent);

						//Depending on the number of times you click the options is how many times it prints the results???
						function classPost(checkedClassNum) {
							//Put another post request here
							$.post("/classPostsGet/", {parent: checkedClassNum}, function(data) {

								//This is what will be replaced in the html
								var list = document.getElementById("post-placeholder");
								
								indexNewPost = data.length-1;
								//Go to the last element added 
								newPost = data[(indexNewPost)];
							
								//console.log("data posts", data.length);
								//Create ID for the element
								var id = "my" + indexNewPost.toString() + "Div";
							
								var listinstance = document.createElement("input");
								
								//Set attributes
								listinstance.setAttribute("type","radio");
								listinstance.setAttribute("name","post");
								listinstance.setAttribute("value", newPost.id + "\n" + newPost.title + "\n \n" + newPost.body + "\n \n \n" + newPost.user);

								list.appendChild(listinstance);
								
								var label = document.createElement("label");
								label.setAttribute("for",id);
								label.innerHTML = ("&nbsp" + newPost.title + " - " + newPost.body).toString();
								list.appendChild(label);
								
								var linebreak = document.createElement("br");
								list.appendChild(linebreak);
								
								$("#newPost").replaceWith("<h3> <br> Post has been submitted. <br> </h3>" );
							
							});
						} //end function
					}, delayInMilliseconds);
				}
			});
		}
	}
}

//Main call that actually starts all the function running
function submissionPostSetUpMain() {
	$("#addPostButton").click(submitClickPost);
}

//Export to test
//NOTE: THIS WILL THROW AN ERROR ON THE CONSOLE -- "Module is not defined" 
//This is okay and should be ignored.
module.exports = {
	validateSubmissionPost:validateSubmissionPost
}
