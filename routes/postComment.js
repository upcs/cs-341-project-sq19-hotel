var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

//router.post('/html/signup.html', function(req, res, next) {
router.post('/', function(req, res, next) {
	var body = req.body.body;
	var user = req.body.user;
	var parent = req.body.parent;
	var id = req.body.id;
	
	console.log("INSERT INTO posts (body, user, parent, id) VALUES ('" + body + "', '" + user + "', '" + parent + "', '" + id + "'");
	
	dbms.dbquery("INSERT INTO posts (body, user, parent, id) VALUES ('" + body + "', '" + user + "', '" + parent + "', '" + id + "');",
	function(error, results) {
	});
});

module.exports = router;
