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



	//if there is a message called mouse, trigger mouseMsg function

	var pInit = new playerObject();
	console.log(pInit);

    socket.on('clientSetUp', () => {
		console.log("client set up...");
		socket.emit('clientStart',pInit);
		gameObjects.push(pInit);
	});

	socket.on('serverUpdate', (data) => {
		socket.broadcast.emit('otherClient',data);
	});
    


}

function gameObject(){
	this.x = getRndInteger(1,400);
	this.y = getRndInteger(1,400);
}

function playerObject(){
	this.obj = new gameObject();
	// this.z;
	this.rotation = 1;
	this.speed = 1;
}

var gameObjects = [];

function server(){
	
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}