//server.js
var express = require('express');   //includes library

var app = express();
var server = app.listen(3000);		//local host port 3000

app.use(express.static('public'));	//use the static files located in public directory

console.log("Movement server running");

var socket = require('socket.io');	//include library

var io = socket(server);			//set socket to server

io.sockets.on('connection', newConnection);	//event handling

function newConnection(socket){
	console.log('new connection: ' + socket.id);	//log the connection

	socket.on('mouse', mouseMsg);	//if there is a message called mouse, trigger mouseMsg function

	function mouseMsg(data){
		//Broadcast to all clients
		//io.sockets.emit('mouse',data)

		//client broadcasts to other clients
		socket.broadcast.emit('mouse',data);	//send the same message back out
		// console.log(data);
	}
}