
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const FILENAME = "README_generated.md";

const questions = 
[
	{
		name: 'title',
		message: 'What is the title of your project?',
	},
	/*
	{
		name: 'description',
		message: 'What is the description of your project?',
		type: 'editor',
	},
	{
		name: 'install',
		message: 'How do you install your project?',
		type: 'editor',
	},
	{
		name: 'useage',
		message: 'How do you use your project?',
		type: 'editor',
	},
	{
		name: 'contrib',
		message: 'Who contributed?',
	},
	{
		name: 'license',
		message: 'What license is this under?',
	},
	*/
	{
		name:'toc',
		message: 'Do you want a table of contents?',
		type: 'confirm',
	},
];

// function to write README file
function writeToFile(fn, data) 
{
	fs.writeFile(fn, data, 'utf-8', (err) =>
	{
		if (err) throw err;
	});
}

// function to initialize program
function init() 
{
	// say hello
	console.log(
		"\nWelcome to the amazing README markdown generator!\n" +
		"Your generated file will be called '"+ FILENAME +"'...\n"
	);
	
	// run inquirer
	inquirer
		.prompt(questions)
		.then(answers =>
		{
			var mdData = generateMarkdown(answers);
			writeToFile(FILENAME, mdData);
		})
		.catch( error => console.log(error) );
}

// function call to initialize program
init();
