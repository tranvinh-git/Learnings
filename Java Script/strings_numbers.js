

let myDivison = 10/5;
console.log(myDivison);

let myMulty = 10 * 5;
console.log(myMulty)

let myPlus = 10 + 10;
console.log(myPlus);

let myPow = 2**6;
console.log(myPow);

let myMinus = 10 - 2;
console.log(myMinus);


// Strings

let myConcat = "hello" + " world!"; // funktioniert nicht mit Minus -
console.log(myConcat);

//combination string and numbers

let myCombination = "5.5" - 5;  // sobald es keine Zahl ist geht es nicht, weil der Wert keine Zahl ist
console.log(myCombination);

let myCombination1 = 5 + 5 // ---> 10

console.log(myCombination1);

let myCombination2 = 5 - "2"; // ---> 3 

console.log(myCombination2);

let myCombination3 = 5 - "2w"; // ---> NaN (Not a Number) 

console.log(myCombination3);

let myCombination4 = "5" - 4.2; // ---> Ergebnis

console.log(myCombination4);

// trim and length

let myString = "hallo  "

myString = myString.trim(); // entfernt Leerzeichen am Anfang und Ende
console.log(myString.length); // gibt die Länge des Strings zurück