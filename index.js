const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');
const employeeList = [];
const writeFile = require('./utils/generate-site.js');



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
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the ID of the Team Manager',
        validate: (idInput) => {
            if (isNaN(idInput)) {
                return 'Please enter a valid ID.';
            }
            return true;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the Team Manager?',
        validate: emailInput =>{
            if(emailInput) {
                return true;
            }else{
                console.log('Please enter the email of the Team Manager.');
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the office number of the Team Manager?',
        validate: (officeNumberInput) => {
            if (isNaN(officeNumberInput)){
                return 'Please enter a valid office number.';
            }
            return true;
        }
    }
    
];

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'nextStep',
            message: 'Which of the following steps would you like to do next?',
            choices: [
                'Add an Engineer.',
                'Add an Intern.',
                'Finish building my Team'
            ]
        }
    ])
    .then(data => {
        switch (data.nextStep) {
            case 'Add an Engineer.':
                addEngineer();
                break;
            case 'Add an Intern.':
                addIntern();
                break;
            case 'Finish building my Team.':
                const pageHtml = generatePage(employeeList);
                fs.writeFile(pageHtml);
                break;
        }
    })
};

const addEngineer= () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Engineer?',
            validate: nameInput => {
                if (nameInput){
                    return true;
                }else{
                    console.log('Please enter the name of the Engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the Engineer?',
            validate: (idInput) => {
                if (isNaN(idInput)) {
                    return 'Pleases enter a valid ID.';
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the Engineer?',
            validate: emailInput => {
                if(emailInput){
                    return true
                }else{
                    console.log('Please enter the email of the Engineer.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is the Github username of the Engineer?',
            validate: usernameInput => {
                if (usernameInput){
                    return true;
                }else{
                    console.log('Please enter the Github username of the Engineer.');
                    return false;
                }
            }
        }
    ])
    .then(data =>{
        const teamMember = new Engineer(data);
        console.log(data);
        console.log(teamMember.role);
        employeeList.push(teamMember);
        console.log(employeeList);
        addEmployee();
    })
};

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the ID of the intern?',
            validate: (idInput) => {
                if (isNaN(idInput)) {
                    return "Please enter a valid ID.";
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the intern?',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter the email of the intern.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the school of the intern?",
            validate: schoolInput => {
                if (schoolInput) {
                    return true;
                } else {
                    console.log('Please enter the school of the intern.');
                    return false;
                }
            }
        }
    ])
    .then(data => {
        const teamMember = new Intern(data);
        console.log(data);
        console.log(teamMember.role);
        employeeList.push(teamMember);
        console.log(employeeList);
        addEmployee();
    })
};

function init() {
    return inquirer.prompt(managerQuestions);
};

init()
    .then(data => {
        return new Manager(data);
    })
    .then(data => {
        const managerEntry = data;
        console.log(data);
        employeeList.push(managerEntry);
        console.log(employeeList);
    })
    .then(addEmployee)
    .catch(err => {
        console.log(err);
    });

// inquirer.prompt(managerQuestions)
//     .then((answers) => {
//     //do stuff here
//     console.log(answers)
//     console.log(answers.name, answers.id)
//     });