import yargs from "yargs";

// or .argv;

// console.log(process.argv[2]);
// const command = process.argv[2];

// if (command === "add") {
//     console.log("Adding Note!!!.....");
// } else if (command === "remove") {
//     console.log("Removing!!!...");
// }

//customise yargs version
yargs.version("1.1.0");
// console.log(process.argv);
console.log(yargs.argv);

//Create add command

yargs.command({
    command: "add",
    description: "add a new note",
    handler: function () {
        console.log("Adding a new note!.........");
    },
});
yargs.command({
    command: "remove",
    description: "remove a note",
    handler: function () {
        console.log("removing the note!...");
    },
});
yargs.parse();
