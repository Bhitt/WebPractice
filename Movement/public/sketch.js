//var socket;
var y=0; // Camera position
var py = 100; // player position
function setup(){
	createCanvas(600,400);
	background(255,0,0);
    frameRate(30);

	socket = io.connect("http://localhost:3000");
	socket.on('mouse', newDrawing);	//if mouse is recieved, run newDrawing (this is event handler)
}

//function newDrawing(data){	//function called by event handler
//	noStroke();
//	fill(255,0,100);
//	ellipse(data.x,data.y,36,36);
//}
//
//function mouseDragged(){
//	console.log('Sending: ' + mouseX + ',' + mouseY);
//
//	var data = {
//		x:mouseX,
//		y:mouseY
//	};
//	socket.emit('mouse',data);	//emits message mouse with data object
//
//	noStroke();
//	fill(255);
//	ellipse(mouseX,mouseY,36,36);
//
//
//}


function draw(){
    
    
    background(255,0,0);
    if (keyIsDown(87)) {
        py += 50 * 1/60;
    }
    
    
    y = py - 200;
    camera(0, y, 0, 0, 0, 0, 0, 0, 1);
    y = 0;
    noStroke();
    
    //Static object
    fill(255);
    ellipse(150, 150, 50, 50);
    
    // Player
	fill(128);
    ellipse(100, py, 50, 50);
    
}