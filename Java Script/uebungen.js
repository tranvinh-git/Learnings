//Aufgabe 1: Erstelle eine Funktion namens "fullName", die zwei Strings als Parameter übernimmt, sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).

// Beispiel: console.log(fullName('Max','Mustermann')); // Ausgabe: Max Mustermann

function fullName(firstName, lastName) {
    return firstName + " " + lastName
}

console.log(fullName("Vinh", "Tran"))  


// Aufgabe 2: Erstelle eine Funktion namens "capitalizeLetters", die einen String als Parameter übernimmt, jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.

// Beispiel: console.log(capitalizeLetters('bAnanE')); // Ausgabe: BANANE

function capitalizeLetters(Text) { // Funktion, die einen Text als Parameter übernimmt
    return Text.toUpperCase(); // toUpperCase() wandelt den Text in Großbuchstaben um
}

console.log(capitalizeLetters('bAnanE'));


//Aufgabe 3: Erstelle eine Funktion namens "countCharacters", die einen String als Parameter übernimmt und die Anzahl der Zeichen in diesem String zurückgibt.

// Beispiel: console.log(countCharacters('banana')); // Ausgabe: 6

function countCharacters(text) {
    return text.length; // length gibt die Anzahl der Zeichen im String zurück
}

console.log(countCharacters('Was ist denn so alles los?')); 


//Aufgabe 4: Erstelle eine Funktion namens "formatToCurrency", die eine Dezimalzahl als Parameter übernimmt und diese als Währungswert im Format 0,00€ zurückgibt. Verwende die toFixed() Methode, um zwei Nachkommastellen sicherzustellen und ersetze den Punkt durch ein Komma.

// Beispiel: console.log(formatToCurrency(0.5)); // Ausgabe: "0,50€"

function formatToCurrency(amount) {
    // Wandelt die Zahl in einen String mit zwei Nachkommastellen
    let formattedAmount = amount.toFixed(2);
    // Ersetzt den Punkt durch ein Komma
    formattedAmount = formattedAmount.replace('.', ',');
    // Fügt das €-Symbol hinzu und gibt das Ergebnis zurück
    return formattedAmount + "€";
}

console.log(formatToCurrency(10.5));