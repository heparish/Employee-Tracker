const connection = require('../config/connection.js')

const inquirer = require('inquirer');
const cTable = require('console.table');
const chalk = require('chalk');

const employee = require('./employee.js');
const department = require('./department.js');
const role = require('./role.js');

const start = () => {
    inquirer
    .prompt({
        name: 'start',
        type: 'list',
        message: chalk.bold.green('Select an action below.'),
        choices: [
            'View all employees.',
            'View all roles.',
            'View all departments.',
            new inquirer.Separator(), 
            'Add an employee.',
            'Add a department.',
            'Add a role.',
            new inquirer.Separator(), 
            'Update employee roles.',
            new inquirer.Separator(), 
            'Exit.',
            new inquirer.Separator(), 
        ]
    })
    .then((answer) => {
        switch (answer.start) {
            case 'View all employees.':
                employee.viewAllEmp();
                break;

            case 'View all roles.':
                role.viewAllRoles();
                break;

            case 'View all departments.':
                department.viewAllDepts();
                break;

            case 'Add an employee.':
                employee.addEmp();
                break;

            case 'Add a department.':
                department.addDept();
                break;

            case 'Add a role.':
                role.addRole();
                break;

            case 'Update employee roles.':
                employee.updateEmp();
                break;

            case 'Exit.':
                console.table('Goodbye! Thanks for using Employee Tracker!'.magenta);
                connection.end();
                break;

            default:
                console.log(`Invalid input: ${answer.userInput}`);
                break;
 }})};

 module.exports.start = start;