//Post to display classes

$(document).ready(function () {
	
	$("#post-features").hide();
	$("#class-features").show();
	$("#chooseCourse").show();


	//hard coded for now for CS
	//Declare variable later for both post requests
	$.post("/classesGet/", {department: 'CS'}, function(data) {
		//alert(data);

		//This is what will be replaced in the html
		var list = document.getElementById("class-placeholder");

		//Run for loop to go through and create elements for each class
		for(i = 0 ; i < data.length; i++)
		{
			//Create ID for the element
			var id = "my" + i.toString() + "Div";
			//alert(data[i].number);
			
			var listinstance = document.createElement("input");
			
			//Set attributes
			listinstance.setAttribute("type","radio");
			listinstance.setAttribute("name","radio");
			listinstance.setAttribute("id",id);
			listinstance.setAttribute("value",(data[i].number).toString()); //only the number for post request later
			
			list.appendChild(listinstance);
			
			var label = document.createElement("label");
			label.setAttribute("for",id);
			label.innerHTML = (data[i].department + data[i].number + " - " + data[i].name).toString();
			list.appendChild(label);
			
			var linebreak = document.createElement("br");
			list.appendChild(linebreak);
			
		}
	});
	
	$("#class-placeholder").click(function(){
		console.log("clicky");
		
		var checkedClassNum = $('input[name=radio]:checked').val(); 
		console.log(checkedClassNum);
		
		$("#submitClass").click(function() {
			//alert("submit");
			
			//REPLACE ALL Class information with Post information
			//Run Another script
			//alert("replacing");
			$("#class-placeholder").replaceWith(checkedClassNum);
			
			var checkedClassNumInt = parseInt(checkedClassNum);
			console.log(checkedClassNumInt);

			$("#class-features").hide();
			$("#chooseCourse").hide();

			$("#post-features").show();


			//Put another post request here
			//$.post("/classPostsGet/", {id: 'CS', coursenum: '203'}, function(data) {
				//alert(data);
				
				//This is what will be replaced in the html
				var list = document.getElementById("post-placeholder");
/* 
				//Run for loop to go through and create elements for each class
				for(i = 0 ; i < data.length; i++)
				{
					//Create ID for the element
					var id = "my" + i.toString() + "Div";
					//alert(data[i].number);
					
					alert("hey");
					
					var listinstance = document.createElement("input");
					
					//Set attributes
					listinstance.setAttribute("type","radio");
					listinstance.setAttribute("name","radio");
					listinstance.setAttribute("value",(data[i].id).toString()); //only the number for post request later
					
					list.appendChild(listinstance);
					
					var label = document.createElement("label");
					label.setAttribute("for",id);
					label.innerHTML = (data[i].title + " - " + data[i].body).toString();
					list.appendChild(label);
					
					var linebreak = document.createElement("br");
					list.appendChild(linebreak);
					
					return;

				} */
				

			//});

		});
	});
	
});

