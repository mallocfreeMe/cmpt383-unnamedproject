let posX, poxY, radius, speed;
let left, right, up, down;

function setup() {
  createCanvas(400, 400);
  posX = 150;
  posY = 300;
  radius = 80;
  speed = 20;
}

function draw() {
  background(220);
  textSize(22);
  fill(255, 255, 255);
  text('press wasd to move, \npress space to shoot bullets', 50, 50);
  textSize(32);
  fill(0, 0, 0);
  text('username1', posX - radius, posY - 50);
  fill(0, 102, 153);
  ellipse(posX, posY, radius, radius);
}

function keyPressed() {
  if (key === 'w') {
    posY -= speed;
  } else if (key === 'a') {
    posX -= speed;
  } else if (key === 's') {
    posY += speed;
  } else if (key === 'd') {
    posX += speed;
  }
}
