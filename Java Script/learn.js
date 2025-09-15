let fruits = ["Banana", "Orange", "Apple", "Mango"];

function initArrays() {
    let ContentRef = document.getElementById('myContent');
    ContentRef.innerHTML = "";
    for (let indexFruits = 0; indexFruits < fruits.length; indexFruits ++) {
        ContentRef.innerHTML += `<p>+ ${fruits[indexFruits]}</p>`   


        
    }
}

function sumArray(arr){

    let sum = 0;

    for (let index = 0; index < arr.length; index++) {
        sum += arr[index];
        
    }   
        
       return sum;
    
}

console.log(sumArray([1, 2, 3, 4, 5])); // Erwartete Ausgabe: 15 (1 + 2 + 3 + 4 + 5)