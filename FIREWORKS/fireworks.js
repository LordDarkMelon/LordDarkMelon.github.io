var rocket;
var rocket2;
var rockets = [];

function setup() {
    var canvas = createCanvas( 1000,1000);
    background("#081217");
}

function mousePressed() {
    rocket = createSprite(mouseX, height - 25, 25, 25);
    rocket2 = createSprite(0, mouseY, 25, 25);
    rocket.targetHeight = mouseY;
    rocket.velocity.y = (mouseY - height) / 100;
    rocket2.velocity.x = mouseX / 100;
    rockets.push(rocket);
}

function draw() {
    for (var i = 0; i < rockets.length; i++) {
        var currRocket = rockets[i];
        if (currRocket.targetHeight <= currRocket.position.y) {
            // currRocket.remove();
        }
    }
    drawSprites();
}