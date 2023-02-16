// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === "None") {
  return ``;
} else if (license === "Apache License 2.0") {
  return `[![${license}](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
} else if (license === "GNU General Public License v3.0") {
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
} else if (license === "MIT License") {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;

} else if (license === "BSD 2-Clause 'Simplified' license") {
  return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;

} else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
  return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;

} else if (license === "Boost Software License 1.0") {
  return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;

} else if (license === "Creative Commons Zero v1.0 Universal") {
  return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;

} else if (license === "Eclipse Public License 2.0") {
  reutrn `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;

} else if (license === "GNU Affero General Public License v3.0") {
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;

} else if (license === "GNU General Public License v2.0") {
  return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;

} else if (license === "Mozilla Public License 2.0") {
  return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;

} else if (license === "The Unlicense") {
  return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
}
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  *****somehow need to get the license badge to appear here
  ## Description 

 ${data.description}
 
  ## Table of contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing Individuals](#contributing individuals)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing individuals 
  ${data.contribute}

  ## Tests 
  ${data.tests}

  ## License 
  ${data.license}
  - Please refer to the license information in the repo if applicable.

  ## Questions
  If you have questions on this project you can find me on Github at https://github.com/${data.username}
  or please feel free to email me at ${data.email}

  `
}

module.exports = generateMarkdown;

