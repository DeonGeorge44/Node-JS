const notes = require("./note.js");

//

//----Challenge
//
//1.SetUp a remove command to take a required "--title" option
//2.Create and export a removeNote function from note.js
//3.Call RemoveNote in remove command handler.
//4.Have RemoveNote log the title of the note to be removed.
//5.Test your work using: node app.js remove --title="some title".

//Create Remove Command

const yargs = require("yargs");
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
        console.log("removing-the-note!!...");
    },
});
yargs.parse();
