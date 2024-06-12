function randomInt(min, max) {
   return Math.floor(Math.random() * (max - min) + min)
}

function win(player, choice, cpu) {
   let sum = parseInt(player + cpu);

   if (choice === "pari" && sum % 2 === 0) {
      return "player wins!";
   } else if (choice === "dispari" && sum % 2 != 0) {
      return "player wins";
   } else {
      return "cpu wins!";
   }
}