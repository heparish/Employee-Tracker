const connection = require('../config/connection.js')
const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');
require('console.table');

const start = require('./start.js');

// VIEW ALL EMPLOYEES
const viewAllEmp = () => {

    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID` FROM emp_trackerDB.employee;'
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log(" ")
        console.table(chalk.yellow(`All Employees`));
        console.table(res);
        console.log(" ")
        start.start();
    })
}

// ADDING EMPLOYEES
const addEmp = () => {
	inquirer
        .prompt([
			{
                name: 'id',
                type: 'input',
                message: "enter the employee's ID: ",
            },
            {
                name: 'firstName',
                type: 'input',
                message: "enter the employee's first name: ",
            },
            {
                name: 'lastName',
                type: 'input',
                message: "enter the employee's last name: ",
            },
            {
                name: 'roleID',
                type: 'input',
                message: "enter the employee's role ID: ",
			},
			{
                name: 'managerID',
                type: 'input',
                message: "enter the employee's manager's ID: ",
            }
        ])
        .then((answer) => {
            connection.query(
                'INSERT INTO employee SET ?',
                {
					id: answer.id,
                    first_name: answer.firstName,
                    last_name: answer.lastName,
                    role_id: answer.roleID,
                	manager_ID: answer.managerID,
                },
                (err) => {
                    if (err) throw err;
					console.log(chalk.green('the employee has been added'));

					start.start();
                }
            );
        });
};

module.exports = {viewAllEmp, addEmp }