//
//Challenge:Define and use a function in new file.
//
//1.Create a new file called notes.js
//2.Create getNotes function that returns "Your Notes...".
//3.Export getNotes function.
//4.From app.js load in and call the function printing message to console.

const getNotes = require("./notes");

const msg = getNotes();
console.log(msg);
