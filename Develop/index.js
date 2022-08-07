const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

function init() {
  createManager();
}

const employeeArr = [];

function createManager() {
  inquirer
    .prompt([
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
    ])
    .then((answers) => {
      const manager = new Manager(
        answers.managerName,
        answers.managerId,
        answers.managerEmail,
        answers.managerOfficeNumber
      );
      employeeArr.push(manager);
      addMoreEmployees();
    });
}

function addMoreEmployees() {
  inquirer
    .prompt([
      {
        type: "List",
        name: "WhatToDo",
        message: "Which new team member would you like to add?",
        choices: ["New Engineer", "New Intern", "Exit"],
      },
    ])
    .then((answer) => {
      switch (answer.whatToDo) {
        case "New Engineer":
          addEngineer();
          break;
        case "New Intern":
          addIntern();
          break;
        default:
          exit();
      }
    });
}

function addEngineer() {
  inquirer
    .prompt([
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
    .then((answers) => {
      const engineer = new Engineer(
        answers.engineerName,
        answers.engineerId,
        answers.engineerEmail,
        answers.engineerGitHub
      );
      employeeArr.push(engineer);
      addMoreEmployees();
    });
}

function addIntern() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "What is the intern's name?",
      },
      {
        type: "input",
        name: "internId",
        message: "What is the intern's Id?",
      },
      {
        type: "input",
        name: "internEmail",
        message: "What is the intern's Email?",
      },
      {
        type: "input",
        name: "internSchool",
        message: "What is the intern's School?",
      },
    ])
    .then((answers) => {
      const intern = new Intern(
        answers.internName,
        answers.internId,
        answers.internEmail,
        answers.internSchool
      );
      employeeArr.push(intern);
      addMoreEmployees();
    });
}

function exit(){
  fs.writeFileSync("./dist/index.html",team(employeeArr))
}

init();
