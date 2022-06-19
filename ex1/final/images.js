let imgs = [];

function preload() {
    myFont = loadFont('fonts/Coronette.otf');
    for (var i = 0; i < 15; i++) {
        imgs[i] = loadImage("img/img_" + i + ".png");
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(254, 239, 198);
    imageMode(CENTER);
}

function draw() {
    fill(51, 153, 153);
    textFont(myFont)
        .textSize(40);
    text('CLICK! CLICK! CLICK!', 600, 110);
    fill(51, 153, 153)
        .textSize(16);
    text('to make a screen print', 500, 140);
    fill(51, 153, 153)
        .textSize(16);
    text('with Miss Amy Jo!', 700, 150);
}

function mouseClicked() {
    var index = int(random(15));
    image(imgs[index], mouseX, mouseY, 525, 700);
}

//not part of the assignment - just adding for future use
function keyTyped() {
    //clear screen
    if (key === 'c') {
        clear();
        background(254, 239, 198);
    }
    //screenshot 
    if (key == 's') {
        save('screenprint.png');
    }
}

// multi click image reference https://editor.p5js.org/NicolasTilly/sketches/dZUpAB3rd