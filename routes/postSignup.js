/*	Authors: Alex Schendel
		Created: 2/25/2019
*/

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');
const crypto = require('crypto');

router.post('/', function(req, res, next) {
	var email = req.body.email;
	var user = req.body.user;
	var rawPass = req.body.pass;
	console.log(email + " " + user);
	dbms.dbquery("SELECT * FROM accounts WHERE email = '" + email + "' OR user = '" + user + "';",
	function(error, results) {
		console.log(results[0]);
		if(results[0] == undefined){//User not found, so we can insert into database!
			console.log("Inserting user!");
			pass = sha256(rawPass);
			dbms.dbquery("INSERT INTO accounts (email, user, pass) VALUES ('" + email + "', '" + user + "', '" + pass + "');",
			function(error, results) {
				if(error){
					console.log("Insertion error!");
					return;//insertion failed for some reason
				}
				return res.send(true);//user submitted!
			});
		}
		else{
			console.log("User already exists");
			return res.send(false);
		}
	});
});

function insert(email, user, rawPass){
	}

function sha256(message) {
	hash = crypto.createHash('sha256');
	hash.update(message);
	return hash.digest('hex');
}

module.exports = router;
