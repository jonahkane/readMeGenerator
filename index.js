// these are the packages that are required for the application to function properly
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// creating an array of questions, or prompts, that the uswer will see when they initialize the app
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
},  
{
    type:'input',
    message:"Please write a short description of your project.",
    name: "description"
},
{
    type:'input',
    message: "Are there any installation instructions for this project?",
    name: "installation"
},
{
    type: "input",
    message: "How will someobody make use of this project?",
    name: "usage"
},

{
    type:'list',
    message: "Which license do you want your project to have?",
    name: "license",
    choices: [
        "None",
        "Apache License 2.0",
        "GNU General Public License v3.0",
        "MIT License",
        "BSD 2-Clause 'Simplified' license",
        "BSD 3-Clause 'New' or 'Revised' License",
        "Boost Software License 1.0",
        "Creative Commons Zero v1.0 Universal",
        "Eclipse Public License 2.0",
        "GNU Affero General Public License v3.0",
        "GNU General Public License v2.0",
        "Mozilla Public License 2.0",
        "The Unlicense",
    ]
},
{
    type: "input",
    message: "Are there any additional contributors to this project? (If so, please list them)",
    name: "contributions"
},
{
    type:'input',
    message: "What command should be used to run tests? For example: npm run test.",
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

//creating a function that will write data to our read me file - the file will be called "newREADME.md"
const fileName = "newREADME.md"
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>{
        err ? console.error(err) : console.log('Commit logged!')
    })
}

// function that will initialize app
function init() {
inquirer.prompt(questions) 
.then(function(data){
    console.log(data);
    writeToFile(fileName, generateMarkdown(data))
})

}
// Function call to initialize app
init();
