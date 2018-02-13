var  nextQues, lastQues, randomNumber,  request, diffAttemps;

var n = 5;
var attempts = 3;
var rate = 10.00;
var prize = 10.00;
var currentAttemp = 0;
var currentGame = 1;
var totalPrize = 0;
var j = 0;
var i = 0;

var welcomeQues = confirm("Do you want to play a game?");

if (welcomeQues) {
    randomNumber = Math.floor(Math.random() * (n + 1));
    
    for (j = 0; j < currentGame; j++) {

        for (i = 0; i < attempts; i++) {
            diffAttemps = attempts - currentAttemp;
            currentAttemp++;
            request =+ prompt("Please enter the number from 0 to " + n + "\nAttempts left: " + diffAttemps + "\nTotal prize: " + Math.floor(totalPrize) + "$\nPossible prize on current attemp: " + Math.floor(prize) + "$", "");
            prize = prize / 2;

            if (randomNumber === request) {
                totalPrize = Math.floor(totalPrize + (prize * 2));
                rate = rate * 3;
                nextQues = confirm("Do you want to continue the game?");

                if (nextQues === true) {
                    n = n * 2;
                    randomNumber = Math.floor(Math.random() * (n + 1));
                    prize = rate;
                    currentAttemp = 0;
                    currentGame++;
          
                } else {
                    attempts = 0;
                    console.log("Thank you for the game! Your prize is: ", Math.floor(totalPrize),"$");
                    welcomeQues = confirm("Do you want to play a game?");

                    if (welcomeQues === true) {
                      n = 5;
                        randomNumber = Math.floor(Math.random() * (n + 1));
                        currentAttemp = 0;
                        totalPrize = 0;
                        prize = 10;
                        rate = 10;
                        attempts = 3;
                  
                        currentGame++;
                    }
                }

            } else if ((currentAttemp === attempts) && (randomNumber !== request)) {
              console.log("Thank you for the game! Your prize is: ", Math.floor(totalPrize),"$");
                lastQues = confirm("Do you want to play again?");

                if (lastQues === true) {
                    n = 5;
                    randomNumber = Math.floor(Math.random() * (n + 1));
                    currentAttemp = 0;
                    totalPrize = 0;
                    prize = 10;
                    rate = 10;
                    currentGame++;
                    
                } else { 
                    attempts = 0;
                }
            }
        }
    }

} else {
    console.log("You did not become a millionaire");
}