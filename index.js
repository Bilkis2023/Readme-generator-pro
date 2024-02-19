const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);


const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const promptUser = () =>

    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'what is your project title? ',
        },
        
        {
            type: 'input',
            name: 'description',
            message: 'what is your project description? ',
        },
        {
            type: 'input',
            name: 'contents',
            message: 'Show your table of Contents?',

        },
        {
            type: 'input', 
            name: 'installation',
            message: 'add Installation of your project?',
        },


        {
            type: 'list',
            name: 'license',
            choices: ['The Unlicense', 'Boost Software License 1.0', 'MIT License', 'Apache License 2.0', 'Mozilla Public License 2.0'],
            message: 'What is your project License?',
        },


        {
            type: 'input',
            name: 'dependecies',
            message: 'Add your Dependecies Tools?',
        },
        {
            type: 'input',
            name: 'gitHub',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Enter yout email address?',
        },
    ]);

// function to write README file


// function to initialize program
// function init() {
//     promptUser()
//         .then((answers) => {
//             console.log(answers)
//             bilkis2023 = answers.github
//         }
//         )
//         .then(() => console.log('Successfully wrote to index.html'))
//         .catch((err) => console.error(err));

// }


// function call to initialize program

function init() {
    promptUser()
        .then((answers) => writeFileAsync('PRO-README.md', generateMarkdown(answers)))
        .then(() => console.log('Successfully wrote to index.html'))
        .then((err) => console.error(err));

}

init()





