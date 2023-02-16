function generateMarkdown(data) {

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

if (license === "None") {
  return ``;
} else if (license === "Apache License 2.0") {
  return `[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]`;
} else if (license === "GNU General Public License v3.0") {
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;
} else if (license === "MIT License") {
  return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`;

} else if (license === "BSD 2-Clause 'Simplified' license") {
  return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]`;

} else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
  return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]`;

} else if (license === "Boost Software License 1.0") {
  return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]`;

} else if (license === "Creative Commons Zero v1.0 Universal") {
  return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)]`;

} else if (license === "Eclipse Public License 2.0") {
  reutrn `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)]`;

} else if (license === "GNU Affero General Public License v3.0") {
  return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`;

} else if (license === "GNU General Public License v2.0") {
  return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)]`;

} else if (license === "Mozilla Public License 2.0") {
  return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]`;

} else if (license === "The Unlicense") {
  return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]`;
}
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license === "None") {
    return ``;
  } else if (license === "Apache License 2.0") {
    return `(https://opensource.org/licenses/Apache-2.0)`;
  } else if (license === "GNU General Public License v3.0") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  } else if (license === "MIT License") {
    return `(https://opensource.org/licenses/MIT)`;
  
  } else if (license === "BSD 2-Clause 'Simplified' license") {
    return `(https://opensource.org/licenses/BSD-2-Clause)`;
  
  } else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
    return `(https://opensource.org/licenses/BSD-3-Clause)`;
  
  } else if (license === "Boost Software License 1.0") {
    return `(https://www.boost.org/LICENSE_1_0.txt)`;
  
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return `(http://creativecommons.org/publicdomain/zero/1.0/)`;
  
  } else if (license === "Eclipse Public License 2.0") {
    reutrn `(https://opensource.org/licenses/EPL-1.0)`;
  
  } else if (license === "GNU Affero General Public License v3.0") {
    return `(https://www.gnu.org/licenses/gpl-3.0)`;
  
  } else if (license === "GNU General Public License v2.0") {
    return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  
  } else if (license === "Mozilla Public License 2.0") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  
  } else if (license === "The Unlicense") {
    return `(http://unlicense.org/)`;
  }
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return ``;
  } else if (license === "Apache License 2.0") {
    return `A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (license === "GNU General Public License v3.0") {
    return `Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights.`;
  } else if (license === "MIT License") {
    return `A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (license === "BSD 2-Clause 'Simplified' license") {
    return `A permissive license that comes in two variants, the BSD 2-Clause and BSD 3-Clause. Both have very minute differences to the MIT license.`;
  } else if (license === "BSD 3-Clause 'New' or 'Revised' License") {
    return `A permissive license similar to the BSD 2-Clause License, but with a 3rd clause that prohibits others from using the name of the copyright holder or its contributors to promote derived products without written consent`;
  } else if (license === "Boost Software License 1.0") {
    return `A simple permissive license only requiring preservation of copyright and license notices for source (and not binary) distribution. Licensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  } else if (license === "Creative Commons Zero v1.0 Universal") {
    return `The Creative Commons CC0 Public Domain Dedication waives copyright interest in a work you've created and dedicates it to the world-wide public domain. Use CC0 to opt out of copyright entirely and ensure your work has the widest reach. As with the Unlicense and typical software licenses, CC0 disclaims warranties. CC0 is very similar to the Unlicense.`;
  } else if (license === "Eclipse Public License 2.0") {
    return `This commercially-friendly copyleft license provides the ability to commercially license binaries; a modern royalty-free patent license grant; and the ability for linked works to use other licenses, including commercial ones.`;
  } else if (license === "GNU Affero General Public License v3.0") {
    return `Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. When a modified version is used to provide a service over a network, the complete source code of the modified version must be made available.`;
  } else if (license === "GNU General Public License v2.0") {
    return `The GNU GPL is the most widely used free software license and has a strong copyleft requirement. When distributing derived works, the source code of the work must be made available under the same license. There are multiple variants of the GNU GPL, each with different requirements.`;
  } else if (license === "Mozilla Public License 2.0") {
    return `Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work.`;
  } else if (license === "The Unlicense") {
    return `A license with no conditions whatsoever which dedicates works to the public domain. Unlicensed works, modifications, and larger works may be distributed under different terms and without source code.`;
  }

}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
  const license = `${data.license}`;

  return `# ${data.title}

${renderLicenseBadge(license)}
  ## Description 

 ${data.description}
 
  ## Table of contents 

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribute](#contribute)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage} \n
  here is a great place for you to upload screen shots or even a screen record of your application.  But remember to delete this line of text first
  

  ## Contribute 
  ${data.contribute}

  ## Tests 
  ${data.tests}

  ## License 
  ${data.license}
  ${renderLicenseLink(license)}
  ${renderLicenseSection(license)}
  - Please refer to the license information in the repo if applicable.

  ## Questions
  If you have questions on this project you can find me on Github at https://github.com/${data.username}
  or please feel free to email me at ${data.email}

  `
}

module.exports = generateMarkdown;