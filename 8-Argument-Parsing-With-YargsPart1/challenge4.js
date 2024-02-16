//------Challenge:Add an option to yargs -----------------------------------------------------------------
//
//1.Setup a body option for the add command.
//2.Configure a description,make it required,and for it to be a string
//3.Log the body value in the handler function
//4.Test Your Work

const yargs = require("yargs");

yargs.command({
    command: "add",
    describe: "Add a new note",
    builder: {
        title: {
            describe: "Note-Title",
            demandOption: true,
            type: "string",
        },
        body: {
            describe: "Note-Body",
            demandOption: true,
            type: "String",
        },
    },
    handler: function (argv) {
        console.log("Title:" + argv.title);
        console.log("Body:" + argv.body);
    },
});
yargs.parse();
