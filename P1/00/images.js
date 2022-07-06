let imgs = [];

function preload() {
    myFont = loadFont('fonts/Coronette.otf');
    for (var i = 0; i < 8; i++) {
        imgs[i] = loadImage("img/img_" + i + ".png");
    }
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255);
    imageMode(CENTER);
}

function draw() {
    fill("red");
    textFont(myFont)
        .textSize(40);
    text('CLICK! CLICK! CLICK!', 600, 50);
    fill("red")
        .textSize(16);
    text('to make a protest poster', 500, 75);
    fill("red")
        .textSize(16);
    text('with Miss Amy Jo!', 700, 85);
}

function mouseClicked() {
    var index = int(random(8));
    image(imgs[index], 775, 550);
}


function keyTyped() {
    //clear screen
    if (key === 'c') {
        clear();
        background(255);
    }
    //screenshot 
    if (key == 's') {
        save('protestposter.png');
    }
}

// ref:multi click images - https://editor.p5js.org/NicolasTilly/sketches/dZUpAB3rd https://discourse.processing.org/t/display-images-randomly-by-clicking/17380