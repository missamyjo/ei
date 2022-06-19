let screen1 = []; //yellow
let screen2 = []; //magenta
let screen3 = []; //cyan
let screen4 = []; //black
screens = [screen1, screen2, screen3, screen4];

function preload() {
    myFont = loadFont('fonts/Coronette.otf');

    screen1[0] = loadImage('img/yellow01.png');
    screen1[1] = loadImage('img/yellow02.png');
    screen1[2] = loadImage('img/yellow03.png');
    screen1[3] = loadImage('img/yellow04.png');

    screen2[0] = loadImage('img/magenta01.png');
    screen2[1] = loadImage('img/magenta02.png');
    screen2[2] = loadImage('img/magenta03.png');

    screen3[0] = loadImage('img/cyan01.png');
    screen3[1] = loadImage('img/cyan02.png');
    screen3[2] = loadImage('img/cyan03.png');

    screen4[0] = loadImage('img/blk01.png');
    screen4[1] = loadImage('img/blk02.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(10);
}

function draw() {
    background(254, 239, 198);

    imageMode(CENTER);

    let randoImg = random(screens)
    //image (image, xpostion, y position, image with, image height)
    image(randoImg, width / 2, height / 2);


}