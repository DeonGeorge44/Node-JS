const fs = require("fs");
const book = {
    title: "Ego is the enemy",
    author: "Ryan Holiday",
};

const JSONbook = JSON.stringify(book);
console.log(JSONbook);

const parseData = JSON.parse(JSONbook);
console.log(parseData);
console.log(parseData.author);

fs.writeFileSync("1-json.json", JSONbook);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
console.log(data.title);
