let myList = [14, "Banana", true, 15];

console.log(myList);


// Element ändern
const cars = ["Tesla", "Audi", "BMW"];

function initArrays(){
    cars[0] = "Banana";
}
    console.log(cars);


// pop löscht das letzte Element
const fruits = ["Banana", "Orange", "Apple", "Mango"];

let singletestVar1 = fruits.pop();

function initArrays(){
    console.log(fruits);
}

console.log(fruits);

// push schiebt ein Element hinten an
const car = ["Audi", "BMW", "Saab", "Tesla"];

let singletestVar = car.push("Opel", "Benz");

// function initArrays(){
//    console.log(singletestVar);
//}         Damit kann man die Anzahl sich zeigen lassen 

function initArrays(){
    console.log(car);
}


// Aufgabe 1
function sumArray(arr){
    let sum = 0; 
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if (arr[i] == "error") { // falls es ein Fehler gibt, stoppt es!
            console.error("verdammt da war ein Fehler");
            break;
        }
     }
    return sum;
}

console.log(sumArray([3, 7, 1, "error", 4], 5)); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)

function sumArray(arr){
    let sum = 0; 
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        
        if (arr[i] == "error") { // falls es ein Fehler gibt, stoppt es! 
            console.error("verdammt da war ein Fehler Nr. 2");
            continue; // Überspringen bei "error" mit continue, hier geht er wieder nach oben
        }
     }
    return sum;
}

console.log(sumArray([3, 7, 1, "error", 4], 5)); // Erwartete Ausgabe: 15 (3 + 7 + 1 + 4)



function initArrays(){

    let refList = document.getElementsByClassName("red_box");

     for (let index = 0; index < refList.length; index++) {
        const singleRef = refList[index];
        singleRef.innerText = index;
     }
}