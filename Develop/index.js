const Manager = require("./lib/Manager");
const inquirer = require("inquirer");

function init() {
  createManager();
}

const employeeArr = [];

function createManager() {
  inquirer.prompt([
    {
      type: "input",
      name: "managerName",
      message: "What is the team manager's name?",
    },
    {
      type: "input",
      name: "managerId",
      message: "What is the team manager's Id?",
    },
    {
      type: "input",
      name: "managerEmail",
      message: "What is the team manager's Email?",
    },
    {
      type: "input",
      name: "managerOfficeNumber",
      message: "What is the team manager's office number?",
    },
  ]).then((answers) =>{
    const manager = new Manager(
      answers.managerName, 
      answers.managerId, 
      answers.managerEmail, 
      answers.managerOfficeNumber
      );
      employeeArr.push(manager)
      addMoreEmployees()
  });
}

function addMoreEmployees(){
  inquirer.prompt([
    {
      type: "List",
      name: "WhatToDo",
      message: "What is the team manager's office number?",
      choices: ["New Engineer", "New Intern", "Exit"]
    }
  ]).then((answer) => {
    switch(answer.whatToDo){
        case "New Engineer":
        addEngineer();
        break;
        case "New Intern":
        addIntern();
        break
        default:
          exit()
    }
  })
}

function addEngineer(){
  inquirer.prompt([
    {
      type: "input",
      name: "engineerName",
      message: "What is the engineer's name?",
    },
    {
      type: "input",
      name: "engineerId",
      message: "What is the engineer's Id?",
    },
    {
      type: "input",
      name: "engineerEmail",
      message: "What is the engineer's Email?",
    },
    {
      type: "input",
      name: "engineerGitHub",
      message: "What is the engineer's Github?",
    },
  ])
}

init();
