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

function init() {
    let logo = document.createElementNS("svg")
    console.log("Welcome to SVG Logo Generator!")
    inquirer
        .prompt(questions)
        .then((response) =>
        console.log(response))
        // generateLogo(response)
        // writeFile("logo", response)
    }

init();