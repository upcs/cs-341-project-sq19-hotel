//Get from the database and display on HTML

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

router.post('/', function(req, res, next) {
	
	var parentIn = req.body.parent;
	console.log(parentIn);
	
	console.log("SELECT * FROM posts WHERE parent = '"+req.body.parent+"' ");
	
	//Select classes from the corresponding department that is sent in
	dbms.dbquery("SELECT * FROM posts WHERE parent = '"+req.body.parent+"' ", function(err, results) {
	//dbms.dbquery("SELECT * FROM posts WHERE id = '"+req.body.id+"' ", function(err, results) {

        if(!err) {
		    //console.log(results);

			//Create empty arrays for the department and number
			var postTitle = [];
			var postBody = [];
			
			for (i = 0; i < results.length; i++) {
				if (results[i].parent == parentIn) {

					postTitle[i] = results[i].title;
					postBody[i] = results[i].body;
					
					console.log("*", postTitle[i]);
					console.log("-", postBody[i]);
				}

			}
		}
		
		res.send(results);
	});
});

module.exports = router;