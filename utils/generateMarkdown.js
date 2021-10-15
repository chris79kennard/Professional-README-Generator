// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } else if (license === "PDDL") {
    return `[![License: PDDL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`;
  } else if (license === "MPL") {
    return `[![License: MPL](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
}

// let license = renderLicenseBadge();

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let license = renderLicenseBadge(data.license);
  return `
# ${data.title}
## Description
- ${data.desc1}
- ${data.desc2}
- ${data.desc3}
- ${data.desc4}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

- ${data.install}

## Usage

- ${data.usage}

## Credits

- [${data.collaborators}](${data.collaborator_url})

- [${data.asset}](${data.asset_url})

-${data.tutorials}


## License

-${license}



## Features

- ${data.features}

`;
}

module.exports = generateMarkdown;

// ![alt text](assets/images/screenshot.png)
