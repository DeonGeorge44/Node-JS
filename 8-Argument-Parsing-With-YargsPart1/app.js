const yargs = require("yargs");

// or .argv;

// console.log(process.argv[2]);
// const command = process.argv[2];

// if (command === "add") {
//     console.log("Adding Note!!!.....");
// } else if (command === "remove") {
//     console.log("Removing!!!...");
// }

// //customise yargs version
// yargs.version("1.1.0");
// // console.log(process.argv);
// console.log(yargs.argv);

//Create add command

// yargs.command({
//     command: "add",
//     description: "add a new note",
//     handler: function () {
//         console.log("Adding a new note!.........");
//     },
// });
// yargs.command({
//     command: "remove",
//     description: "remove a note",
//     handler: function () {
//         console.log("removing the note!...");
//     },
// });
// yargs.parse();

//Yargs Part 2

//Creating Add Command
yargs.command({
    command: "add",
    describe: "Adding a new note",
    builder: {
        title: {
            describe: "Note-Title",
            demandOption: true,
            type: "string",
        },
    },
    handler: function (argv) {
        console.log("Title:" + argv.title);
    },
});

//Creating Read Command
yargs.command({
    command: "read",
    describe: "Read a note",
    handler: function () {
        console.log("Reading a note!!...");
    },
});

//Create Remove Command
yargs.command({
    command: "Remove",
    describe: "Removing a note",
    handler: function () {
        console.log("Removing a note!!...");
    },
});

//Create list command
yargs.command({
    command: "list",
    describe: "List Your Notes",
    handler: function () {
        console.log("Listing Out All Notes");
    },
});
yargs.parse();
