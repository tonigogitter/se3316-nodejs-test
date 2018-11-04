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
function serveRequest(request, response)
{
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.end("Hello World\n");
}

var http = require('http');

var server = http.createServer(serveRequest);
server.listen(process.env.PORT, process.env.IP);
console.log("Server at IP:" + process.env.IP + " port: "+process.env.PORT);
