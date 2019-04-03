//Get from the database and display on HTML

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

router.post('/', function(req, res, next) {
	
	var idIn = req.body.id;
	console.log(parentIn);
	
	console.log("SELECT * FROM posts WHERE id = '"+req.body.id+"' ");
	
	//Select classes from the corresponding department that is sent in
	dbms.dbquery("SELECT * FROM posts WHERE id = '"+req.body.id+"' ", function(err, results) {
        if(!err) {
		    //console.log(results);

			//Create empty arrays for the department and number
			var comments = [];
			
			for (i = 0; i < results.length; i++) {
				if (results[i].id == idIn) {

					comments[i] = results[i].title;
					
					console.log("-", comments[i]);
				}

			}
		}
		
		res.send(results);
	});
});

module.exports = router;