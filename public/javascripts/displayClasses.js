//Post to display classes

$(document).ready(function () {

	//hard coded for now
	$.post("/classesGet/", {department: 'CS'}, function(data) {
		//alert(data);

		//This is what will be replaced in the html
		var list = document.getElementById("post-placeholder");

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
			listinstance.setAttribute("value",(data[i].department + data[i].number).toString());
			
			list.appendChild(listinstance);
			
			var label = document.createElement("label");
			label.setAttribute("for",id);
			label.innerHTML = (data[i].department + data[i].number + " - " + data[i].name).toString();
			list.appendChild(label);
			
			var linebreak = document.createElement("br");
			list.appendChild(linebreak);
			
			//var clickablestring = document.createTextNode(data[i].department + data[i].number).toString());
			//clickablestring.textContent = (data[i].department + data[i].number).toString();
			//clickablestring.setAttribute("href","http://www.w3.org/DOM/");
			
			//listinstance.appendChild(clickablestring);
			
			//list.appendChild(listinstance);
		}
	});
	
	$("#post-placeholder").click(function(){
		console.log("clicky");
		
		var checkedClass = $('input[name=radio]:checked').val(); 
		console.log(checkedClass);
		
		$("#submitClass").click(function() {
			alert("submit");
			
/* 			//Post to server that takes the order above and counts it in the server
			$.post("/somewhere", {department: departmentIn, number: numberIn), function(data) {
				console.log("Posted!");
			});
			 */
			return true; //sends back true to the button click to redirect to html

		});
	});
	
});

