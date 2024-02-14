//
//Challenge
//
//1.Install version 5.3.0 of chalk
//2.Load chalk into app.js
//3.Use it to print "Success" to the console in green.
//4.Test Your Work
//
//Bonus:Use Docs to mess around with other styles.Make text bold and inversed.

// console.log(chalk.green("SUCCESS!!!..."));
import chalk from "chalk";
const greenMsg = chalk.bgGreenBright.bold("SUCCESS");
console.log(greenMsg);
console.log(chalk.blue.bgRed.bold("FAILURE"));
