var config = {
apiKey: "AIzaSyB-xndkMEPfzvHRxrwlIX9t10l6naK6K_Y",
    authDomain: "sketch-56606.firebaseapp.com",
    databaseURL: "https://sketch-56606.firebaseio.com",
    storageBucket: "sketch-56606.appspot.com",
};
firebase.initializeApp(config);

var pointsData = firebase.database().ref();
var points = [];
function setup(){
var canvas = createCanvas(1000,1000);    
    background(255);
    fill(0);
    pointsData.on("child_added",function(point){
        points.push(point.val());
    });
    canvas.mouseMoved(function () {
    if (mouseIsPressed){
        drawPoint();
    }
});
}
function draw() {
    for(var i = 0; i <points.length; i++){
        var point = points[i];
        ellipse(point.x,point.y,10,10);
    }
}
function drawPoint() {
    pointsData.push({x: mouseX, y:mouseY});
}


function saveDrawing() {
saveCanvas();
}
$("#saveDrawing").on("click", saveDrawing);

function clearDrawing(){
  pointsData.remove();
    location.reload();
  pointsData.on("child_removed", function () {
  points = [];
});
}
$("#clearDrawing").on("click",clearDrawing);
