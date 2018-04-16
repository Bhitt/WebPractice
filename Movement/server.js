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

	var sData = {
    		pX : Math.floor((Math.random() * 300) + 1),
    		pY : Math.floor((Math.random() * 300) + 1)
    		// pX:200,
    		// pY:200
    };

    socket.on('clientSetUp', cSetup);
    function cSetup(){
    	console.log("client set up...");
    	socket.emit('clientStart',sData);
    };
}

// var gameObject = [
//     xPos:0;
//     yPos:0;
    
// ]

// var gameObjects{
    
// }