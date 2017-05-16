function sayThatWasEasy() {
   var thatWasEasy = new Audio("how.mp3");
    thatWasEasy.play(); 
    console.log("THAT WAS EASY");
}
$("#easy").on("click", sayThatWasEasy);