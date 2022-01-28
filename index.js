const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./util/generateHtml");
const employees = [];

const askManager = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        name: "role",
        message: "Select employee role to add",
        choices: ["Engineer", "Intern", "Finish"],
      },
    ])
    .then(function (userInput) {
      console.log(userInput);
      if (userInput.role === "Engineer") {
        addEngineer();
      } else if (userInput.role === "Intern") {
        addIntern();
      } else {
        console.log(employees);
        const generatedHTML = generateHTML(employees);
        fs.writeFile("index.html", generatedHTML, (err) => {
          if (err) {
            console.error(err);
            return;
          }
        });
      }
    });
};

const addManager = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee's id",
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's email address",
      },
      {
        type: "input",
        name: "officeNumber",
        message: "Enter employee's Office Number",
      },
    ])
    .then(function (userInput) {
      console.log(userInput);
      const manager = new Manager(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.officeNumber
      );
      employees.push(manager);
      askManager();
    });
};

const addEngineer = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee's id",
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's email address",
      },
      {
        type: "input",
        name: "github",
        message: "Enter employee's GitHub username",
      },
    ])
    .then(function (userInput) {
      console.log(userInput);
      const engineer = new Engineer(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.github
      );
      employees.push(engineer);
      askManager();
    });
};

const addIntern = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter the employee's name",
      },
      {
        type: "input",
        name: "id",
        message: "Enter employee's id",
      },
      {
        type: "input",
        name: "email",
        message: "Enter employee's email address",
      },
      {
        type: "input",
        name: "school",
        message: "Enter employee's School's name",
      },
    ])
    .then(function (userInput) {
      console.log(userInput);
      const intern = new Intern(
        userInput.name,
        userInput.id,
        userInput.email,
        userInput.school
      );
      employees.push(intern);
      askManager();
    });
};

addManager();
