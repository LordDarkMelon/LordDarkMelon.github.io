
function sayThatWasEasy() {
   var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play(); 
    console.log("THAT WAS EASY");
}

function sayyes() {
   var Yes = new Audio("Yes.mp3");
    Yes.play(); 
    console.log("YES");

}
function sayLittle() {
   var Little = new Audio("Little.mp3");
    Little.play(); 
    console.log("YES");
    
}
function sayProfanity() {
   var Profanity = new Audio("Profanity.mp3");
    Profanity.play(); 
    console.log("YES");
    
}

$("#Profanity").on("click", sayProfanity);
$("#Little").on("click", sayLittle);
$("#Yes").on("click", sayyes);
$("#easy").on("click", sayThatWasEasy);