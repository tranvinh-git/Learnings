
let myCondition = !true; // ! not Operator, dreht das ganze um


myCondition = !myCondition; // ---> not Operator

myCondition = true || false || false; // or Operator, wenn es ein true hat, dann ist Ergebnis true

console.log(myCondition)

myCondition1 = true && false // and Operator, wenn es irgendwo ein false hat dann ist es false, es muss alles true sein um true zu sein

console.log(myCondition1)


console.log(true && false); // false, weil nicht alles true &&

console.log(true || false); // true, weil es ein true hat ||

console.log(false && true); // false, weil es ein && hat

console.log(true && (false || true)); // true

console.log((true && false) || true); // es hat zwar ein && aber am ende hat es ein || deshalb ist es ein true

console.log(!(true && false)); // es hat zwar ein && und sollte ein false sein aber durch das ! wurde es gedreht deshalb ein true

console.log(!(false || true)); // genau das selbe, durch das ! wurde es gedreht

console.log(!(true && (false || true))); // auch gedreht durch das!

console.log((true && !(false || true)) || (false && (true || false))); // false, normal true

console.log((true || !(false && true)) && (!(true || false) || (false && true))); // false, normal true


myCondition10 = 45 == "45"; // == testet ob exakt gleich ist, ohne Type
console.log(myCondition10);

myCondition11 = 45 === 45; // === testet ob exakt gleich ist, mit Type --> true
console.log(myCondition11);

myCondition12 = 45 === "45"; // === testet ob exakt gleich ist, mit Type --> false
console.log(myCondition12);

myCondition13 = 45 < 123; // < grösser Abfrage
console.log(myCondition13);

myCondition14 = 45 <= 123; // < grössergleich Abfrage
console.log(myCondition14);

myCondition15 = 45 > 123; // > kleiner Abfrage
console.log(myCondition15);

myCondition16 = 45 != "47"; // != ungleich Abfrage, ohne Type, testet ob exakt gleich, ohne Type
console.log(myCondition16);

myCondition17 = 45 !== 47; // !== ungleich Abfrage, mit Type, testet ob exakt gleich, mit Type -> true
console.log(myCondition17);

myCondition18 = 45 !== "47"; // !== ungleich Abfrage, mit Type, testet ob exakt gleich, mit Type -> true
console.log(myCondition18);

console.log(5 <= 10); // -> true, weil 5 kleiner gleich 10 ist

console.log(15 == 15); // -> true, weil 15 gleich 15 ist

console.log(20 > 10); // -> true, weil 20 grösser als 10 ist

console.log((7 <= 7) == (5 < 10)); // -> true, weil 7 kleiner gleich 7 ist und 5 kleiner als 10 ist

console.log((10 > 5) == (3 < 2)); // -> false, weil 10 grösser als 5 ist und 3 kleiner als 2 ist

console.log((12 >= 8) && (8 < 9)); // -> true, weil 12 grösser gleich 8 ist und 8 kleiner als 9 ist

console.log((3 == 3) || (10 > 20)); // -> true, weil 3 gleich 3 ist und 10 grösser als 20 ist

console.log((6 != 6) || (15 <= 20)); // -> true, weil 6 ungleich 6 ist und 15 kleiner gleich 20 ist

console.log((7 < 5) == !(10 >= 10)); // -> false, weil 7 kleiner als 5 ist und 10 grösser gleich 10 ist, aber durch das ! wird es gedreht

console.log((4 >= 4) && (8 < 15) && (3 == 3)); // -> true, weil 4 grösser gleich 4 ist, 8 kleiner als 15 ist und 3 gleich 3 ist

// Wenn Dann Bedinung if-else

let myIfCondition = false;

if (myIfCondition) { 
    console.log("hello world! if teil");
} else if(myIfCondition) {
    console.log("hello world! if-else teil");
} else {
    console.log("hello wolrd! else teil");
}

let myIfCondition1 = false;

if (myIfCondition1 || myCondition) { 
    console.log("hello world! if teil");
} else if(myIfCondition1) {
    console.log("hello world! if-else teil");
} else {
    console.log("hello wolrd! else teil");
}


// Aufgabe 1:
if (5 <= 10) {
    console.log("a");
}

// Aufgabe 2:
if (15 == 15) {
    console.log("b");
}

// Aufgabe 3:
if (20 > 10) {
    console.log("c");
}

// Aufgabe 4:
if (7 <= 7) {
    console.log("a");
} else {
    console.log("b");
}

// Aufgabe 5:
if (10 > 5) {
    console.log("a");
} else if (3 < 2) {
    console.log("b");
} else {
    console.log("c");
}

// Aufgabe 6:
if (12 >= 8 && 8 < 9) {
    console.log("a");
} else {
    console.log("b");
}
// Aufgabe 7:
if (3 == 3) {
    console.log("a");
} else if (10 > 20) {
    console.log("b");
} else {
    console.log("c");
}
// Aufgabe 8:
if (6 != 6) {
    console.log("a");
} else if (15 <= 20) {
    console.log("b");
} else {
    console.log("c");
}
// Aufgabe 9:
if (7 < 5) {
    console.log("a");
} else if (!(10 >= 10)) {
    console.log("b");
} else {
    console.log("c");
}
// Aufgabe 10:
if (4 >= 4 && 8 < 15 && 3 == 3) {
    console.log("a");
} else {
    console.log("b");
}
