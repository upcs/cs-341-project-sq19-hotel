//Put in Navigation bar

$(document).ready(function () { 
	
	//Get nav.html data and then put it where the placeholder is in nav.html
	$.get("nav.html", function(data){
		$("#nav-placeholder").replaceWith(data);
	});
});

//Resources: https://stackoverflow.com/questions/31954089/html-css-navigation-bar-on-multiple-pages