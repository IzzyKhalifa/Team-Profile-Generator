const inquirer = require("inquirer");
const fs = require("fs");

const initialQuestion = [
  {
    type: "input",
    name: "mName",
    message: "Enter your team manager's name",
  },
  {
    type: "input",
    name: "employeeID",
    message: "Enter your employee ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
  {
    type: "input",
    name: "officeNum",
    message: "Enter your office number",
  }
];

const menu = [
  {
    type: "list",
    name: "choose",
    message: "Choose an option",
    choices: ["Engineer", "Intern", "Finish my team"],
  }
];

const engineerQuest = [
  {
    type: "input",
    name: "name",
    message: "Enter engineer's name",
  },
  {
    type: "input",
    name: "ID",
    message: "Enter engineer's ID",
  },
  {
    type: "input",
    name: "gitHub",
    message: "Enter engineer's GitHub's username",
  }
];

const internQuest = [
    {
        type: 'input',
        name: 'name',
        message: "Enter intern's name"
    },
    {
        type: 'input',
        name: 'ID',
        message: "Enter intern's ID"
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter intern's email address"
    },
    {
        type: 'input',
        name: 'school',
        message: "Enter intern's school"
    }
];