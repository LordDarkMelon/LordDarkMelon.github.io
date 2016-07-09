 var users;
 var UId;
 var playerArray = [];
 var playerSprites = [];
 var config = {
  apiKey: "AIzaSyCeylwYo1QMoVyITviu-7_SOb8GlyWdfr8",
  authDomain: "chat-app-ee1ec.firebaseapp.com",
  databaseURL: "https://chat-app-ee1ec.firebaseio.com",
  storageBucket: "chat-app-ee1ec.appspot.com",
 };
 firebase.initializeApp(config);

 var chatData = firebase.database().ref('chat');
 var userData = firebase.database().ref('users');
userData.on("child_added",playersAdded);
function playersAdded(newPlayer) {
 playerArray.push(newPlayer.val());
 console.log(newPlayer.val());
 playerSprites.push(createSprite(newPlayer.val().positionX,newPlayer.val().positionY,25,50));
 
}
 function pushMessage(event) {
  if (event.keyCode == 13) {
   var name = $('#nameInput').val();
   var text = $('#messageInput').val();
   chatData.push({
    name: name,
    text: text
   });
   $('#messageInput').val('');
  }
 }
 userData.once('value').then(function(snapshot) {
  users = snapshot.val();
  console.log(snapshot);
  console.log(PlayerObject);
  console.log(users);
  PlayerObject.UId = Object.keys(users).length;
    userData.push(PlayerObject);
 });
 chatData.on("child_added", showMessage);

 function showMessage(msg) {
  var message = msg.val();
  var messageSender = message.name;
  var messageContent = message.text;

  var messageE1 = $("<div/>").addClass("message");
  var senderE1 = $("<span/>").text(messageSender + ":")
  var contentE1 = $("<span/>").text(messageContent);

  messageE1.append(senderE1);
  messageE1.append(contentE1);
  $('#messages').append(messageE1);
 }
 $('#messageInput').keypress(pushMessage);

 function ButtonPressed() {}
 $("#button").on("click", ButtonPressed);