
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = 
[
	{
		name: 'title',
		message: 'What is the title of your project?',
	},
	{
		name: 'description',
		message: 'What is the description of your project?',
		type: 'editor',
	},
	// {
	// 	name: 'install',
	// 	message: 'How do you install your project?',
	// 	type: 'editor',
	// },
	// {
	// 	name: 'useage',
	// 	message: 'How do you use your project?',
	// 	type: 'editor',
	// },
	// {
	// 	name: 'contrib',
	// 	message: 'Who contributed?',
	// },
];

// function to write README file
function writeToFile(fileName, data) 
{
	/*
	fs.appendFile("log.txt", logTxt, "utf-8", (err) => {
      if (err) throw err;
	});
	*/
	fs.writeFile(fileName, data, 'utf-8', (err) =>
	{
		if (err) throw err;
		//process.exit(0);
	});
}

// function to initialize program
function init() 
{
	// say hello
	console.log(`Welcome to the amazing README markdown generator!\n`);
	
	// run inquirer
	inquirer
		.prompt(questions)
		.then(answers =>
		{
			var mdData = generateMarkdown(answers);
			writeToFile("README.md", mdData);
		})
		.catch(error => 
		{
			console.log(error);
			//process.exit(0);
		});
}

// function call to initialize program
init();
