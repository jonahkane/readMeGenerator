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

  ## description 
  //somehow need to get the license badge to appear here
  ${data.description}
  ## table of contents 

  - Installation
  - Usage
  - Contribute
  - Tests
  - License
  - Questions
  
  ## instllation
  ${data.installation}
  ## usage
  ${data.usage}
  ## credits 
  ${data.contribute}
  ## license 
  ${data.license}
  ## features 
  `
}

module.exports = generateMarkdown;

