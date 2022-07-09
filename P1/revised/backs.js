let imgs = [];

function preload() {
    myFont = loadFont('fonts/Coronette.otf');
    for (var i = 0; i < 8; i++) {
        imgs[i] = loadImage("img/img_" + i + ".png");
    }
}

function setup() {
    createCanvas(612, 792);//this is the size of a letter-sized page in 72 dpi
    background(255);
    imageMode(CENTER);
}

function draw() {
    //I removed the text from the p5 file so that it's just the image randomizer to make it easier to deal with
}

function mouseClicked() {
    var index = int(random(8));
    image(imgs[index], width / 2, height / 2);//Centering the image on the canvas—this is responsive to whatever your canvas size is
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