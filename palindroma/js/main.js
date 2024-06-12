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

let in1 = prompt("dammi una parola, verifichero' che sia palindroma")

console.log(in1);
console.log(isPalindrome(in1));

const element = document.getElementById("text");

const p1 = document.createElement("p");

const node = document.createTextNode(in1 + "  " + isPalindrome(in1));

p1.appendChild(node);
element.appendChild(p1);