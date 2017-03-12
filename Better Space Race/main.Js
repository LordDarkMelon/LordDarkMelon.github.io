var count = 0;
function stars(){
    while(count<1000){
    starGroup = new Group();
    for(var i = 0; i <100; i++){
    var Ycord= Math.floor((Math.random() * 1018));
    var Xcord = Math.floor((Math.random() * 2051));
    starSprite = createSprite(Xcord,Ycord, 1,1);
    starGroup.add(starSprite);
    count ++;
    }
}
}
function setup() {
    var canvas = createCanvas(2051, 1018);
    background("#000000");
    var rocket = createSprite(width/2,height/2, 42,52);
    rocketImage = loadImage("rocket.png");
    rocket.addImage(rocketImage);
    stars();
}
function draw(){
    background("#000000");
    stars();
    if (keyDown(RIGHT_ARROW)) {
        rocket.position.x = rocket.position.x + 10;
}
    if(keyDown((LEFT_ARROW))){
        rocket.position.x = rocket.position.x - 10;
}
    drawSprites();
}
