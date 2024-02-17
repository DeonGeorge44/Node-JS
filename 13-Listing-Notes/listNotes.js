const chalk = require("chalk");

const listNotes = () => {
    const notes = loadNotes("./notes.json");
    console.log(chalk.inverser("Your Notes"));

    notes.forEach((note) => {
        console.log(note.title);
    });
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync("notes.json");
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
};
