  var config = {
    apiKey: "AIzaSyCeylwYo1QMoVyITviu-7_SOb8GlyWdfr8",
    authDomain: "chat-app-ee1ec.firebaseapp.com",
    databaseURL: "https://chat-app-ee1ec.firebaseio.com",
    storageBucket: "chat-app-ee1ec.appspot.com",
  };
firebase.initializeApp(config);

var chatData = firebase.database().ref();
function pushMessage(event){
 if(event.keyCode == 13){
    var name = $('#nameInput').val();
    var text = $('#messageInput').val();
    chatData.push({name: name, text: text});
    $('#messageInput').val(''); 
 }
}
chatData.on("child_added", showMessage);

function showMessage(msg){
    var message = msg.val();
    var messageSender = message.name;
    var messageContent = message.text;
    
    var messageE1 = $("<div/>").addClass("message");
    var senderE1 = $("<span/>").text(messageSender + ":")
    var contentE1 = $("<span/>").text(messageContent);
    
    messageE1.append(senderE1);
    messageE1.append(contentE1);
    $('#messages').append(messageE1);
    console.log(messageE1);
     console.log(senderE1);
      console.log(contentE1);
}
$('#messageInput').keypress(pushMessage);