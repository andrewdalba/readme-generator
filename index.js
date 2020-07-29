const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: title => {
            if (title.length === 0) {
                return 'Please enter a valid title';
            }
            else if (title.toLowerCase() === title) {
                return 'Title must contain an upper case letter'
            }
            else {
                fs.writeFile('README.md', "# " + title + '\n', function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })

                return true;
            }
        }

    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: email => {
            if (email.indexOf('@') != -1) {
                fs.appendFile('README.md', "## Email Address" + '\n' + email + '\n', function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })
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
                fs.appendFile('README.md', "## Installation" + '\n' + install + '\n', function (err) {
                    if (err) {
                        return console.log(err);
                    }
                })
                return true;
            }
            else {
                return 'Please enter valid install instructions';
            }
        }

    }
]).then(response => {
    console.log("The README for " + response.title + " has been successfully created." );
});

// array of questions for user
const questions = [

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();

