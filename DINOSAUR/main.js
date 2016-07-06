var gravity = 0.5;
var JUMP = -10;
var laser;
var directionFlag;
var index = Math.floor((Math.random() * 10000));
function setup() {
    var canvas = createCanvas(1000, 1000);
    background("#4D1945");
    dinosaur = createSprite(100000, 50, 214, 125);
    groundSprite = createSprite(0, 150, 10000000, 50);
    dinosaurImage = loadImage("dinosaur1.gif");
    dinosaurImage1 = loadImage("dinosaur2.png");
    dinosaur.addImage(dinosaurImage);
    enemy = createSprite(index,90,100,100);
    enemyImage=loadImage("enemy.png");
    enemyImage1=loadImage("enemy1.png");
}
function mousePressed() {
    laser = createSprite(dinosaur.position.x,dinosaur.position.y,20,5);
    laserImage = loadImage("laser.png");
    laser.addImage(laserImage);
    laser.scale = 0.2;
    if(directionFlag == 1){
            laser.setSpeed(10,0);
    }
    else{
            laser.setSpeed(10,180);
    }
}
function draw() {
    dinosaur.velocity.y = dinosaur.velocity.y + gravity;
    camera.position.y = dinosaur.position.y;
    camera.position.x = dinosaur.position.x;
    background("#4D1945");
 
    if(enemy.position.x < dinosaur.position.x){
        enemy.position.x = enemy.position.x +5;
        enemy.addImage(enemyImage);
    }
    else{
        enemy.position.x = enemy.position.x - 5;
        enemy.addImage(enemyImage1);
    }
    if (groundSprite.overlap(dinosaur)) {
                    jumptimes = 0;
        dinosaur.velocity.y = 0;
        dinosaur.position.y = (dinosaur.position.y-0.1) - (0.1);
    }
    if (keyDown(LEFT_ARROW)) {
        dinosaur.position.x = dinosaur.position.x - 7.5;
                dinosaur.addImage(dinosaurImage);
                directionFlag = 0;
    }
    if (keyDown(RIGHT_ARROW)) {
        dinosaur.position.x = dinosaur.position.x + 7.5;
        dinosaur.addImage(dinosaurImage1);
        directionFlag = 1;
    }
        if((keyDown(UP_ARROW)) && jumptimes < 4){
            dinosaur.velocity.y = JUMP;
            jumptimes++;
        }
    drawSprites();
}