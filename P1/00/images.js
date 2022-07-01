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
    text('to make a protest poster', 500, 140);
    fill(51, 153, 153)
        .textSize(16);
    text('with Miss Amy Jo!', 700, 150);
}

function mouseClicked() {
    var index = int(random(15));
    image(imgs[index], 525, 700);
}
var introList = new Array("Fight", "Nevertheless", "March", "Human Rights", "As long as", "Because", "Revolution", "Vote", "Still", "Smash");
var pointsList = new Array("the", "she", "for", "are", "like", "we", "girl style", "out", "because", "Protest", "better", "Love");
var sumList = new Array("Power", "Patriarchy", "Now", "Human Rights", "Feminism", "Persisted", "Progress", "Tear sh*t up");

var meOne = "";

var pointOne = "This is Point One";
var intro = " ";
var sum = " ";
var bigArgue = $("bigArgue");

function $(id) {
    return document.getElementById(id);
}


function changeThree() {

    var one = Math.random() * pointsList.length;
    one = Math.floor(one);

    var two = Math.random() * pointsList.length;
    two = Math.floor(two);
    while (one == two) {
        two = Math.random() * pointsList.length;
        two = Math.floor(two);
    }

    var three = Math.random() * pointsList.length;
    three = Math.floor(three);
    while (two == three || three == one) {
        three = Math.random() * pointsList.length;
        three = Math.floor(three);
    }

    var i = Math.random() * introList.length;
    i = Math.floor(i);

    var s = Math.random() * sumList.length;
    s = Math.floor(s);

    pointOne = pointsList[one];

    intro = introList[i];
    sum = sumList[s];


    bigArgue.innerHTML = intro + ' ' + meOne + ' ' + pointOne + ' ' + ' ' + sum;
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

// multi click image reference https://editor.p5js.org/NicolasTilly/sketches/dZUpAB3rd https://discourse.processing.org/t/display-images-randomly-by-clicking/17380