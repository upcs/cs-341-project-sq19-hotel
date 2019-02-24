/*---------------------------------------------------------------------------------- */
/* CONFIRMATION SUBMISSION POST
/* CS 341 | Nuxoll */
/*----------------------------------------------------------------------------------*/

//------------------------------------------------------------------------------
// Added so when order button is clicked, the form changes to submitted. 
// "#" is required before the id. "." for class.
$(document).ready(function () {
	$("#subbuttonPost").click(function() {
		
		// Make the  input consistent 
		var textTitle = $("#title").val();

		var textBody = $("#text").val();
		
		console.log(textTitle);
		console.log(textBody);
		
		// If statement to determine if vegan was detected, or to proceed.
		if (textTitle == "" || textBody == "") {
			alert("One of the text areas is empty.");
		}
		else {
			//alert("safe"); 
			$("#postForm").replaceWith("<h3> <br> Post has been submitted. <br> </h3>" );
			//alert("Form removed"); 
		}

	});
});