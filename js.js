 // Need a computer play function to return a value (Rock, Paper, or sissors)



 let playerSelection = "";
 let select = ["Rock", "Paper", "Scissors"];
 let computerSelection = "";

 const btn = document.querySelector("#btn");
 btn.addEventListener('click', playRound);

 function playRound() {
     let compScore = 0;
     let playerScore = 0;


     for (let i = 0; i < select.length; i++) {
         select[i] = select[i].toUpperCase();
         //console.log(select[i]);
     }

     // select.map(a => a.toUpperCase());
     while (compScore < 3 && playerScore < 3) {
         playerSelection = prompt("Pick from Rock, Paper, or Scissors to play");
         computerSelection = computerPlay();
         computerSelection = computerSelection.toUpperCase();
         playerSelection = playerSelection.toUpperCase();
         if (playerSelection == select[0] || playerSelection == select[1] || playerSelection == select[2]) {
             if (playerSelection == select[0] && computerSelection == select[2]) {
                 console.log("Wow! You won! " + playerSelection + " beats " + computerSelection);
                 playerScore++
                 //console.log("W1");
             } else if (playerSelection == select[1] && computerSelection == select[0]) {
                 console.log("Wow! You won! " + playerSelection + " beats " + computerSelection);
                 playerScore++
                 //console.log("W2");
             } else if (playerSelection == select[2] && computerSelection == select[1]) {
                 console.log("Wow! You won! " + playerSelection + " beats " + computerSelection);
                 playerScore++
                 //console.log("W3");
             } else if (playerSelection == computerSelection) {
                 console.log("Wow! Tie! you both picked " + playerSelection + "!");
             } else {
                 console.log("Wow! You Lose! " + computerSelection + " beats " + playerSelection);
                 compScore++
                 //console.log("L");
             }
         } else {
             playerSelection = prompt("Try again please, pick from Rock, Paper, or Scissors to play");
             playerSelection = playerSelection.toUpperCase();
         }

     }
     if (playerScore == 3) {
         alert("Wow! You won best 3 out of 5!")
     } else {
         alert("Wow! You lost 3 our of 5!")
     }


     // if (playerSelection == select[0]) {
     //   return 1;
     //}else {
     //  return 0;
     //}


 }

 function computerPlay() {

     let varSelect = Math.floor(Math.random() * select.length);
     return select[varSelect];
     //  alert(compSelect[varSelect]);
 }