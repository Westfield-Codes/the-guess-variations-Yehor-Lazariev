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