const fs = require("fs");

const getNotes = function () {
    return "Your-Notes...";
};

const addNote = function (title, body) {
    const notes = loadNotes();
    console.log(notes);
};

const loadNotes = functiion() {
  try{
    const dataBuffer = fs.readFileSync('notes.json');
  }
}
