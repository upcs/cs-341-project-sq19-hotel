/*---------------------------------------------------------------------------------- */
/* CONFIRMATION SUBMISSION CLASS
/* CS 341 | Nuxoll */
/*----------------------------------------------------------------------------------*/

//------------------------------------------------------------------------------
// Added so when order button is clicked, the form changes to submitted. 
// "#" is required before the id. "." for class.
$(document).ready(function () {
	$("#subbuttonClass").click(function() {
		
		// Make the  input consistent 
		var textCourseAb = $("#courseAb").val();

		var textCourseNum = $("#courseNum").val();
		
		console.log(textCourseAb);
		console.log(textCourseNum);
		
		// If statement to determine if vegan was detected, or to proceed.
		if (textCourseAb == "" || textCourseNum == "") {
			alert("One of the text areas is empty.");
		}
		else {
			//alert("safe"); 
			$("#newClassTitle").replaceWith("<h3> <br> Class has been submitted. <br> </h3>" );
			//alert("Form removed"); 
		}

	});
});