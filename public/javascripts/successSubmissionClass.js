/*---------------------------------------------------------------------------------- */
/* CONFIMATION SUBMISSION CLASS
/* CS 341 | Nuxoll */
/*----------------------------------------------------------------------------------*/



//Function that is actually tested using jest and codecov
function validateSubmission(textCourseAb, textCourseNum, textCourseName) {
	if(textCourseAb == "" || textCourseNum == "" || textCourseName == "") {
		console.log('failed, null');
		return false;
	}
	//COURSE ABBREVIATION String
	//Does it fit within the length specifications?
	else if(textCourseAb.length > 4 || textCourseAb.length < 2) {
		console.log(textCourseAb.length);
		console.log('failed, wrong length');
		return false;
	}
	//Are there numbers in this string?
	else if(!isNaN(textCourseAb)) {
		console.log('failed, not a string');
		return false;
	}

	//COURSE NUMBER ENTERED
	//Does it meet the length requirement?
	else if(textCourseNum.length < 3 || textCourseNum.length > 3) {
		console.log('failed, wrong length');
		return false;
	}
	//Are numbers only entered?
	else if(isNaN(textCourseNum)) {
		console.log('failed, not a number');		
		return false;
	}
	else { //Passes everything
		return true;

	}
	
	//03/26/19 JOHNNY HUANG - Did not have a check for the course name!!
}

//Function that does all the hard work in conjuction with the html
function submitClick() {
		
	// Make the  input consistent 
	var textCourseAb = $("#courseAb").val();
	var textCourseNum = $("#courseNum").val();
	var textCourseName = $("#courseName").val();
	
	// If statement to determine if vegan was detected, or to proceed.
	if (!validateSubmission(textCourseAb, textCourseNum, textCourseName)) {
		alert("One of the text areas is invalid.");	
	}
	else {
		var token = document.cookie;
		var user = null;
		if(token == null || token == "")
			$("#newClassTitle").replaceWith("<h3> <br> Please login first! <br> </h3>" );
		else{
			$.post("/checkToken", {token: token}, function(result){
				if(!result[0]){
					$("#newClassTitle").replaceWith("<h3> <br> Please login first! <br> </h3>" );
				}
				else {
					//alert("posting class");
					//console.log("posting class");
					$.post("/postNewClass", {department: textCourseAb, number: textCourseNum, name: textCourseName}, function(result){ });
					//if(result){
					console.log("New Class complete");
					$('#newClassTitle').replaceWith("<h3> <br> Course Added! <br> <h3>");
					//}
					//else{
					//	alert("There was a problem creating the class.");
					//}
				}
			});
		}
	}
}

//Main call that actually starts all the function running
function submissionClassSetUpMain() {
	$("#subbuttonClass").click(submitClick);
}

//Export to test
//NOTE: THIS WILL THROW AN ERROR ON THE CONSOLE -- "Module is not defined" 
//This is okay and should be ignored.
module.exports = {
	validateSubmission:validateSubmission
}

