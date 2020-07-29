function generateMarkdown(data) {

let format = `# ${data.title}
## Table of Contents
| | |
|-|-|
[Installation](#installation) | [Usage](#usage)
[License](#license) | [Contributing](#contributing)
[Tests](#tests) | [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contributers}

## Tests
${data.tests}

## Questions
### Please direct any questions about this project to
${data.email}
### Or check out my gitHub page
[Here](https://github.com/${data.username})

`;

    return format;
}
module.exports = generateMarkdown;