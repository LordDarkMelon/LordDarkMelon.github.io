var count = 0;
function stars(){
   while(count < 2000){
    starGroup = new Group();
    for(var i = 0; i <100; i++){
    var Ycord= Math.floor((Math.random() * 1018));
    var Xcord = Math.floor((Math.random() * 2051));
   var starSprite = createSprite(Xcord,Ycord, 1,1);
    starGroup.add(starSprite);
  count ++;
  }
}
}
function setup() {
    var canvas = createCanvas(1900, 950);
    background("#000000");
    stars();
}
function draw(){
    background("#000000");
    stars();
drawSprites();
}
