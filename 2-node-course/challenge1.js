//
// -----------Challenge 1 - Using appendFileSync()
//
//Challenge :Append a message to notes.txt
//
//1. UseAppendFileSync to append to the file.
//2. Run the script
//3. Check your work by opening the file and viewing the appended text

const fs = require("fs");

fs.appendFileSync("append.txt", "The text inside these file is appended from append.js");
