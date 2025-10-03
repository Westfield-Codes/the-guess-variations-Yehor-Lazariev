var counter = 0;
function rollDice() { 

  let roll = Math.floor(Math.random()*6)+1;
  counter +=1

 if (roll == 6) {
    alert("6! You won in " + counter);
counter = 0;
 }

else {

    rollDice();

}

}


function guessGame() {
let guess = 0;
let answer = Math.floor(Math.random()*100)+1;
alert(answer);
while (guess != answer) {
  guess = prompt("Guess a number, 1-100"); 
  if (guess == answer) alert("Correct!"); 
  else if (guess > answer) alert("Too high!");
  else alert("Too low!")
}
}

/* Simple Guess Program */
function  guessGame() {
// define function guessGame
 
  // generate a random integer 1-100
let answer = Math.floor(Math.random()*100)+1;
  // display the integer for testing purposes only
alert (answer);
  // create guess and set equal to 0 
let guess = 0;
  // loop while guess is not equal to answer
while (guess != answer){
    // set guess equal to asking user to "Guess a number, 1-100"
    guess = prompt("Guess a number, 1-100");
    // if guess equals answer display "Correct!" 
    if (guess == answer) alert("Correct!");
    // or if guess is greater than answer display "Too high!" 
    else if (guess > answer) alert("Too high!");
    // or if guess is less than answer display "Too low!" 
    else if (guess < answer) alert("Too low!");
    // else say "Bad input"
    else alert("bad input")
    // end the loop
}
// end the function
}         