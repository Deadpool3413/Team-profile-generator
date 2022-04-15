const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');


// initial questions to generate the page
const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team manager?',
        validate: nameInput => {
            if (nameInput){
                return true
            }else{
                console.log('Please enter the name of the team manager.')
                return false;
            }
        }
    }
]
inquirer.prompt(managerQuestions)
    .then((answers) => {
    //do stuff here
    });