const connection = require('../config/connection.js')
const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');
require('console.table');

const start = require('./start.js');

// VIEWS ROLES
const viewAllRoles = () => {
    inquirer.prompt({
        name: 'roleSelect',
        type: 'list',
        message: 'Please select a role.',
        choices: [
            'ceo',
            'cfo',
            'software engineer',
            'marketing director',
            'hr director',
            'Back to previous menu.'
        ]
    })
        .then((answer) => {
            switch (answer.roleSelect) {
                case 'ceo':
                    ceoQuery();
                    break;
                case 'cfo':
                    cfoQuery();
                    break;
                case 'software engineer':
                    engineerQuery();
                    break;
                case 'marketing director':
                    marketingQuery();
                    break;
                case 'hr director':
                    hrQuery();
                    break;
                case 'Back to previous menu.':
                    start.start();
                    break;
            }

        })
}

// LIST EMPLOYEE BY QUERY
const ceoQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM emp_trackerDB.employee WHERE role_id="1";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('CEO_');
        console.table(res);
        viewAllRoles();
        start.start();
    })

}

const cfoQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM emp_trackerDB.employee WHERE role_id="2";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('CFO_');
        console.table(res);
        viewAllRoles();
        start.start();
    })

}
const engineerQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM emp_trackerDB.employee WHERE role_id="3";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Software Engineers_');
        console.table(res);
        viewAllRoles();
        start.start();
    })

}
const marketingQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM emp_trackerDB.employee WHERE role_id="4";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Marketing Director_');
        console.table(res);
        viewAllRoles();
        start.start();
    })

}
const hrQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM emp_trackerDB.employee WHERE role_id="5";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('HR Director');
        console.table(res);
        viewAllRoles();
        start.start();
    })

}

// CREATE ROLE
const addRole = () => {
	inquirer
        .prompt([
            {
                name: 'id',
                type: 'input',
                message: "enter the id of the role: ",
            },
            {
                name: 'title',
                type: 'input',
                message: "enter the title of the role: ",
			},
			{
                name: 'salary',
                type: 'input',
                message: "enter the salary of the role: ",
			},
			{
                name: 'departmentId',
                type: 'input',
                message: "enter the department id of the role: ",
            }
        ])
        .then((answer) => {
            connection.query(
                'INSERT INTO role SET ?',
                {
                    id: answer.id,
					title: answer.title,
					salary: answer.salary,
					department_id: answer.departmentId
                },
                (err) => {
                    if (err) throw err;
					console.log(chalk.yellow('the role has been created'));

					start.start();
                }
            );
        });
};

module.exports = { viewAllRoles, ceoQuery, cfoQuery, engineerQuery, marketingQuery, hrQuery, addRole }