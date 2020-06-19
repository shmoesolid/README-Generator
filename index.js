
// includes
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// generated file info
const FILEPATH = "./generated/";
const FILENAME = "README_"+ Math.floor(new Date() / 1000) +".md";

// question prompts/types
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
	{
		name: 'install',
		message: 'How do you install your project?',
		type: 'editor',
	},
	{
		name: 'usage',
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
	{
		name: 'toc',
		message: 'Do you want a table of contents?',
		type: 'confirm',
	},
	{
		name: 'display',
		message: 'Would you like to display your file in this console?',
		type: 'confirm',
	},
];

/**
 * writes the readme file 
 * 
 * @param {string} fn 
 * @param {object} data 
 */
function writeToFile(fn, data) 
{
	fs.writeFile(fn, data, 'utf-8', (err) => { if (err) throw err; });
}

/**
 * initialize application
 */
function init() 
{
	// say hello
	console.log(
		"\n" +
		"*****************************\n" +
		"Welcome to the amazing README markdown generator!\n\n" +
		"Your generated file will be called '"+ FILENAME +"'\n" +
		"It will be located in '"+ FILEPATH +"'\n\n" +
		"*****************************\n"
	);

	// make directory if doesn't exist
	fs.mkdir(FILEPATH, {recursive: true}, (err) => { if (err) throw err; });

	// run inquirer
	inquirer
		.prompt(questions)
		.then(answers =>
		{
			// generated data and write to file
			var mdData = generateMarkdown(answers);
			writeToFile(FILEPATH + FILENAME, mdData);

			// also display in console if desired
			if (answers.display)
				console.log("\nYour file will look like:\n\n" + mdData);
		})
		.catch( error => console.log(error) );
}

// function call to initialize program
init();
