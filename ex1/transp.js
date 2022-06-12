//Transparency p5.js: https://p5js.org/examples/image-transparency.html

let img;
let offset = 0;
let easing = 0.05;

function preload() {
  yellow = loadImage('img/yellow.png');
  cyan = loadImage('img/cyan.png');
  magenta = loadImage('img/magenta.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(254, 239, 198);
  image(yellow, 300, 300); // Display at full opacity

}

function draw() {

  image(cyan, 300, 300);

  image(magenta, 300, 300);
  let dx = mouseX - img.width / 2 - offset;
  offset += dx * easing;
}


