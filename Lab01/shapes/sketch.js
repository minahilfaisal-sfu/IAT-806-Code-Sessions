console.log("Script loaded.");

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(135, 206, 235);
  stem();
  flower();
  leaf();
}

function flower() {
  noStroke();
  fill(255, 182, 193);
  circle(400, 265, 50);
  circle(433, 289, 50);
  circle(421, 328, 50);
  circle(379, 328, 50);
  circle(367, 289, 50);

  fill(255, 221, 0);
  circle(400, 300, 40);
}

function leaf() {
  noStroke();
  fill(0, 100, 0);
  push();
  translate(430, 450);
  rotate(-45);
  ellipse(0, 0, 70, 30);
  pop();
}

function stem() {
  noFill();
  stroke(144, 238, 144);
  strokeWeight(5);
  bezier(400, 340, 380, 420, 420, 500, 400, 580);
}
