const validator = require("validator");

console.log(validator.isEmail("andrew@example.in"));
console.log(validator.isEmail("example.in"));

console.log(validator.isURL("https://mead.io"));
console.log(validator.isURL("https://mead.i"));
