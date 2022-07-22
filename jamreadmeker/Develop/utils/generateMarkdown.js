
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // this is allowing me to take the input of my data and use it to make a License section.
  function renderLicenseSection(license) {
    license = data.license
    if(license === !"none"){

      return  `## License <br/>
      ${license} is the license that my program is covered under.`

    }else if(license === null){

      return `${''}`

    }else{

      return `${''}`
      
    }
  }
  
  return `# ${data.title} 
   
![license badge](https://img.shields.io/badge/license-${data.license}-yellow)

  ## Description
  ${data.description}

  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license) 

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.credits}

  ${renderLicenseSection()}

  ## Tests
  ${data.test}

  ## Questions
  Here is my email for questions:  ${data.email}
  <br />
  If you would like to look me up in github, here is my username: ${data.username}
  <br />
  Follow these instructions to contact me: <br />
  ${data.questions}

  `;
}

module.exports = generateMarkdown;
