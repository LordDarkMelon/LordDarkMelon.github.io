var n = 0;
var gravity = 0.1;
var JUMP = -6.75;
var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;
var bullet;
var vector;0
function setup(){
   createCanvas(800,800);
   background(0,0,0);
        groundSprites = new Group();
        var groundSprite = createSprite(n, height, 50,50);
            groundSprites.add(groundSprite);
}

function draw(){
    drawSprites();
}