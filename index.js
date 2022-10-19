const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const path = require("path");
const fs = require("fs");
const inquirer = require("inquirer");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const initialQuestion = [
  {
    type: "input",
    name: "name",
    message: "Enter your name",
  },
  {
    type: "input",
    name: "id",
    message: "Enter your employee ID",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
  {
    type: "list",
    name: "role",
    message: "Choose an option",
    choices: ["Manager","Engineer", "Intern"],
  },
];

const team = [];

const generateTeam = () => {
  inquirer
    .prompt(initialQuestion)
    .then((ans1) => {
      inquirer
        .prompt([
          {
            when: () => ans1.role ==="Manager",

            type: "input",
            message: "What is your office number?",
            name: "officeNumber",
          },
          {
            when: () => ans1.role === "Engineer",

            type: "input",
            message: "What is the GitHub Username?",
            name: "github",
          },

          {
            when: () => ans1.role === "Intern",

            type: "input",
            message: "What is the school's name?",
            name: "school",
          },

          {
            type: "confirm",
            message: "Would you like to add another team member?",
            name: "addMember",
          },
        ])

        .then((ans2) => {

          if(ans1.role === "Manager") {
            const manager = new Manager(
              ans1.name,
              ans1.id,
              ans1.email,
              ans2.officeNumber,
              
            );
            team.push(manager);
          }

          if (ans1.role === "Engineer") {
            const engineer = new Engineer(
              ans1.name,
              ans1.id,
              ans1.email,
              ans2.github,
              
            );
            team.push(engineer);
          }

          if (ans1.role === "Intern") {
            const intern = new Intern(
              ans1.name,
              ans1.id,
              ans1.email,
              ans2.school
            );
            team.push(intern);
          }
          if (ans2.addMember) {
            generateTeam();
          } else {
            team.forEach((team) => {
              console.log(team);
            });
            fs.writeFile(outputPath, render(team), (err) => {
              if (err) {
                throw err;
              }
              console.log("Success, team HTML is created!");
            });
          }
        });
    })
    .catch((err) => {
      if (err) {
        throw err;
      }
    });
};

generateTeam();
