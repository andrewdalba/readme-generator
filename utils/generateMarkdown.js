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


## License


## Contributing


## Tests


## Questions


`;

    return format;
}
module.exports = generateMarkdown;