/*	Authors: Alex Schendel
		Created: 2/25/2019
		Modified: 2/25/2019
*/

var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');
const crypto = require('crypto');
const hash = crypto.createHash('sha256');

//router.post('/html/signup.html', function(req, res, next) {
router.post('/', function(req, res, next) {
	var email = req.body.email;
	var user = req.body.user;
	var rawPass = req.body.pass;
	console.log(email + " " + user);
	var taken = false;//checkExists(email, user);
	if(!taken){
		var pass = sha256(rawPass);
		var error = insertUser(email, user, pass);
		if(!error)
			res.send(true);
	}
	if(taken || error)
		res.send(false);
});

function checkExists(email, user){
	var err = false;
	dbms.dbquery("SELECT * FROM accounts WHERE email = '" + email + "' OR user = '" + user + "';",
	function(error, results) {
		console.log(results[0]);
		if(results[0] != null){
			console.log("Email or username taken. Returning.");
			err = true;
		}
	});
	return err;
}

function insertUser(email, user, pass){
	console.log("Inserting");
	dbms.dbquery("INSERT INTO accounts (email, user, pass) VALUES ('" + email + "', '" + user + "', '" + pass + "');",
	function(error, results) {
		if(error){
			console.log("Insertion error!");
			return true;
		}
	});
	return false;
}

function sha256(message) {
	hash.update(message);
	return hash.digest('hex');
}

module.exports = router;
