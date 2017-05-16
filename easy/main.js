
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
$("#Yes").on("click", sayyes);
$("#easy").on("click", sayThatWasEasy);