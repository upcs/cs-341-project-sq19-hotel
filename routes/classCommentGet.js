//Get from the database and display on HTML

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

var comments = [];
var size = 0;

router.post('/', function(req, res, next) {
	
	var parentIn = req.body.parent;
	console.log(parentIn);
	
	console.log("SELECT * FROM posts WHERE parent = '"+req.body.parent+"' ");
	getComments(parentIn, function(){
		res.send(comments);
	});
	//Select classes from the corresponding department that is sent in
});

function getComments(id, callback){
	dbms.dbquery("SELECT * FROM posts WHERE parent = '"+id+"' ", function(err, results) {
    if(!err) {
			for (i = 0; i < results.length; i++) {
					comments[size] = results[i];
					size++;
					getComments(results[i].id, null);
			}
			if(callback !== null){
				callback();
			}
		}
	});
}

module.exports = router;
