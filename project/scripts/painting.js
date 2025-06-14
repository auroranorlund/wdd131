const input = document.querySelector('#note');
const noteButton = document.querySelector('#submit-note');
const list = document.querySelector('#list');

noteButton.addEventListener('click', function() {
    if (input.value.trim() !== ""){
        displayList(input.value);
        notesArray.push(input.value);
        setNotesList();
        input.value = "";
        input.focus();
    }
    else {
        input.focus();
    }
});

let notesArray = getNotesList() || [];

notesArray.forEach(note => {
    displayList(note);
});

function displayList(item) {
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.setAttribute("class", "delete")
    deleteButton.textContent = "X";
    li.append(deleteButton);
    list.append(li);
    deleteButton.addEventListener('click', function(){
    list.removeChild(li);
    deleteNote(li.textContent);
    input.focus();
    })
}

function setNotesList() {
    localStorage.setItem('notesList', JSON.stringify(notesArray));
}

function getNotesList() {
    return JSON.parse(localStorage.getItem('notesList'));
}

function deleteNote(note) {
    note = note.slice(0, note.length - 1);
    notesArray = notesArray.filter((item) => item !== note);
    setNotesList();
}