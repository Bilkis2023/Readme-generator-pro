// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}

 ${generateBage(data.license)} 
 


## Description
  ${data.description}


 ## Table of contents 
 ${data.contents}


 ## Installations
 ${data.installation}


 ## License
 ${renderLicenseBadge(data.license)}


  ## Dependecies
 ${data.dependecies}


 ## GitHub
${data.gitHub}


## Questions
${data.questions}
`
}

module.exports = generateMarkdown;

function renderLicenseBadge (license) {
  console.log(license)
  if (license ==='MIT'){
    return 'MIT'
  } else if ( license ==='None'){
    return 'None'
  } else if ( license ==='GPL 3.0'){
    return 'GPL 3.0'
  } else if ( license ==='APACHE 2.0'){
    return 'APACHE 2.0'
  } else if ( license ==='BSD 3'){
    return 'BSD 3'
  }
  }

  function generateBage(license ){
    return `![badmath](https://img.shields.io/badge/license-${license}-blue.svg)
    `
  }

  
 
 
