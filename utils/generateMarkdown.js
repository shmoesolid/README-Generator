// function to generate markdown for README
/*function generateMarkdown(data) 
{
	return ""+
		"## " + data.title +
		"# " + data.description;
}*/

// function to generate markdown for README
function generateMarkdown(data) 
{
	return `# ${data.title}

## Description

${data.description}
`;
}

function generateMarkdown(data) 
{
	return `# ${data.title}

## Description

${data.description}

## Installation

${data.install}

## Usage

${data.usage}

## Contributions

${data.contrib}
`;
}


module.exports = generateMarkdown;
