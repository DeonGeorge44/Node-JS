const getNotes = function () {
    return "Your Notes...";
};

const addNotes = function (title, body) {
    const notes = loadNotes();
    console.log(notes);

    notes.push({
        title: title,
        body: body,
    });
};

const loadNotes = function () {
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
    addNotes: addNotes,
};
