var rocket;
var rockets = [];
var gravity = 1;
var fires = [];
var scaleCounter = 0;

function setup() {
    var canvas = createCanvas(1000, 1000);
    background("#081217");
    rocketSound = loadSound("rocket.mp3");
}

function mousePressed() {
    rocket = createSprite(mouseX, height - 25, 12.5, 25);
    rocketImage = loadImage("https://hydra-media.cursecdn.com/minecraft.gamepedia.com/b/b0/Firework_rocket.png")
    rocket.addImage(rocketImage);
    rocket.scale = 0.5;
    rocket.targetHeight = mouseY;
    rocket.velocity.y = -10;
    rockets.push(rocket);
}

function draw() {
    background("#081217");
    for (var i = 0; i < rockets.length; i++) {
        var currRocket = rockets[i];
        if (currRocket.targetHeight >= currRocket.position.y) {
            var position = currRocket.position
            currRocket.remove();
            console.log(position.x)
            explode(position.x, position.y)
            currRocket.position.y = height;
        }
    }
    scaleCounter++;
    if (scaleCounter == 10) {
        scaleCounter = 0;
        for (var n = 0; n < fires.length; n++) {
            fires[n].velocity.y += gravity;
            fires[n].scale *= 0.9;
            if (fires[n].scale <= 0.1) {
                fires[n].remove();
            }
        }
    }
    drawSprites();
}

function explode(x, y) {
    rocketSound.play();
    for (var a = 0; a < 500; a++) {
        fire = createSprite(x, y, 5, 5);
        var r = random(360);
        fire.setSpeed(random(5, 10), r);
        fires.push(fire)
    }
}