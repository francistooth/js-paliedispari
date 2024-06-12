let num, choice;

do {
   choice = prompt("pari o dispari? ");
   num = parseInt(prompt("dammi un numero da 1 a 5"));
} while ((num > 0 && num < 6) && (choice != "pari" && choice != "dispari"))

let cpu = randomInt(1, 6);


console.log(choice);
console.log(num);
console.log(cpu);
console.log(win(num, choice, cpu));

const element = document.getElementById("text");

const p1 = document.createElement("p");
const result = document.createElement("h1");

const playerNode = document.createTextNode("player: " + num);
const playerChoiceNode = document.createTextNode("player choice: " + choice);
const cpuNode = document.createTextNode("cpu: " + cpu);
const resultNode = document.createTextNode("result: " + win(num, choice, cpu));


p1.appendChild(playerNode, playerChoiceNode, cpuNode);
result.appendChild(resultNode);

element.appendChild(p1);
element.appendChild(result);