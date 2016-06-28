var gravity = 0.3;
var JUMP = -5;
var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;
var player;
var playerImage;
var obstacleImage;
var groundImage;
var obstacles;
var firstObstacles;
var isgameover;
var jumptimes = 0;
function setup(){
    isgameover = false;
    createCanvas(800,600);
    background(150, 200, 250);
    groundSprites = new Group();
    numGroundSprites = width/GROUND_SPRITE_WIDTH + 1;
    for(var n = 0; n < numGroundSprites; n++){
        var groundSprite = createSprite(n*50, height-25, GROUND_SPRITE_WIDTH,GROUND_SPRITE_HEIGHT);
            groundSprites.add(groundSprite);
    }
    player = createSprite(100, height-75, 25, 50);
    obstacles = new Group();
}

function draw(){
    if(isgameover){
        background(0)
        textAlign(CENTER);
                fill(255);
        text("Game OVER SCRUB, click to restart", camera.position.x, camera.position.y);
    }
    else{
        background(150, 200, 250);
        player.velocity.y = player.velocity.y + gravity;
        if(groundSprites.overlap(player)){
            jumptimes = 0;
            player.velocity.y = 0;
            player.position.y = (height-50) - (player.height/2);
        }
        if(keyDown(UP_ARROW) && jumptimes < 4){
            player.velocity.y = JUMP;
            jumptimes++;
        }
    player.position.x = player.position.x + 5;
    camera.position.x = player.position.x + (width/4);
    var firstGroundSprite = groundSprites[0];
    if(firstGroundSprite.position.x <=camera.position.x  - (width/2 + firstGroundSprite.width/2)){
        groundSprites.remove(firstGroundSprite);
        firstGroundSprite.position.x = firstGroundSprite.position.x + numGroundSprites*firstGroundSprite.width;
        groundSprites.add(firstGroundSprite);
    }
   if(random() >= 0.98){
        var obstacle = createSprite(camera.position.x + width,(height-50) - 15, 30, 30);
        obstacles.add(obstacle);
   }
   var firstObstacles = obstacles[0];
 if(obstacles.length > 0 && firstObstacles.position.x <= camera.position.x - (width/2 + firstObstacles.width/2)){
     removeSprite(firstObstacles);
   }
    obstacles.overlap(player, endgame);
   drawSprites();
}
}
function mousePressed(){
    console.log("pressed");
    if(isgameover){
        for(var n = 0; n < numGroundSprites; n++){
            var groundSprite = groundSprites[n];
            groundSprite.position.x = n*50;
        }
        player.position.x = 100; 
        player.position.y = height - 75;
        obstacles.removeSprites();
        isgameover = false;
    }
}
function endgame() {
    console.log("GAME OVER SCRUB");
    isgameover = true;
    
}   