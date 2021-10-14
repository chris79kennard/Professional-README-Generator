// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    name: "title",
    type: "input",
    message: "Enter the name of your project",
  },
  {
    name: "desc1",
    type: "input",
    message: "what was your motivation to make this project?",
  },
  {
    name: "desc2",
    type: "input",
    message: "why did you build this project?",
  },
  {
    name: "desc3",
    type: "input",
    message: "what problem does the project solve?",
  },
  {
    name: "desc4",
    type: "input",
    message: "what did you learn from this project?",
  },
  {
    name: "install",
    type: "input",
    message: "what are the steps to installing your project?",
  },
  {
    name: "usage",
    type: "input",
    message: "Provide instructions and examples for use:",
  },
  {
    name: "license",
    type: "input",
    message: "Select a License for your project:",
    choices: ["MIT", "Apache", "PDDL", "MPL"],
  },
  {
    name: "contribute",
    type: "input",
    message: "how can other developer's contribute?",
  },
  {
    name: "tests",
    type: "input",
    message:
      "Provide test/examples for others to understand how to use your project",
  },
  {
    name: "collaborate_YN",
    type: "confirm",
    message: "did you work on this alone?",
  },
  {
    name: "collaborators",
    type: "input",
    message: "Type the name of your collaborator:",
    when: (answers) => answers.collaborate_YN === true,
  },
  {
    name: "collaborator_url",
    type: "input",
    message:
      " provide a link to the collaborators social media or Linkedin (eg. twitter, github):",
    when: (answers) => answers.collaborator && answers.collaborator.length > 0,
  },
  {
    name: "assets_YN",
    type: "confirm",
    message: " Do you use any 3rd-party assets for this project?",
  },
  {
    name: "assets",
    type: "input",
    message: "what assets did you use?:",
    when: (answers) => answers.assets_YN === true,
  },
  {
    name: "asset_url",
    type: "input",
    message: "provide a link to the assets main web presence",
    when: (answers) => answers.asset && answers.asset.length > 0,
  },
  {
    name: "tutorials",
    type: "input",
    message:
      "If you where aided by any tutorial videos please provide links (separate links with commas):",
  },
  {
    name: "features",
    type: "input",
    message: "Explain the features this projects includes?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers);
    generateMarkdown(answers);
  });
}

// Function call to initialize app
init();
