//Post New Class

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

router.post('/', function(req, res, next) {
	var department = req.body.department;
	var num = req.body.number;
	var name = req.body.name;

	console.log(department + num + name);
	dbms.dbquery("INSERT INTO classes (department, number, name) VALUES ('" + department + "', '" + num + "', '" + name + "');",
	function(error, results) {});
});

module.exports = router;
