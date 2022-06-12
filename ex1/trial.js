let cyan;
let yellow;
let magenta;


function preload() {
    yellow = loadImage('img/yellow.png');
    cyan = loadImage('img/cyan.png');
    magenta = loadImage('img/magenta.png');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    background(254, 239, 198);
    frameRate(0.5);
}

function draw() {
    background(254, 239, 198);

    push();
    scale(0.5, 0.5);
    image(yellow, 300, 500);
    image(cyan, 300, random(0, windowHeight));
    image(magenta, random(0, windowWidth), 500);
    pop();

}