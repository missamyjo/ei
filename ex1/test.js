let yellow;
let cyan;
let magenta;

function preload() {
    yellow = loadImage('img/yellow.png');
    cyan = loadImage('img/cyan.png');
    magenta = loadImage('img/magenta.png');

}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(254, 239, 198);

}

function draw() {
    background(254, 239, 198);
    fill(51, 153, 153)
        .strokeWeight(0)
        .textSize(16);
    text('drag mouse slowly from left to right  - - - >', 340, 800);
    push();
    pop();
    image(yellow, 300, 300);
    push();
    if (mouseX < 600 && mouseX > 300 && mouseY < 900 && mouseY > 300) {
        image(yellow, 300, 300); image(cyan, 300, 300);
    }
    push();
    pop()
    if (mouseY < 1000 && mouseX > 600 && mouseX < 900 && mouseY > 300) {
        image(yellow, 300, 300); image(cyan, 300, 300); image(magenta, 300, 300);
    }
    pop();
}