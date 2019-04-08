$(document).ready(function(){
	var token = document.cookie;
	if(token != null && token != ""){
		$.post("/checkToken", {token: token},
		function(result){
			if(result[0]){
				$("#signUp").remove();
				$("#log").replaceWith('<a class="nav-link" id="loggedIn" href="logout.html">' + result[1].user + '</a>');
			}
		});
	}
});
