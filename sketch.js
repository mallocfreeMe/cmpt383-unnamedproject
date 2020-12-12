// tiles
// all the game assets are free
// and I took them from itch.io
let grassTile, roadTile, waterTile;

// player 1 controller 
let posX, posY, radius, speed;
let left, right, up, down;
let player1Shoot;
let bulletArr = [];

// player 1 sprites and animations 
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

// player 2 controller
let posXForPlayer2, posYForPlayer2;
let leftForPlayer2, rightForPlayer2, upForPlayer2, downForPlayer2;
let player2Shoot;
let bulletArr2 = [];
let playe2Health;

// player 2 sprites and animations 
let currentFrameForPlayer2 = 0;
let currentFrame2ForPlayer2 = 0;
let currentSpriteForPlayer2;
let currentSpriteTowardsRightForPlayer2;

// winning condition for the game
let start, player1Win, player2Win, timeCounter, removeAllBullets;

function preload() {
  song = loadSound('Sound/Windless Slopes.mp3');
  grassTile = loadImage("Img/grass.png");
  roadTile = loadImage("Img/road.png");
  waterTile = loadImage("Img/water.png");
  img2 = loadImage("Img/playerLeft.png")
  img = loadImage("Img/playerRight.png")
}

function setup() {
  frameRate(24);
  createCanvas(800, 600);
  posX = 150;
  posY = 150;
  posXForPlayer2 = 500;
  posYForPlayer2 = 150;
  radius = 80;
  speed = 10;
  left, right, up, down = false;

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
  currentSpriteForPlayer2 = imgSquares[0];
  currentSpriteTowardsRight = true;
  currentSpriteTowardsRightForPlayer2 = false;

  player1Shoot = false;
  player2Shoot = false;

  start = true;
  player1Win = false;
  player2Win = false;
}

function draw() {
  switch (start) {
    case true:
      timeCounter = 30;
      background(220);

      // set tilemap design base on the arr created from C through PHP FFI
      // 0 is means a water tile, 1 means a grass tile, 2 means road tile 
      let index = 0;

      for (let j = grassTile.height / 2; j < height; j += grassTile.height * 4) {
        for (let i = grassTile.width / 2; i < width; i += grassTile.width * 4) {
          if (tilemapArr[index] == 0) {
            image(waterTile, i, j, grassTile.width * 4, grassTile.height * 4);
          } else if (tilemapArr[index] == 1) {
            image(grassTile, i, j, grassTile.width * 4, grassTile.height * 4);
          } else if (tilemapArr[index] == 2) {
            image(roadTile, i, j, grassTile.width * 4, grassTile.height * 4);
          }
          index++;
        }
      }

      textSize(22);
      fill(255, 255, 255);
      text('Player 1\nPress wasd to move, \nPress j to shoot bullets', 50, 50);
      text('Player 2\nPress 4 arrow keys to move, \nPress space to shoot bullets', width - 300, 50);
      textSize(15);
      fill(0, 0, 0);
      text('Player1', posX - imgW / 2 + 8, posY - imgH / 2 - 4);
      text('Player2', posXForPlayer2 - imgW / 2 + 3, posYForPlayer2 - imgH / 2 - 4);
      fill(0, 102, 153);

      // player 1 animation statues
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
          currentSprite = imgSquares2[6];
        }
        image(currentSprite, posX, posY);
      }

      // player 2 animation statues
      if (leftForPlayer2) {
        currentFrame2ForPlayer2 = (currentFrame2ForPlayer2 + 1) % numFrames;
        image(imgSquares2[currentFrame2ForPlayer2 % numFrames], posXForPlayer2, posYForPlayer2);
        posXForPlayer2 -= speed;
        currentSpriteTowardsRightForPlayer2 = false;
      } else if (rightForPlayer2) {
        currentFrameForPlayer2 = (currentFrameForPlayer2 + 1) % numFrames;
        image(imgSquares[currentFrameForPlayer2 % numFrames], posXForPlayer2, posYForPlayer2);
        posXForPlayer2 += speed;
        currentSpriteTowardsRightForPlayer2 = true;
      } else if (upForPlayer2) {
        image(currentSprite, posXForPlayer2, posYForPlayer2);
        posYForPlayer2 -= speed;
      } else if (downForPlayer2) {
        image(currentSprite, posXForPlayer2, posYForPlayer2);
        posYForPlayer2 += speed;
      } else if (!leftForPlayer2 && !rightForPlayer2 && !upForPlayer2 && !downForPlayer2) {
        if (currentSpriteTowardsRightForPlayer2) {
          currentSpriteForPlayer2 = imgSquares[0];
        } else {
          currentSpriteForPlayer2 = imgSquares2[6];
        }
        image(currentSpriteForPlayer2, posXForPlayer2, posYForPlayer2);
      }

      // don't let players go out of canvas
      detectPlayer();

      // check player 1 shoot or not
      if (player1Shoot) {
        b = new Bullet(posX, posY, currentSpriteTowardsRight);
        bulletArr.push(b);
      }

      // check player 2 shoot or not
      if (player2Shoot) {
        b = new Bullet(posXForPlayer2, posYForPlayer2, currentSpriteTowardsRightForPlayer2);
        bulletArr2.push(b);
      }

      // load player1's bullets if any 
      // destory them once they go out of canvas
      for (let i = 0; i < bulletArr.length; i++) {
        bulletArr[i].display();
        bulletArr[i].move();
        if (bulletArr[i].x - bulletArr[i].radius < 0 || bulletArr[i].x + bulletArr[i].radius > width) {
          bulletArr.splice(i, 1);
        }
        // check if the bullet collide with player 2
        let d = int(dist(bulletArr[i].x, bulletArr[i].y, posXForPlayer2, posYForPlayer2));
        if (d < bulletArr[i].radius + imgW) {
          player1Win = true;
          removeAllBullets = true;
          break;
        }
      }

      // load player2's bullets if any 
      // destory them once they go out of canvas
      for (let i = 0; i < bulletArr2.length; i++) {
        bulletArr2[i].display();
        bulletArr2[i].move();
        if (bulletArr2[i].x - bulletArr2[i].radius < 0 || bulletArr2[i].x + bulletArr2[i].radius > width) {
          bulletArr2.splice(i, 1);
        }
        // check if the bullet collide with player 1
        let d = int(dist(bulletArr2[i].x, bulletArr2[i].y, posX, posY));
        if (d < bulletArr2[i].radius + imgW) {
          player2Win = true;
          removeAllBullets = true;
          break;
        }
      }

      if (removeAllBullets) {
        bulletArr = [];
        bulletArr2 = [];
        start = false;
      }
      break;
    case false:
      background(0);
      if (player1Win) {
        textSize(22);
        fill(255, 255, 255);
        text('Player 1 win the game', 50, 50);
      } else {
        textSize(22);
        fill(255, 255, 255);
        text('Player 2 win the game', 50, 50);
      }
      removeAllBullets = false;
      timeCounter--;
      if (timeCounter <= 0) {
        player1Win = false;
        player2Win = false;
        start = true;
        timeCounter = 30;
      }
      break;
  }
}

