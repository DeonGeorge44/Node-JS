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
    handler: function () {
        console.log("This is my-list-command");
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
