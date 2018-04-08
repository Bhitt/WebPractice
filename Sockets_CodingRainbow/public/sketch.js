var socket;

function setup(){
	createCanvas(600,400);
	background(51);

	socket = io.connect("http://localhost:3000");
	socket.on('mouse', newDrawing);	//if mouse is recieved, run newDrawing (this is event handler)
}

function newDrawing(data){	//function called by event handler
	noStroke();
	fill(255,0,100);
	ellipse(data.x,data.y,36,36);
}

function mouseDragged(){
	console.log('Sending: ' + mouseX + ',' + mouseY);

	var data = {
		x:mouseX,
		y:mouseY
	};
	socket.emit('mouse',data);	//emits message mouse with data object

	noStroke();
	fill(255);
	ellipse(mouseX,mouseY,36,36);


}

function draw(){

}