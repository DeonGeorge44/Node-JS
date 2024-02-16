import yargs from "yargs";
//--------------Challenge-----------------------------------------------------
//
//Challenge:Add 2 New Commands.
//
//1.Setup command to support list command
//2.Setup commandto support read command.
//3.Test your command by running both commands and ensure corrent output

yargs.command({
    command: "list",
    description: "This is the list-information..",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
        },
    },
    handler: function () {
        console.log("Adding a new note!!!!!!!!.....", argv);
    },
});

yargs.command({
    command: "Read",
    description: "Reading-data",
    handler: function () {
        console.log("Fully-On-Read_Mode");
    },
});

console.log(yargs.argv);
