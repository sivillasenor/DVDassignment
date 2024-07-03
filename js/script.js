let img;
let canvasWidth = 800;
let canvasHeight = 600;
let xPos;
let yPos;
let xSpeed = 1;
let ySpeed = 1;
let imgWidth = 100;
let imgheight = 75;

function preload(){
    img = loadImage('dvd.jpg');
}

function setup(){
    createCanvas(canvasWidth,canvasHeight);
    xPos = random(0, canvasWidth-img.Width);
    yPos = random(0, canvasHeight-ima.Height);
}

function draw(){
    Reflect(0, 0, canvasWidth, canvasHeight);
    image(img, xPos, yPos);
    xPos += xSpeed;
    yPos += ySpeed;
    if (xPos > canvasWidth-img.Width || xPos < 0){
        xSpeed = xSpeed * -1;
    }
    if (yPos > canvasHeight-img.Height || yPos < 0){
        ySpeed = ySpeed * -1;
    }
}