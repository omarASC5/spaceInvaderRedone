var player;
var bullet;
var bullets;
var alien;
var aliens;
function setup() {
  createCanvas(windowWidth, windowHeight);
  bullets = new Group();
  aliens = new Group();

  player = createSprite(
    width/2, height - 80, 40, 40);  //height - 80 is height - 2 * height
  player.shapeColor = color(255);
  player.velocity.y = 0;



  var alienRowAmount = 18;  //13
  var alienColumnAmount = 4;
  for (let i = 1; i < ((width*alienRowAmount)/width); i++) {
    for (let j = 1; j < ((height*alienColumnAmount)/height); j++) {
    alien = createSprite(
      i * 100, j * 100, 30, 30);
      alien.shapeColor = color(255,0,0);
      aliens.add(alien);
    }
  }
}
function draw() {
  background(50);

  if (keyWentDown('x')) {
    console.log("DOWN");
    bullet = createSprite(player.position.x, player.position.y, 20, 20);
   
    bullets.add(bullet);
    bullet.velocity.y = -3;
  }

  if (player.position.x >= width) {
    player.position.x = width;
    player.velocity.x *= -1;
  }

  if (player.position.x <= 0) {
    player.position.x = 0;
    player.velocity.x *= -1;
  }



  drawSprites();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    player.setSpeed(4, 180);
  } else if (keyCode == RIGHT_ARROW) {
    player.setSpeed(4, 0);
  } else if (keyCode == 32) {
    player.setSpeed(0, 0);
  }
  return false;
}