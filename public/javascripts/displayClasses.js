//Post to display classes

$(document).ready(function () {
	
	//Main page showing
	$("#specificCourses").hide();
	
	//What happens when the button is clicked
	$("#submitSubject").click(function() {
		
		var checkedClassSubject = $('input[name=subject]:checked').val(); 

		//If statement that makes the user select a class so it is not undefined
		if (checkedClassSubject == null) {
			alert("Please Select a Class Subject");
			return;
		}
		//If something is selected, call the function
		else {
			classesGet(checkedClassSubject);
			
		}
		
		//Else statement occurs, hide things and show things for class courses
		$("#mainPage").hide();
		$("#specificCourses").show();
		
		//Class Courses shown for now
		$("#post-features").hide();
		$("#comment-features").hide();
		$("#class-features").show();
		$("#chooseCourse").show();


	});

	function classesGet(checkedClassSubject) {
		
		//Declare variable later for both post requests
		$.post("/classesGet/", {department: checkedClassSubject}, function(data) {

			//This is what will be replaced in the html
			var list = document.getElementById("class-placeholder");

			//Run for loop to go through and create elements for each class
			for(i = 0 ; i < data.length; i++)
			{
				//console.log("Data length:" + data.length);
				//Create ID for the element
				var id = "my" + i.toString() + "Div";
				//alert(data[i].number);
				
				var listinstance = document.createElement("input");
				
				//Set attributes
				listinstance.setAttribute("type","radio");
				listinstance.setAttribute("name","classes");
				listinstance.setAttribute("id",id);
				listinstance.setAttribute("value",(data[i].department).toString() + " " + (data[i].number).toString()); //only the number for post request later
				
				list.appendChild(listinstance);
				
				//Put in the courses from database
				//&nbsp is a space
				var label = document.createElement("label");
				label.setAttribute("for",id);
				label.innerHTML = ("&nbsp" + data[i].department + " " + data[i].number + " - " + data[i].name).toString();
				list.appendChild(label);
				
				var linebreak = document.createElement("br");
				list.appendChild(linebreak);
				
			}
		});
	}

	//What happens when the button is clicked
	$("#submitClass").click(function() {
		
		var checkedClassNum = $('input[name=classes]:checked').val(); 
		
		//Must select a course so it is not null
		if (checkedClassNum == null) {
			alert("Please Select a Course");
			return;
		}
		else {
			var getDep = checkedClassNum.substring(0,checkedClassNum.indexOf(" "));
			var getNum = checkedClassNum.substring(checkedClassNum.indexOf(" "),checkedClassNum.length);
		}
		
		//REPLACE ALL Class information with Post information
		$("#class-placeholder").html(checkedClassNum.toString());
		
		$("#class-features").hide();
		$("#chooseCourse").hide();
		$("#comment-features").hide();

		$("#post-features").show();

		//Call function that shows the corresponding posts
		classPost(checkedClassNum);
	});
	
	//Depending on the number of times you click the options is how many times it prints the results???
	function classPost(checkedClassNum) {
		//Put another post request here
		$.post("/classPostsGet/", {parent: checkedClassNum}, function(data) {

			//This is what will be replaced in the html
			var list = document.getElementById("post-placeholder");
			
			//Run for loop to go through and create elements for each class
			for(i = 0 ; i < data.length; i++)
			{
				//console.log("data posts", data.length);
				//Create ID for the element
				var id = "my" + i.toString() + "Div";

				var listinstance = document.createElement("input");
				
				//Set attributes
				listinstance.setAttribute("type","radio");
				listinstance.setAttribute("name","post");
				listinstance.setAttribute("value",(data[i].id).toString()); //only the number for post request later
				
				list.appendChild(listinstance);
				
				var label = document.createElement("label");
				label.setAttribute("for",id);
				label.innerHTML = ("&nbsp" + data[i].title + " - " + data[i].body).toString();
				list.appendChild(label);
				
				var linebreak = document.createElement("br");
				list.appendChild(linebreak);
			}
		});
	} //end function
	
	$("#submitPost").click(function() {
		//alert("hi");
		
		$("#post-features").hide();		
		$("#post-placeholder").hide();

		$("#comment-features").show();

		var checkPost = $('input[name=post]:checked').val(); 

		console.log(checkPost);
		
		if (checkPost == null) {
			alert("Please Select a Post");
			return;
		}

		//REPLACE ALL post information with comment information
		//Call function that shows the corresponding comments
		classComment(checkPost);

	});
	
	function classComment(checkPost) {
		$.post("/classCommentGet/", {parent: checkPost}, function(data) {
			
			var list = document.getElementById("comment-placeholder");
			
			alert(checkPost.parent);
			
			//Display the post clicked on with title and body

			//Run for loop to go through and create elements for each class
			for(i = 0 ; i < data.length; i++)
			{
				console.log("data posts", data[i].body);
				//alert("hey");
				//Create ID for the element
				var id = "my" + i.toString() + "Div";

				var listinstance = document.createElement("input");
				
				//Set attributes
				listinstance.setAttribute("type","radio");
				listinstance.setAttribute("name","comment");
				listinstance.setAttribute("value",(data[i].id).toString()); //only the number for post request later
				
				list.appendChild(listinstance);
				
				var label = document.createElement("label");
				label.setAttribute("for",id);
				label.innerHTML = ("&nbsp" + data[i].body).toString();
				list.appendChild(label);
				
				var linebreak = document.createElement("br");
				list.appendChild(linebreak);
			}
			
			
			
		});
	}
	
/* 	$("#goBackClasstoIndex").click(function() {
		alert("hi");

		$("#mainPage").show();

		$("#specificCourses").hide();
		
		$("#class-features").hide();
		$("#chooseCourse").hide();
		$("#post-features").hide();
	});
 */
/* 	("#goBackPosttoClass").click(function() {
		$("#class-features").show();
		$("#specificCourses").show();
		
		$("#chooseCourse").show();
		$("#post-features").hide();
	}); */

	
});

