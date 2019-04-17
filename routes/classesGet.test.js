// test that router.post sends the correct query, and the correct result

const express = require('express');
const router = express.Router();

const dbms = require('dmbs');
    .

// send post request data,
// expect to send "SELECT * FROM classes WHERE department = 'CS';"

test('sends correct database query', () =>{
    expect(dbms.dbquery).toHaveBeenCalledWith("SELECT * FROM classes WHERE department = 'CS'; ");
});
