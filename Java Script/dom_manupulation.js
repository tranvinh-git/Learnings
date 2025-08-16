let title = document.getElementById("website_title");
title.innerHTML = " noch neuer Titel";


document.getElementById("test_div").innerHTML = "<p>test</p>";

document.getElementById("test_div").classList.add("green_bg");
//document.getElementById("test_div").classList.add("green_bg");
//document.getElementById("test_div").classList.remove("green_bg");


// Button innerhalb des Divs mit id="button" erstellen
document.getElementById("button").innerHTML = '<button id="meinbBtton">Klick mich!</button>';
// ...existing code...


console.log(document.getElementById("test_input").value);

document.getElementById("pTag").innerHTML = "<p>Genau</p>"; 

document.getElementById("2pTag").innerHTML = "<p>ganz genau</p>"; 

document.getElementById("2pTag").classList.add("p-tag");

document.getElementById("pTag").classList.add("p-tag");
