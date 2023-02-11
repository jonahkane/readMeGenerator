// TODO: Include packages needed for this application
// require 
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',

}  
];

// refer to read me file "when i..."

const fileName = "test.md"
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        err ? console.error(err) : console.log('Commit logged!')

    })
}

// TODO: Create a function to initialize app
function init() {
inquirer.prompt(questions) 
.then(function(data){
    console.log(data);
    writeToFile(fileName, generateMarkdown(data))
})

}
// Function call to initialize app
init();
