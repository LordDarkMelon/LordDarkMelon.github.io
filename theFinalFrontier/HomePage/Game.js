var count = 0;

function stars() 
{
    starGroup = new Group();
    while (count < 2000)
    {
        for (var i = 0; i < 100; i++) 
        {
            var Ycord = Math.floor((Math.random() * 3000));
            var Xcord = Math.floor((Math.random() * window.screen.availWidth));
            var starSprite = createSprite(Xcord, Ycord, 1, 1);
            starGroup.add(starSprite);
            count++;
        }
    }
}

function mousePressed() {
    starGroup.remove();
    stars();
}
function setup() 
{
    var canvas = createCanvas(window.screen.availWidth,3000);
    background("#000000");
}

function draw()
{
    background("#000000");
    stars();
    drawSprites();
}
