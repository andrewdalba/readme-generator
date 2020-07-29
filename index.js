const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
// inquirer.prompt([
//     {
//         type: 'input',
//         message: 'What is your project title?',
//         name: 'title',
//         validate: title => {
//             if (title.length === 0) {
//                 return 'Please enter a valid title';
//             }
//             else if (title.toLowerCase() === title) {
//                 return 'Title must contain an upper case letter'
//             }
//             else {
//                 fs.writeFile('README.md', "# " + title + '\n', function (err) {
//                     if (err) {
//                         return console.log(err);
//                     }
//                 })

//                 return true;
//             }
//         }

//     },
//     {
//         type: 'input',
//         message: 'What is your email address?',
//         name: 'email',
//         validate: email => {
//             if (email.indexOf('@') != -1) {
//                 fs.appendFile('README.md', "## Email Address" + '\n' + email + '\n', function (err) {
//                     if (err) {
//                         return console.log(err);
//                     }
//                 })
//                 return true;
//             }
//             else {
//                 return 'Please enter a valid email address.'
//             }
//         }

//     },
//     {
//         type: 'input',
//         message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
//         name: 'install',
//         validate: install => {
//             if (install.length != 0) {
//                 fs.appendFile('README.md', "## Installation" + '\n' + install + '\n', function (err) {
//                     if (err) {
//                         return console.log(err);
//                     }
//                 })
//                 return true;
//             }
//             else {
//                 return 'Please enter valid install instructions';
//             }
//         }

//     }
// ]).then(response => {
//     console.log("The README for " + response.title + " has been successfully created.");
// });

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        default: path.basename(process.cwd()),
        name: 'title',
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: email => {
            if (email.indexOf('@') != -1) {
                return true;
            }
            else {
                return 'Please enter a valid email address.'
            }
        }
    },
    {
        type: 'input',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
        name: 'install',
        validate: install => {
            if (install.length != 0) {
                return true;
            }
            else {
                return 'Please enter valid install instructions';
            }
        }

    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    // takes the individual array elements from 'questions' and puts them into the inquirer module
    // the module takes that data to prompt the user
    // THEN the response is put into a function
    inquirer.prompt(questions).then((response) => {
        // '...' takes all the elements of an object and separates them with a comma.
        // This means that "generateMarkdown()" will have multiple arguments
        // each argument will be a different element of "response" keeping its key/value pair format
        // console.log(response);
        // "README.md" get put into the "fileName" paramter
        // whatever is returned from "generateMarkdown" is put into the data "paramter"
        writeToFile("README.md", generateMarkdown({
            ...response
        }));
    })

}

// function call to initialize program
init();


// // console-logs to understand certain functions
// console.log(process.cwd()); //returns the path to the js file we are currently in
// console.log(path.join(process.cwd(), 'style.css')); // returns path to the file we are currently in with \style.css at the end of it