// input system for two players
function keyPressed() {
  if (key === 'w') {
    up = true;
  } else if (key === 'a') {
    left = true;
  } else if (key === 's') {
    down = true;
  } else if (key === 'd') {
    right = true;
  } else if (key === 'j') {
    player1Shoot = true;
  }

  if (keyCode === LEFT_ARROW) {
    leftForPlayer2 = true;
  } else if (keyCode === RIGHT_ARROW) {
    rightForPlayer2 = true;
  } else if (keyCode === UP_ARROW) {
    upForPlayer2 = true;
  } else if (keyCode === DOWN_ARROW) {
    downForPlayer2 = true;
  } else if (keyCode === 32) {
    player2Shoot = true;
  }
}

// input system for two players
function keyReleased() {
  if (key === 'w') {
    up = false;
  } else if (key === 'a') {
    left = false;
  } else if (key === 's') {
    down = false;
  } else if (key === 'd') {
    right = false;
  } else if (key === 'j') {
    player1Shoot = false;
  } else if (keyCode === 32) {
    player2Shoot = false;
  } else if (keyCode === LEFT_ARROW) {
    leftForPlayer2 = false;
  } else if (keyCode === RIGHT_ARROW) {
    rightForPlayer2 = false;
  } else if (keyCode === UP_ARROW) {
    upForPlayer2 = false;
  } else if (keyCode === DOWN_ARROW) {
    downForPlayer2 = false;
  } else if (keyCode === 32) {
    player2Shoot = false;
  }
}

function detectPlayer() {
  if (posX < 0) {
    posX += imgW;
  } else if (posX > width) {
    posX -= imgW;
  } else if (posY < 0) {
    posY += imgH;
  } else if (posY > height) {
    posY -= imgH;
  } else if (posXForPlayer2 < 0) {
    posXForPlayer2 += imgW;
  } else if (posXForPlayer2 > width) {
    posXForPlayer2 -= imgW;
  } else if (posY < 0) {
    posYForPlayer2 += imgH;
  } else if (posY > height) {
    posYForPlayer2 -= imgH;
  }
}

class Bullet {
  constructor(x, y, direction) {
    if (direction) {
      this.x = x + 20;
    } else {
      this.x = x - 20;
    }
    this.y = y;
    this.speed = 1;
    this.direction = direction;
    this.radius = 10;
  }

  move() {
    if (this.direction) {
      this.x += speed;
    } else {
      this.x -= speed;
    }
  }

  display() {
    ellipse(this.x, this.y, this.radius, this.radius);
  }
}