// INPUT

// let discount = 50; 
// let price = 500; 

calculatePrice(50, 500, 10); // Parameter, statt manuelle tippen, 50 für price und 500 für discount und tax = 10
 
calculatePrice(50, 300, 10); // console.log((price - discount - tax) * 1.19)

// Algorithmus

function calculatePrice(discount, price, tax) {
    console.log((price - discount - tax) * 1.19); 
}


// OUTPUT

outputPrice(50, 500, 10);

console.log(outputPrice(50, 300));

function outputPrice(discount, price) {
    let value = (price - discount) * 1.19; // --> Value = Wert
    
    return value // alles was danach kommt, passiert nichts. Nach return wird alles abgebrochen
}


