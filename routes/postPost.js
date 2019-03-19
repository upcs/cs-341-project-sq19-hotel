/*	Authors: Alex Schendel
		Created: 3/18/2019
		Modified: 3/18/2019
*/

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

//router.post('/html/signup.html', function(req, res, next) {
router.post('/', function(req, res, next) {
	var title = req.body.title;
	var body = req.body.body;
	var user = req.body.user;
	var id = req.body.id;
	console.log(title + body);
	dbms.dbquery("INSERT INTO posts (title, body, user, id) VALUES ('" + title + "', '" + body + "', '" + user + "', '" + id + "');",
	function(error, results) {
	});
});

module.exports = router;
