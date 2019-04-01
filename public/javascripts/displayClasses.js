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
			console.log("Data length:" + data.length);
			//Create ID for the element
			var id = "my" + i.toString() + "Div";
			//alert(data[i].number);
			
			var listinstance = document.createElement("input");
			
			//Set attributes
			listinstance.setAttribute("type","radio");
			listinstance.setAttribute("name","radio");
			listinstance.setAttribute("id",id);
			listinstance.setAttribute("value",(data[i].department).toString() + " " + (data[i].number).toString()); //only the number for post request later
			
			list.appendChild(listinstance);
			
			var label = document.createElement("label");
			label.setAttribute("for",id);
			label.innerHTML = (data[i].department + data[i].number + " - " + data[i].name).toString();
			list.appendChild(label);
			
			var linebreak = document.createElement("br");
			list.appendChild(linebreak);
			
		}
	});

	//What happens when the button is clicked
	$("#submitClass").click(function() {
		//alert("submit");

		console.log("Button Clicked");
		
		var checkedClassNum = $('input[name=radio]:checked').val(); 
		var getDep = checkedClassNum.substring(0,checkedClassNum.indexOf(" "));
		var getNum = checkedClassNum.substring(checkedClassNum.indexOf(" "),checkedClassNum.length);
		
		console.log(checkedClassNum);
		
		//REPLACE ALL Class information with Post information
		//Run Another script
		//alert("replacing");
		$("#class-placeholder").html(checkedClassNum.toString());
		
		$("#class-features").hide();
		$("#chooseCourse").hide();

		$("#post-features").show();

		//alert(checkedClassNum);

		//Call function to post
		classPost(checkedClassNum);
		

	});
	
	//Depending on the number of times you click the options is how many times it prints the results???
	
	function classPost(checkedClassNum) {

		//console.log("Here" + " " + classNum);
		
		//Put another post request here
		//$.post("/classPostsGet/", {id: 'CS', coursenum: classNum}, function(data) {
		$.post("/classPostsGet/", {parent: checkedClassNum}, function(data) {

			
			//This is what will be replaced in the html
			var list = document.getElementById("post-placeholder");
			
			//console.log(data);

			//Run for loop to go through and create elements for each class
			for(i = 0 ; i < data.length; i++)
			{
				console.log("data posts", data.length);
				//Create ID for the element
				var id = "my" + i.toString() + "Div";
				//alert(data[i].number);
				
				//alert("hey");
				
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
				
			}
	
		});
	}
	
});

