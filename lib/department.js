const connection = require('../config/connection.js')
const mysql = require('mysql');
const inquirer = require('inquirer');
const chalk = require('chalk');
require('console.table');

const start = require('./start.js');

// VIEW DEPARTMENT
const viewAllDepts = () => {
	console.log( chalk.bold.green('Viewing all departments') );

	connection.query('SELECT * FROM department', (err, results) => {
		if (err) throw err;
		inquirer
		  .prompt([
			{
			  name: 'choice',
			  type: 'list',
			  choices() {
				const choiceArray = [];

				results.forEach((person) => {
				  choiceArray.push(person.id);
				});

				console.table(results);
				
				return choiceArray;
			  },
			  message: 'select the id of the department you would like to view . . . ',
			}
		  ])
		  .then((answer) => {
			connection.query(
                'SELECT employee.id, employee.role_id, employee.manager_id, employee.last_name, employee.first_name, role.title, role.salary FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id WHERE ?',
                [
					{
						'department.id': answer.choice,
					},
				],
                (err, res) => {
                    if (err) throw err;
					console.log(chalk.yellow('here are the employees of the selected department') );
					console.table(res)
					console.log('\n')
					
					start.start();
                }
			);			
	  });
	})
};

// ADD DEPARTMENT
const addDept = () => {
	inquirer
        .prompt([
            {
                name: 'id',
                type: 'input',
                message: "enter the id of the department: ",
            },
            {
                name: 'name',
                type: 'input',
                message: "enter the name of the department: ",
            }
        ])
        .then((answer) => {
            connection.query(
                'INSERT INTO department SET ?',
                {
                    id: answer.id,
                    name: answer.name,
                },
                (err) => {
                    if (err) throw err;
					console.log (chalk.green('the department has been created'));

					start.start();
                }
            );
        });
};

module.exports = { viewAllDepts, addDept };