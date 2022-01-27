const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employees = [];

const askManager = () => {
    return inquirer.prompt(
        [
            {
                  type: "list",
                  name: "role",
                  message: "Select employee role to add",
                  choices: ["Engineer", "Intern", "Finish"],
            }
        ]
    ).then(function(userInput){
        console.log(userInput);
        if(userInput.role === "Engineer") {
            addEngineer();
        }
        else if(userInput.role === "Intern") {
            addIntern();
        }
        else {
            console.log(employees);
        }

      })
}

const addManager = () => {
  return inquirer.prompt(
  [
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
    }
  ])
  .then(function(userInput){
    console.log(userInput);
    employees.push(userInput);
    askManager();
  })
}

const addEngineer = () => {
    return inquirer.prompt(
    [
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
      }
    ])
    .then(function(userInput){
      console.log(userInput);
      employees.push(userInput);
      askManager();
    })
  }

  const addIntern = () => {
    return inquirer.prompt(
    [
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
      }
    ])
    .then(function(userInput){
      console.log(userInput);
      employees.push(userInput);
      askManager();
    })
  }

addManager();

