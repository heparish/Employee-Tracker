// start with basic question then a switch case and call functions for each thing (employee role etc)
const connection = require('../config/connection.js')

const inquirer = require('inquirer');
const cTable = require('console.table');
const chalk = require('chalk');

const employee = require('./employee.js');
const department = require('./department.js');
const role = require('./role.js');


connection.connect((err) => {
    if (err) throw err;
    console.table(`
#   ______     __    __     ______   __         ______     __  __     ______     ______        ______   ______     ______     ______     __  __     ______     ______    
#  /\  ___\   /\ "-./  \   /\  == \ /\ \       /\  __ \   /\ \_\ \   /\  ___\   /\  ___\      /\__  _\ /\  == \   /\  __ \   /\  ___\   /\ \/ /    /\  ___\   /\  == \   
#  \ \  __\   \ \ \-./\ \  \ \  _-/ \ \ \____  \ \ \/\ \  \ \____ \  \ \  __\   \ \  __\      \/_/\ \/ \ \  __<   \ \  __ \  \ \ \____  \ \  _"-.  \ \  __\   \ \  __<   
#   \ \_____\  \ \_\ \ \_\  \ \_\    \ \_____\  \ \_____\  \/\_____\  \ \_____\  \ \_____\       \ \_\  \ \_\ \_\  \ \_\ \_\  \ \_____\  \ \_\ \_\  \ \_____\  \ \_\ \_\ 
#    \/_____/   \/_/  \/_/   \/_/     \/_____/   \/_____/   \/_____/   \/_____/   \/_____/        \/_/   \/_/ /_/   \/_/\/_/   \/_____/   \/_/\/_/   \/_____/   \/_/ /_/ 
#                                                                                                                                                                        
`.magenta)
    runPrompt();
});

const start = () => {
    inquirer
    .prompt({
        name: 'start',
        type: 'list',
        choices: [
            'View all employees.',
            'View employees by role.',
            'View employees by department.',
            'Add an employee.',
            'Add a department.',
            'Add a role.',
            'Update employee roles.',
            'Exit.'
        ]
    })
    .then((answer) => {
        switch (answer.userInput) {
            case 'View all employees.':
                viewAllEmployees();
                break;

            case 'View employees by role.':
                viewEmployeesByRole();
                break;

            case 'View employees by department.':
                viewEmployeesByDepartment();
                break;

            case 'Add an employee.':
                addEmployee();
                break;

            case 'Add a department.':
                addDepartment();
                break;

            case 'Add a role.':
                addRole();
                break;

            case 'Update employee roles.':
                updateEmployeeRole();
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