// player controller 
let posX, poxY, radius, speed;
let left, right, up, down;
let grassTile;
let song;
let slider;

// player sprites and animations 
let img;
let imgSquares = [];
let img2;
let imgSquares2 = [];
let imgW, imgH;
let numFrames = 7;
let currentFrame = 0;
let currentFrame2 = 0;
let currentSprite;
let currentSpriteTowardsRight;

function preload() {
  song = loadSound('Sound/Windless Slopes.mp3');
  grassTile = loadImage("Img/grass.png");
  img2 = loadImage("Img/playerLeft.png")
  img = loadImage("Img/playerRight.png")
}

function setup() {
  frameRate(24);
  createCanvas(1000, 400);
  posX = 150;
  posY = 300;
  radius = 80;
  speed = 10;
  left, right, up, down = false;
  slider = createSlider(0, 1, 0, 0.01)

  // right sprites 
  img.resize(img.width * 2, img.height * 2);
  imgW = img.width / 7;
  imgH = img.height;
  img.loadPixels();
  for (let y = 0; y < img.height; y += imgH) {
    for (let x = 0; x < img.width; x += imgW) {
      imgSquares.push(img.get(x, y, imgW, imgH));
    }
  }

  // left sprites
  img2.resize(img2.width * 2, img2.height * 2);
  img2.loadPixels();
  for (let y = 0; y < img2.height; y += imgH) {
    for (let x = 0; x < img2.width; x += imgW) {
      imgSquares2.push(img2.get(x, y, imgW, imgH));
    }
  }

  pd = pixelDensity();
  imageMode(CENTER);
  currentSprite = imgSquares[0];
  currentSpriteTowardsRight = true;
}

function draw() {
  background(220);
  // song.play();
  song.setVolume(slider.value());
  for (let i = grassTile.width / 2; i < width; i += grassTile.width * 4) {
    for (let j = grassTile.height / 2; j < height; j += grassTile.height * 4) {
      image(grassTile, i, j, grassTile.width * 4, grassTile.height * 4);
    }
  }
  textSize(22);
  fill(255, 255, 255);
  text('press wasd to move, \npress space to shoot bullets', 50, 50);
  textSize(15);
  fill(0, 0, 0);
  text('Player1', posX - imgW / 2 + 8, posY - imgH / 2 - 4);
  fill(0, 102, 153);

  if (left) {
    currentFrame2 = (currentFrame2 + 1) % numFrames;
    image(imgSquares2[currentFrame2 % numFrames], posX, posY);
    posX -= speed;
    currentSpriteTowardsRight = false;
  } else if (right) {
    currentFrame = (currentFrame + 1) % numFrames;
    image(imgSquares[currentFrame % numFrames], posX, posY);
    posX += speed;
    currentSpriteTowardsRight = true;
  } else if (up) {
    image(currentSprite, posX, posY);
    posY -= speed;
  } else if (down) {
    image(currentSprite, posX, posY);
    posY += speed;
  } else if (!left && !right && !up && !down) {
    if (currentSpriteTowardsRight) {
      currentSprite = imgSquares[0];
    } else {
      currentSprite = imgSquares2[5];
    }
    image(currentSprite, posX, posY);
  }
  detectPlayer();
}

function keyPressed() {
  if (key === 'w') {
    up = true;
  } else if (key === 'a') {
    left = true;
  } else if (key === 's') {
    down = true;
  } else if (key === 'd') {
    right = true;
  } else if (keyCode === 32) {
    console.log("shoot");
  }
}

function keyReleased() {
  if (key === 'w') {
    up = false;
  } else if (key === 'a') {
    left = false;
  } else if (key === 's') {
    down = false;
  } else if (key === 'd') {
    right = false;
  }
}

function detectPlayer() {
  if (posX < 0) {
    posX += radius;
  } else if (posX > width) {
    posX -= radius;
  } else if (posY < 0) {
    posY += radius;
  } else if (posY > height) {
    posY -= radius;
  }
}
