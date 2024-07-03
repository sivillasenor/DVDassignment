let img;
let xPos;
let yPos;
let xSpeed = 10;
let ySpeed = 10;
let imgWidth = 100;
let imgheight = 75;
let canvasWidth = 1000;
let canvasHeight = 700;

function preload(){
    img = loadImage('./images/dvd/.jpg');
}

function setup(){
    createCanvas(canvasWidth,canvasHeight);
    xPos = random(0, canvasWidth-imgWidth);
    yPos = random(0, canvasHeight-imageHeight);
}

function draw(){
    background(145, 7, 132);
    image(img, xPos, yPos, imgWidth, imgHeight);
    xPos += xSpeed;
    yPos += ySpeed;
    if (xPos > canvasWidth-imgWidth || xPos < 0){
        xSpeed = xSpeed * -1;
    }
    if (yPos > canvasHeight-imgHeight || yPos < 0){
        ySpeed = ySpeed * -1;
    }
}