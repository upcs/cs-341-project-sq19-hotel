//Get from the database and display on HTML

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

router.post('/', function(req, res, next) {
	
	console.log("SELECT * FROM classes WHERE department = '"+req.body.department+"'; ");
	
	//Select classes from the corresponding department that is sent in
	dbms.dbquery("SELECT * FROM classes WHERE department = '"+req.body.department+"'; ", function(err, results) {
        if(!err) {
		    console.log(results);

			//Create empty arrays for the department and number
			var classesDep = [];
			var classesNum = [];
			
			for (i = 0; i < results.length; i++) {
				if (results[i].department == "CS") {
					classesDep[i] = results[i].department;
					classesNum[i] = results[i].number;
				}

			}
		}
		
		res.send(results);
	});
});

module.exports = router;