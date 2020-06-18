// function to generate markdown for README
function generateMarkdown(data) 
{
	// title and description
	var s = 
`# ${data.title}

## Description

${data.description}
`;

	// table of contents
	if (data.toc)
	{
		s += 
`
## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
`;
	}

	// continue with the rest
	s += 
`
## Installation

${data.install}

## Usage

${data.usage}

## Credits

${data.contrib}

## License

${data.license}

`;
	
	// return the string
	return s;
}


module.exports = generateMarkdown;
