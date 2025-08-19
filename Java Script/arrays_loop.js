let myList = [14, "Banana", true, 15, "Vinh"];

const cars = [];
cars[0]= "Saab";
cars[1]= "Audi";
cars[2]= "BMW";

function initArrays(){
    myList[2] = "like Banana"
    console.log(myList);
}

console.log(cars);


// pop löscht das letzte Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let singletestVar1 = fruits.pop();

function initArrays(){
    console.log(singletestVar1);
}
// push schiebt ein Element hinten an
const car = ["Audi", "BMW", "Saab", "Tesla"];

let singletestVar = car.push("Opel");

// function initArrays(){
//    console.log(singletestVar);
//}         Damit kann man die Anzahl sich zeigen lassen 

function initArrays(){
    console.log(car);
}