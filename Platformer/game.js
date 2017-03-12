var gravity = 0.1;
var JUMP = -6.75;
var groundSprites;
var GROUND_SPRITE_WIDTH = 50;
var GROUND_SPRITE_HEIGHT = 50;
var numGroundSprites;
var n = 0;
var bar = 125;
var PlayerObject;

function setup() {
    var canvas = createCanvas(1500, 900);
    canvas.parent('game');
    background(150, 200, 250);
    groundSprites = new Group();
    numGroundSprites = width / GROUND_SPRITE_WIDTH + 1;
    var groundSprite = createSprite(n, height - 25, 25000, 50);
    groundSprites.add(groundSprite);

    var groundSprite = createSprite(n + 150, height - 250, 500, 50);
    groundSprites.add(groundSprite);
    var groundSprite = createSprite(n + 900, height - 250, 500, 50);
    groundSprites.add(groundSprite);
    player = createSprite(150, height - 75, 25, 50);
    health = createSprite(player.position.x, player.position.y - 75.5, bar, 15);
    PlayerObject = {
        name: "hai",
        positionX: player.position.x,
        positionY: player.position.y,
    };
}

function mousePressed() {
    var direction = calcDirection(mouseX - width / 2, height / 2 - mouseY);
    bullets = createSprite(player.position.x, player.position.y, 10, 10);
    bullets.setSpeed(10, direction);
}

function draw() {
    background(150, 200, 250);
    camera.position.x = player.position.x;
    camera.position.y = player.position.y;
    player.velocity.y = player.velocity.y + gravity;
    health.position.x = player.position.x;
    health.position.y = player.position.y - 50;
    textSize(32);
    text("hai", player.position.x - 25, player.position.y - 75);
    if (groundSprites.overlap(player)) {
        jumptimes = 0;
        player.velocity.y = 0;
        player.position.y = (player.position.y + 50) - (player.height + 0.1);
    }
    if ((keyDown(UP_ARROW)) && jumptimes < 4) {
        player.velocity.y = JUMP;
        jumptimes++;
    }
    if (keyDown(RIGHT_ARROW)) {
        player.position.x = player.position.x + 5;
    }
    if (keyDown(LEFT_ARROW)) {
        player.position.x = player.position.x - 5;
    }
    drawSprites();
}

function calcDirection(difX, difY) {
    var a = (difX);
    var b = (difY);
    var c = Math.atan(b / a);
    if (mouseX < width / 2) {
        var c = Math.atan(-b / a) - Math.PI;
    }
    else {
        var c = Math.atan(b / -a);
    }
    var d = c * 180 / Math.PI;
    return d;
}