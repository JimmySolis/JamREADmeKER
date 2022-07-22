// TODO: Include packages needed for this application
// I added all of my programs needed to make my app work.
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
    { 
        type: 'input',
        name: 'prompt',
        message: 'We are going to go through these things to make your Professional README: Email, Username, Title of Project, Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions. Go ahead and get them ready. Press enter when you have it all.',
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
        type: 'confirm',
        name: 'contentsConfirm',
        message: 'Would you like a Table of Contents?',
        default: false
    }, 
    {
        type: 'input',
        name: 'installation',
        message: 'Tell us how to Install your program.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Tell us how to use your program.'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Is your project Licensed?',
        choices: ["mit", "apache-2.0", "gpl-3.0", "gpl-2.0", "mpl-2.0", "isc", "none"]
    },
    // this will soon be implemented, I need more time to figure it out.
    // {
    //     type: 'confirm',
    //     name: 'creditsConfirm',
    //     message: 'Do you have any Credits, people you would like to thank?',
    //     // default: false,
    //     // when(result) {
    //     //     return data.credits;
    //     //   }
    // },
    {
        type: 'input',
        name: 'credits',
        message: 'List everyone you would like to thank.',
    },
    {
        type: 'input',
        name: 'test',
        message : 'Do you have any Test you would like to add?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'How can people reach you for questions? We already have your email and github username so direct the user when and how to utilize them.'
    }
];

// Here I want to make my application do a confirm so that a prompt appears if the user selects yes.

// function giveTheCredits(){
//     var credits = questions[10];
//     console.log(credits)
// }

// giveTheCredits();

// TODO: Create a function to write README file

// I use the node method here to allow me to take my info and pass it to a different file.
// This will help me prossess the info and get what I need.
function writeToFile(results, data) {
    fs.writeFile("README.md", generateMarkdown(results, data) , (err) =>
    err 
    ? console.log(err) 
    : console.log('Success!')
  );
}

// TODO: Create a function to initialize app
// once the index.js is ran the program will start. 
// prompted, and then results are collected.
function init() {
    inquirer
    .prompt(questions)
    .then((results, data) => writeToFile(results,data))
    
}

// Function call to initialize app
init();
