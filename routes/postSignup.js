/*	Authors: Alex Schendel
		Created: 2/25/2019
		Modified: 2/25/2019
*/

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

router.post('/html/signup.html', function(req, res, next) {
	var email = req.body.email;
	var user = req.body.user;
	var pass = req.body.pass;

	dbms.dbquery("INSERT INTO accounts (email, user, pass) VALUES ('$email', '$user', '$pass')",
	function(error, results) {
		res.redirect('localhost:3000');
	});
});

module.exports = router;
