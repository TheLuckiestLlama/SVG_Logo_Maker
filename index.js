// Use here to actually run code, others for exports.
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Export a function for some bullshit lmao

const questions = [{
    type: "input",
    message: "Enter logo text: ",
    name: "logoText",
}, {
    type: "list",
    message: "Choose a text color: ",
    name: "textColor",
    choices: ["Black", "Blue", "Green", "Red", "White"],
}, {
    type: "list",
    message: "Choose a logo shape: ",
    name: "logoColor",
    choices: ["Circle", "Square", "Triangle"],
},{
    type: "list",
    message: "Choose a logo color: ",
    name: "logoColor",
    choices: ["Black", "Blue", "Green", "Red", "White"], 
}]