//Transparency p5.js: https://p5js.org/examples/image-transparency.html

let img;
let offset = 0;
let easing = 0.05;

function setup() {
  createCanvas(1000, 1000);
  img = loadImage('img/RhinestoneCowgirl.jpg');
}

function draw() {
  image(img, 0, 0); // Display at full opacity
  let dx = mouseX - img.width / 2 - offset;
  offset += dx * easing;
  tint(255, 127); // Display at half opacity
  image(img, offset, 0);
}
