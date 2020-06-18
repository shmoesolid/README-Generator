// function to generate markdown for README
function generateMarkdown(data) 
{
	// title and description
	var s = `# ${data.title}\n\n`;
	if (data.description) s += `## Description\n\n${data.description}\n\n`;

	// table of contents
	if (data.toc)
	{
		s += `## Table of Contents\n\n`;
		if (data.install) s += `* [Installation](#installation)\n`;
		if (data.usage) s += `* [Usage](#usage)\n`;
		if (data.contrib) s += `* [Credits](#credits)\n`;
		if (data.license) s += `* [License](#license)\n\n`;
	}

	// continue with the rest
	if (data.install) s += `## Installation\n\n${data.install}\n\n`;
	if (data.usage) s += `## Usage\n\n${data.usage}\n\n`;
	if (data.contrib) s += `## Credits\n\n${data.contrib}\n\n`;
	if (data.license) s += `## License\n\n${data.license}\n\n`;
	
	// return the string
	return s;
}

module.exports = generateMarkdown;
