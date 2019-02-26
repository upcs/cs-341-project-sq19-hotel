/*---------------------------------------------------------------------------------- */
/* CONFIRMATION SUBMISSION
/* CS 341 | Nuxoll */
/*----------------------------------------------------------------------------------*/

$(document).ready(function () {
	$("#comment-button").click(function() {
	
		console.log("1");
	
		// Make the  input consistent 
		var comment = $("#comment-textarea").val();

		console.log("2");
		
		// empty comment check
		if (comment == "") {
			$(".input-group").after( "<div class=\"alert alert-danger\" role=\"alert\">Comment is empty.</div>" );
		}
		else {
			// Replace comment with submission success
			$(".input-group").replaceWith( "<div class=\"alert alert-success\" role=\"alert\">Comment submitted!</div>" );
		}

	});
});