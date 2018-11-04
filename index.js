//Listing 1a
/*
var http= require ('http');

var server = http.createServer(function serveRequest(request,response){
    response.writeHead(200,{ "Content-Type" : "text/plain"});
    response.end("Hello World\n");
});

server.listen(process.env.Port, process.env.IP);
console.log("Server at IP: "+process.env.IP+" port: "+process.env.Port);
*/

//Listing 1b-same functionality as 1a but organized differently
/*function serveRequest(request, response)
{
	response.writeHead(200, {"Content-Type": "text/plain"});
	//response.end("Hello World\n");
	response.write(request.method);//write first, cause end is for the last write
	response.end(request.url);//Step 14, modifying code to display method and url of the request on the browser webpage.
}

var http = require('http');

var server = http.createServer(serveRequest);
server.listen(process.env.PORT, process.env.IP);
console.log("Server at IP:" + process.env.IP + " port: "+process.env.PORT);*/

var express = require('express');
var app = express();  

// serve files in static' folder at root URL '/'
app.use('/', express.static('static'));

app.route('/api')
 .get(function(req, res) {
   res.send('Got a GET request for /api');
 })
 .post(function(req, res) {
   res.send('Got a POST request for /api');
 })
 .put(function(req, res) {
   res.send('Got a PUT request for /api');
 });

app.listen(8080); // start server

console.log('Listening on port 8080');

