const connection = require('../config/connection.js')
const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');
require('console.table');

const start = require('./start.js');

const viewAllEmployees = () => {

    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, ceo_id as `ceo ID` FROM employeeTrackerDB.employee;'
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log(" ")
        console.table(`All Employees_`);
        console.table(res);
        console.log(" ")
        runPrompt();
    })
}

const viewEmployeesByRole = () => {
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
                    runPrompt();
                    break;
            }

        })
}

const ceoQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="1";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('CEO_');
        console.table(res);
        viewEmployeesByRole();
    })

}

const cfoQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="2";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('CFO_');
        console.table(res);
        viewEmployeesByRole();
    })

}
const engineerQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="3";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Software Engineers_');
        console.table(res);
        viewEmployeesByRole();
    })

}
const marketingQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="4";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('Marketing Director_');
        console.table(res);
        viewEmployeesByRole();
    })

}
const hrQuery = () => {
    const query = 'SELECT id as `Emp ID`, first_name as `First Name`, last_name as `Last Name`, role_id as `Role ID`, manager_id as `Manager ID` FROM employeeTrackerDB.employee WHERE role_id="5";';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log('HR Director');
        console.table(res);
        viewEmployeesByRole();
    })

}

module.exports = {viewAllEmployees, viewEmployeesByRole, ceoQuery, cfoQuery, engineerQuery, marketingQuery, hrQuery, }