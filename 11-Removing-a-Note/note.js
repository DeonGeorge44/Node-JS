const { Module } = require("module");
const { chalks } = require("chalk");
const removeNote = function (title) {
    const notes = loadNotes();
    const notesToKeep = notes.filter(function (note) {
        return note.title !== title;
    });
    saveNotes(notesToKeep);
};

const saveNotes = function (notes) {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync("./notes.json", dataJSON);
};

const loadNotes = function () {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {}
};
module.exports = {
    removeNote: removeNote,
};

//
//Challenge 7:Use chalks to provide useful logs for remove
//
//1.If a note is removed,print "Note-Removed!" with a green background.
//2.If a no note is removed,print "No Note-Found!"with a red background.

if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note-Removed!"));
    saveNotes(notesToKeep);
} else {
    console.log(chalk.red.inverse("No Note Found!!!...."));
}
