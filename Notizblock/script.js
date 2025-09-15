// Array
let notes = ['bilder', ' anzeigen', ' notizen anzeigen lassen'];

let trashNotes = [];



// -> wann werden sie angezeigt?
function renderNotes() {
    // ich muss definieren wo sie anzuzeigen sind
    let contentRef = document.getElementById('content')
    contentRef.innerHTML = ""; // Content wird geleert bevor wieder neu gerendert wird

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}

function getNoteTemplate(indexNote) {
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

//notizne hinzufügen

// eingabe vom user
function addNote() {
    let noteInputRef = document.getElementById('note_input')
// eingabe auslesen
    let noteInput = noteInputRef.value;
// eingabe den notizen hinzufügen/speichern
    notes.push(noteInput);
// eingabe anzeigen lassen
    renderNotes();
// eingabe wieder löschen nach input
noteInputRef.value = "";

}

//notizen löschen


function deleteNote(indexNote) {
    //welche notiz muss gelöscht werden, hier indexNote, 1
    notes.splice(indexNote, 1);
    //wann muss die notiz gelöscht werden, mit button onclick in function 

    renderNotes();
}

//notizen archivieren

function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content')
    trashContentRef.innerHTML = ""; 

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getNoteTemplate(indexTrashNote);
    }
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}

function deleteNote(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);

    renderNotes();
    renderTrashNotes();
}