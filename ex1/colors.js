let colors = [];
let idx;

function preload() {
    myFont = loadFont('fonts/Coronette.otf');

    colors[0] = loadImage('img/yellow01.png');
    colors[1] = loadImage('img/yellow02.png');
    colors[2] = loadImage('img/yellow03.png');
    colors[3] = loadImage('img/yellow04.png');

    colors[4] = loadImage('img/magenta01.png');
    colors[5] = loadImage('img/magenta02.png');
    colors[6] = loadImage('img/magenta03.png');

    colors[7] = loadImage('img/cyan01.png');
    colors[8] = loadImage('img/cyan02.png');
    colors[9] = loadImage('img/cyan03.png');

    colors[10] = loadImage('black01.png');
    colors[11] = loadImage('black02.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(254, 239, 198);
    colors[0] = 0;
    colors[1] = 1;
    colors[2] = 2;
    idx = 0;
}

function draw() {
    fill(220);
    textSize(100);
    text(colors[idx], windowWidth / 2, windowHeight / 2);
}

function mouseClicked() {
    idx++;
    if (idx > colors.length - 1) {
        idx = 0;
    }
}