// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Can you describe your project?'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Do you have a table of contents'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Tell us how to install your program'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Tell us how to use your program'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Do you have any credits, people you would like to thank?'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Licensed?',
        choices: ['', 'phone', 'telekinesis']
    }
];

// TODO: Create a function to write README file
function writeToFile(results, data) {
    fs.writeFile("README.md", generateMarkdown(results, data) , (err) =>
    err 
    ? console.log(err) 
    : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(writeToFile)
}

// Function call to initialize app
init();
