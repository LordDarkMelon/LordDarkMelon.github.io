var message;
var roles = ["villager", "werewolf", "seer", "tanner", "mason", "hunter"];
var rolesTaken = [];
var index = Math.floor((Math.random() * 6));
var roleObject = {
    villager: "villager.jpg",
    werewolf: "werewolf.jpg",
    seer: "seer.jpg",
    tanner: "tanner.jpg",
    mason: "mason.jpg",
    hunter: "hunter.jpg"
};
var config = {
    apiKey: "AIzaSyCeylwYo1QMoVyITviu-7_SOb8GlyWdfr8",
    authDomain: "chat-app-ee1ec.firebaseapp.com",
    databaseURL: "https://chat-app-ee1ec.firebaseio.com",
    storageBucket: "chat-app-ee1ec.appspot.com",
};

firebase.initializeApp(config);

var database = firebase.database().ref();

function pushMessage(event) {
    if (event.keyCode == 13) {
        var name = $('#nameInput').val();
        database.push({
            name: name
        });
        $('#nameInput').val('');
        $("#nameInput").remove();
        RoleGroup = new Group();
        var RoleSprite = createSprite(500, height / 2 - 250, 500, 500);
        RoleGroup.add(RoleSprite);
        RoleImage = loadImage(roleObject[roles[index]]);
        RoleSprite.addImage(RoleImage);
        text(roles[index], 500, 500);
        roles.splice(index, 1)
        console.log(roles);
    }
    else {}
}
database.on("child_removed", function() {
    location.reload();
});
database.on("child_added", showMessage);

function showMessage(msg) {
    message = msg.val().name;
    console.log(message);
    var messageE1 = $("<div/>").addClass("message");
    var senderE1 = $("<span/>").text(message);

    messageE1.append(senderE1);
    $('#messages').append(messageE1);
}

$('#nameInput').keypress(pushMessage);

function setup() {
    var canvas = createCanvas(1000, 1000);
}

function draw() {
    drawSprites();
}

function reset() {
    database.remove();
    location.reload();
}
$("#reset").on("click", reset);