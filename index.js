// Use here to actually run code, others for exports.
const inquirer = require('inquirer');
const fs = require('fs');
// const shapes = require('./lib/shapes')
// TODO: Export the classes to make shapes.

const questions = [{
    type: "input",
    message: "Enter logo text: ",
    name: "logoText",
}, {
    // Make an input later
    type: "list",
    message: "Choose a text color: ",
    name: "textColor",
    choices: ["Black", "Blue", "Green", "Red", "White"],
}, {
    type: "list",
    message: "Choose a logo shape: ",
    name: "logoShape",
    choices: ["Circle", "Square", "Triangle"],
},{
    // Make an input later
    type: "list",
    message: "Choose a logo color: ",
    name: "logoColor",
    choices: ["Black", "Blue", "Green", "Red", "White"], 
}]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        if (err) throw err;
        console.log("Generated logo!");
    });
}




function init() {
    console.log("Welcome to SVG Logo Generator!")
    inquirer
        .prompt(questions)
        .then((response) =>
        JSON.stringify(response))
        .then((response) =>
        writeToFile("logo.svg", response))
    }

init();