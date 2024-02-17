const yargs = require("yargs");
const notes = require("./notes.js");

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note-Title",
            demandOption: true,
            type: "String",
        },
        body: {
            describe: "Note-Body",
            demandOption: true,
            type: "String",
        },
    },

    handler: function (argv) {
        console.log("Title" + argv.title);
        console.log("Body" + argv.body);
    },
});
