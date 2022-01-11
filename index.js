const inquirer = require('inquirer')
const fs = require('fs')
const generateHtml = require('./utils/generateHtml')

const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')
const Manager = require('./lib/Manager')


let employeeChart = [];
let empEngineer = [];
let empIntern = [];
let empManager = [];

const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What's the employee's name?",
        },
        {
            type: "input",
            name: "id",
            message: "What's the employee's id?",
        },
        {
            type: "input",
            name: "email",
            message: "What's the employee's email?",
        },
        {
            type: "list",
            name: "role",
            message: "What's the employee's role?",
            choices: ["Engineer","Intern", "Manager"]
        },
    ])
};


const engineerQuestion = () => {
    return inquirer.prompt({
        type: "input",
        name: "gitHub",
        message: "What is the employee's github username?",
    })
};

const internQuestion = () => {
    return inquirer.prompt({
        type: "input",
        name: "school",
        message: "Where did the employee go to school?",
    })
};

const managerQuestion = () => {
    return inquirer.prompt({
        type: "input",
        name: "officeNumber",
        message: "What is the employee's office number?",
    })
};

const addEmployee = () => {
    return inquirer.prompt({
        type: "input",
        name: "anotherEmloyee",
        message: "Are there more employee's?",
        default: false,
    })
};

async function confirmEmployee() {
    const confirm = await addEmployee();
    if (confirm.anotherEmloyee) {
        await makeTeam();
    }
    return employeeChart;
}

async function makeTeam() {
    const input = await questions();
    const {name, id, email} = input;
    switch (input.role) {
        case "Engineer":
            const engineerInput = await engineerQuestion();
            const {gitHub} = engineerInput;
            let engineer = new Engineer(name, id, email, gitHub);
            empEngineer.push(engineer);
            await confirmEmployee();
        break;

        case "Intern":
            const internInput = await internQuestion();
            const {school} = internInput;
            let intern = new Intern(name, id, email, school);
            empIntern.push(intern);
            await confirmEmployee();
        break;

        case "Manager":
            const managerInput = await managerQuestion();
            const {officeNumber} = managerInput;
            let manager = new Manager(name, id, email, officeNumber);
            empManager.push(manager);
            await confirmEmployee();
        break;
    }
}

async function createHtml(data) {
    await makeTeam();
    fs.writeFileSync('./dist/index.html', generateHtml(empEngineer, empIntern, empManager))
};

const init = () => {
    createHtml()
        .catch((err) => console.error(err));
};

init();