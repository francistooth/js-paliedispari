let in1 = prompt("dammi una parola, verifichero' che sia palindroma")

function isPalindrome(str) {
   let j = str.length - 1;
   for (let i = 0; i < str.length / 2; i++) {
      if (str[i] != str[j]) {
         return false;
      }
      j--;
   }
   return true;
}


console.log(in1);
console.log(isPalindrome(in1));