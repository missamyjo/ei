let yellow;
let cyan;
let magenta;
let black;

function preload() {
    myFont = loadFont('fonts/Coronette.otf');
    yellow = loadImage('img/yellow02.png');
    cyan = loadImage('img/cyan01.png');
    magenta = loadImage('img/magenta02.png');
    black = loadImage('img/blk02.png');
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(254, 239, 198);

}

function draw() {
    background(254, 239, 198);
    fill(51, 153, 153);
    textFont(myFont)
        .strokeWeight(0)
        .textSize(32);
    text('CREATING A MULTICOLOR SCREEN PRINT', 480, 280);
    fill(51, 153, 153)
        .strokeWeight(0)
        .textSize(16);
    text('drag mouse slowly across the image from left to right  - - - >', 520, 800);
    push();
    pop();
    image(yellow, 575, 300);
    push();
    if (mouseX < 800 && mouseX > 620 && mouseY < 900 && mouseY > 300) {
        image(yellow, 575, 300); image(cyan, 575, 300);
    }
    push();
    pop()
    if (mouseY < 1000 && mouseX > 800 && mouseX < 1000 && mouseY > 300) {
        image(yellow, 575, 300); image(cyan, 575, 300); image(magenta, 575, 300);
    }
    push();
    pop()
    if (mouseY < 1100 && mouseX > 900 && mouseX < 1200 && mouseY > 300) {
        image(yellow, 575, 300); image(cyan, 575, 300); image(magenta, 575, 300); image(black, 575, 300);
    }
    pop();
}
