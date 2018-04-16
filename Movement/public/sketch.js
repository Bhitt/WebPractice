
// var pX = 200;   //playerX
// var pY = 200;   //playerY

// var camX = pX - 300;
// var camY = pY - 200;

var staticX = 0;
var staticY = 0;

var start = true;

var socket;
var pX;
var pY;
var camX;
var camY;

function setup(){
    //var socket;
	createCanvas(600,400);
	background(32, 179, 100);

    socket = io.connect("http://localhost:3000");
    socket.on('clientStart',startPos);

    socket.emit('clientSetUp');

    frameRate(30);
}

function startPos(sData){
    //set starting player position
    pX = sData.pX;
    pY = sData.pY;
    camX = pX - 300;
    camY = pY - 200;
    noStroke();
    fill(255);
    ellipse(pX,pY,40,40);
    camera
}

function draw(){
    
    background(32, 179, 100);
    if (keyIsDown(87)) {
        pY -= 50 * 1/30;
        camY = pY - 200;
    }

    if (keyIsDown(83)) {
        pY += 50 * 1/30;
        camY = pY - 200;
    }

    if (keyIsDown(65)) {
        pX -= 50 * 1/30;
        camX = pX - 300;
    }

    if (keyIsDown(68)) {
        pX += 50 * 1/30;
        camX = pX - 300;
    }
    
    camera(camX, camY, 0, 0, 0, 0, 0, 0, 1);
    //y = 0;
    noStroke();
    
    // Player
	fill(200);
    ellipse(pX, pY, 40, 40);

    noStroke();
    fill(200,300,0);
    ellipse(staticX,staticY,40,40);
    
}

