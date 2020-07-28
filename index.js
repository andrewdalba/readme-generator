const inquirer = require('inquirer');
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
        validate: title => {
            if(title.length === 0){
                return 'Please enter a valid title';
            }
            else if (title.toLowerCase() === title){
                return 'Title must contain an upper case letter'
            }
            else{
                return true;
            }
        }

    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: email => {
            if(email.indexOf('@') != -1){
                return true
            }
            else{
                return 'Please enter a valid email address.'
            }
        }

    }
]).then( response => {
     console.log(response.title + " " + response.email);
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

