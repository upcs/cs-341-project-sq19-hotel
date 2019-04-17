var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

//router.post('/html/signup.html', function(req, res, next) {
router.post('/', function(req, res, next) {
	var id = req.body.id;
	
	console.log("DELETE FROM posts WHERE id = '" + id + "';");
	
	dbms.dbquery("DELETE FROM posts WHERE id = '" + id + "';",
	function(error, results) {
	});
});

module.exports = router;
