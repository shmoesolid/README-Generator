// setup for std input
const readline = require("readline");
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

// array of questions for user
const questions = [];

const Q_TYPES = {};

// Question object
function Question(_ques, _type, _header, _required=true)
{
	this.ques = _ques;
	this.type = _type;
	this.header = _header;
	this.required = _required; 
	this.answer = "";
}

questions.push(new Question(
	"What is the title of your project?",
	"",
	"# ",
	true
));


var currentQuestionIndex = -1;

// function to write README file
function writeToFile(fileName, data) 
{
	
}

function cb_input(data)
{
	console.log(`entered: ${data}`);
	
	// .. do stuff with the data entered
	
	nextQuestion();
}

function askQuestion(index)
{
	// establish
	var current = questions[index];
	
	// ask and get input
	rl.question(current.ques +"\n", data => cb_input(data) );
}

function nextQuestion()
{
	// increase
	currentQuestionIndex++;
	
	// check if we reached the end
	if (currentQuestionIndex == questions.length)
	{
		// close readline inputs and return
		rl.close();
		return;
	}
	
	// ask current question
	askQuestion(currentQuestionIndex);
	
}

// function to initialize program
function init() 
{
	console.log
	(
		`Welcome to the README markdown generator!\n`

	);
	
	nextQuestion();
}

// function call to initialize program
init();
