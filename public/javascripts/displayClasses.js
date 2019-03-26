//Post to display classes

$(document).ready(function () {

	//hard coded for now
	$.post("/classesGet/", {department: 'CS'}, function(data) {
		//alert(data);

		var list = document.getElementById("post-placeholder");

		
		for(i = 0 ; i < data.length; i++)
		{
			var id = "my" + i.toString() + "Div";
			//alert(data[i].number);
			var listinstance = document.createElement("input");
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
	
	$("input").click(function(){
		alert("hi");
	});
});

