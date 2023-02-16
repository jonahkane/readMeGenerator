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
},  
{
    type:'input',
    message:"Please write a short description of your project",
    name: "description"
},
{
    type:'input',
    message: "Are there any installation instructions for this project?",
    name: "installation"
},
{
    type: "input",
    message: "What does the user need to know about using the repository?",
    name: "usage"
},

{
    type:'list',
    message: "Which license do you want your project to have?",
    name: "license",
    choices: [
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "Boost Software License 1.0",
        "Eclipse Public License 2.0",
        "The Unlicense",
    ]
},
{
    type: "input",
    message: "What does the user need to know about contributing to the repository?",
    name: "contribute"
},
{
    type:'input',
    message: "What command should be run to run tests? For example: npm run test",
    name: "tests"
},
{
    type:'input',
    message: "what is your GitHUb user name?",
    name: "username"
},
{
    type:'input',
    message: "what is your email address?",
    name: "email"
},
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
