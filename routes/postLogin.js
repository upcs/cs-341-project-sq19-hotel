/*	Authors: Alex Schendel
		Created: 3/20/2019
*/

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');
const crypto = require('crypto');

router.post('/', function(req, res, next) {
	var email = req.body.email;
	var rawPass = req.body.pass;
	var pass = sha256(rawPass);
	console.log(email);
	dbms.dbquery("SELECT * FROM accounts WHERE email = '" + email + "' AND pass = '" + pass + "';",
	function(error, results) {
		console.log(results[0]);
		if(results[0] != undefined){
			console.log("User found!");
			return res.status(200).send(true);
		}
		return res.status(401).send(false);
	});
});

function sha256(message) {
	hash = crypto.createHash('sha256');
	hash.update(message);
	return hash.digest('hex');
}

module.exports = router;
