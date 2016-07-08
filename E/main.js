var E;
var L;
var W = false;
function setup() {
    var canvas = createCanvas(1000, 1000);
    background("#6B2469");
    E = createSprite(500, 500, 100, 100);
    EImage = loadImage("Lunlit.png");
    E.addImage(EImage);
    E.scale *= 0.01;
    EImage2 = loadImage("lightbulb.png");
}

function keyReleased() {
    if (E.scale < 0.3) {
        if (key === 'E') {
            E.scale *= 1.3;
        }
    }
}

function Elec() {
    L = createSprite(E.position.x, E.position.y, 10, 10);
    LImage = loadImage("lightning.png");
    L.addImage(LImage);
    var r = random(360);
    L.scale *= 0.1;
    L.setSpeed(random(5, 10), r);
}

function draw() {
    background("#6B2469");
    if (E.scale < 0.3 && E.scale > 0.2) {
        Elec();
            E2 = createSprite(E.position.x,E.position.y,10,10);
            E2.addImage(EImage2);
            E.remove();
    }
    else {
        E.scale *= 0.99;

    }
        drawSprites();
}