//Import the library
//const server = require('server');

//Launch the server to always answer "Hello world"
//server(ctx => 'Hello world!');


//Import the library
// const hostname = '127.0.0.1';

//Launch the server to always answer "Hello world"
// server(ctx => 'Hello world!');


var http = require('http');
var fs = require('fs');
var url = require('url');


// Create a server
http.createServer( function (request, response) {  
   // Parse the request containing file name
   var pathname = url.parse(request.url).pathname;
   
   // Print the name of the file for which request is made.
   console.log("Request for " + pathname + " received.");
   
   // Read the requested file content from file system
   fs.readFile(pathname.substr(1), function (err, data) {
      if (err) {
         console.log(err);
         
         // HTTP Status: 404 : NOT FOUND
         // Content Type: text/plain
         response.writeHead(404, {'Content-Type': 'text/html'});
      } else {	
         //Page found	  
         // HTTP Status: 200 : OK
         // Content Type: text/plain

//MODIFIED: To accept the css file, if statement to make it read a text/css
		if (pathname.includes("css")) {
		    response.writeHead(200, {'Content-Type': 'text/css'});
			//console.log("hello");
		} else {
			response.writeHead(200, {'Content-Type': 'text/html'});	
		}
         
         // Write the content of the file to response body
         response.write(data.toString());		
      }
      
      // Send the response body 
      response.end();
   });   
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');


//Resources:
// http://www.tutorialspoint.com/nodejs/nodejs_web_module.htm