/*	Authors: Alex Schendel
		Created: 3/31/2019
*/

var jwt = require('jsonwebtoken');
var express = require('express');
var router = express.Router();

// require dbms.js to access database
var dbms = require('./dbms.js');

router.post('/', function(req, res, next) {
	var token = req.body.token;
	if(token == null || token == ""){
		console.log('Token is empty');
		return res.send([false, null]);
	}
	try{
		console.log('Verifying and decoding token.');
		//decoded = jwt.verify(token, 'secret');
		var decoded = jwt.decode(token);//temporary until signature is fixed
		console.log(decoded);
		var d = new Date();//also temporary (check if expired)
		console.log(d.getTime()/1000);
		if(decoded.exp < d.getTime()/1000){
			console.log("Expired token");
			return res.send([false, decoded]);
		}
		return res.send([true, decoded]);
	}
	catch(err){
		console.log(err);
		return res.send([false, null]);
	}
});

module.exports = router;
