function generateMarkdown(data) {

let format = `# ${data.title}
## Table of Contents
| | | |
|-|-|-|
[Installation](#installation) | [Usage](#usage)
[License](#license) | [Contributing](#contributing)
[Tests](#tests) | [Questions](#questions)

## Email Address
${data.email}

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
${data.questions}

`;

    return format;
}
module.exports = generateMarkdown;