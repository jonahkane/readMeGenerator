// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  - *****somehow need to get the license badge to appear here
  ## Description 

 - ${data.description}
 
  ## Table of contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  - ${data.installation}

  ## Usage
  - ${data.usage}

  ## License 
  - ${data.license}

  ## Contributing individuals 
  - ${data.contribute}

  ## Tests 
  - ${data.tests}

  ## Questions
  If you have questions on this project you can find me on Github at https://github.com/${data.username}
  or please feel free to email me at ${data.email}

  `
}

module.exports = generateMarkdown;

