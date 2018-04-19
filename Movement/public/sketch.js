
// var pX = 200;   //playerX
// var pY = 200;   //playerY

// var camX = pX - 300;
// var camY = pY - 200;

let player2;

let staticX = 0;
let staticY = 0;

let start = true;

let socket;
let pX;
let pY;
let camX;
let camY;
let change;
let playerObject;

function setup(){
    //var socket;
	createCanvas(600,400);
	background(32, 179, 100);

    socket = io.connect("http://localhost:3000");
    socket.on('clientStart',startPos);
    socket.on('otherClient', friendos);

    socket.emit('clientSetUp');

    frameRate(30);

    //socket.emit('serverUpdate');

    //console.log(farts);
}

function startPos(pInit){
    //set starting player position
    playerObject = pInit;
    camX = playerObject.obj.x - 300;
    camY = playerObject.obj.y - 200;
    noStroke();
    fill(255);
    ellipse(playerObject.obj.x,playerObject.obj.y,40,40);
    camera(camX, camY, 0, 0, 0, 0, 0, 0, 1);
}

function friendos(data){
    //if(data == null) return;
    //console.log(data);
    player2 = data;
    // background(32, 179, 100);
    // noStroke();
    // fill(55,0,100);
    // ellipse(data.obj.x,data.obj.y,40,40);
}

function draw(){
    if(playerObject == null) return;

    change = false;

    background(32, 179, 100);
    if (keyIsDown(87)) {
        playerObject.obj.y -= 50 * 1/30;
        camY = playerObject.obj.y - 200;
        change =true;
    }

    if (keyIsDown(83)) {
        playerObject.obj.y += 50 * 1/30;
        camY = playerObject.obj.y - 200;
        change =true;
    }

    if (keyIsDown(65)) {
        playerObject.obj.x -= 50 * 1/30;
        camX = playerObject.obj.x - 300;
        change =true;
    }

    if (keyIsDown(68)) {
        playerObject.obj.x += 50 * 1/30;
        camX = playerObject.obj.x - 300;
        change = true;
    }
    
    camera(camX, camY, 0, 0, 0, 0, 0, 0, 1);
    //y = 0;
    noStroke();
    //should you not draw unless !null
    // Player
	fill(200);
    ellipse(playerObject.obj.x, playerObject.obj.y, 40, 40);

    noStroke();
    fill(200,300,0);
    rect(staticX,staticY,40,40);
    
    if(change){
        socket.emit('serverUpdate',playerObject);
    }

    if(player2 != null){
        noStroke();
        fill(55,0,100);
        ellipse(player2.obj.x,player2.obj.y,40,40);
    }
}

