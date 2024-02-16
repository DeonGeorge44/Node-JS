//---Challenge:Work with JSON and the file system
//
//1.Load and parse the json data
//2.Change the name and age property using your info
//3.Stringify the changed object and overwrite the original data.
//4.Test your work by viewing data in the json file.

const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Rahul";
user.age = "22";

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);
