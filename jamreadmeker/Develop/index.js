// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'prompt',
        message: 'We are going to go through these things to make your Professional README: Email, Username, Title of Project, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. Go ahead and get them ready. Press enter when you have it all.'

    },
    { 
        type: 'input',
        name: 'email',
        message: 'Enter your email.'

    },
    { 
        type: 'input',
        name: 'username',
        message: 'What is your github username?'

    },
    { 
        type: 'input',
        name: 'title',
        message: 'What is the Title of your project?'

    },
    {
        type: 'input',
        name: 'description',
        message: 'Can you Description your project?'
    },
    {
        type: 'input',
        name: 'contents',
        message: 'Do you have a Table of Contents '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Tell us how to Install your program'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Tell us how to use your program'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Is your project Licensed?',
        choices: ["mit", "apache-2.0", "gpl-3.0", "gpl-2.0", "mpl-2.0", "isc", "none"]
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Do you have any Credits, people you would like to thank?'
    },
    {
        type: 'input',
        name: 'test',
        message : 'Do you have any Test you would like to add'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can people reach you for questions? We already have your email and github username so direct the user when and how to utilize them.'
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
    .then((results, data) => writeToFile(results,data))
    
}

// Function call to initialize app
init();
