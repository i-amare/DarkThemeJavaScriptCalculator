// Delcares text field
const textField = document.getElementById('number-field');

// Declares number buttons
const numberBtn0 = document.getElementById('0-btn');
const numberBtn1 = document.getElementById('1-btn');
const numberBtn2 = document.getElementById('2-btn');
const numberBtn3 = document.getElementById('3-btn');
const numberBtn4 = document.getElementById('4-btn');
const numberBtn5 = document.getElementById('5-btn');
const numberBtn6 = document.getElementById('6-btn');
const numberBtn7 = document.getElementById('7-btn');
const numberBtn8 = document.getElementById('8-btn');
const numberBtn9 = document.getElementById('9-btn');
const commaBtn = document.getElementById('comma-btn');

// Declares oppertaion buttons
const divideBtn = document.getElementById('divide-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const equalBtn = document.getElementById('equals-btn');
const clearBtn = document.getElementById('clear-btn');
const clearAllBtn = document.getElementById('clear-all-btn')
const backSpaceBtn = document.getElementById('backspace-btn');

let prevNum, currentNum, opperationClicked, prevOpperation, clearText, answere;

innit();

// Handles number buttons' click event
function onNumberButton(numberClicked) {
	let currentText, newText;

	if (clearText) {
		// Will clear all text and start afresh
		currentText = '';
	} else {
		// Adds number pressesd to the current text
		currentText = textField.value;
	}

	// Creates and diplays text
	newText = `${currentText}${numberClicked}`;
	textField.value = newText;

	// Dissables clear text
	clearText = false;
}

// Handles opperation buttons' click event
function onOpperationButton(opperation) {
	// Stores numbers that will be used for the opperations
	prevNum = parseFloat(answere);
	currentNum = parseFloat(textField.value);

	if (opperationClicked) {
		// Does the neccesary opperation
		if (prevOpperation === '+') {
			answere = prevNum + currentNum;
		} else if (prevOpperation === '-') {
			answere = prevNum - currentNum;
		} else if (prevOpperation === '/') {
			answere = prevNum / currentNum;
		} else if (prevOpperation === '*') {
			answere = prevNum * currentNum;
		}
	} else {
		answere = currentNum;
	}

	// Opperation will be perfomed after another opperation button has been clicked
	prevOpperation = opperation;

	// Displays answere
	textField.value = answere;

	opperationClicked = true;

	// Will clear the text after a number is pressed
	clearText = true;
}

// Handles control buttons' click event
function onControlBtn(btnPressed) {
	if (btnPressed === 'clear') {
		// Clear the text field
		textField.value = '';
	} else if (btnPressed === 'clear-all') {
		// Resets the program
		prevNum = 0;
		currentNum = 0;
		textField.value = '';
		opperationClicked = false;
		clearText = false;
		answere = 0;
	} else if (btnPressed === 'backspace') {
		// Removes the last digit of in the text field
		let currentText = textField.value;
		let newText = currentText.substring(0, currentText.length - 1);
		textField.value = newText;
	}
}

function innit() {
	// Adds click event listeners to all buttons
	numberBtn0.addEventListener('click', () => onNumberButton(0));
	numberBtn1.addEventListener('click', () => onNumberButton(1));
	numberBtn2.addEventListener('click', () => onNumberButton(2));
	numberBtn3.addEventListener('click', () => onNumberButton(3));
	numberBtn4.addEventListener('click', () => onNumberButton(4));
	numberBtn5.addEventListener('click', () => onNumberButton(5));
	numberBtn6.addEventListener('click', () => onNumberButton(6));
	numberBtn7.addEventListener('click', () => onNumberButton(7));
	numberBtn8.addEventListener('click', () => onNumberButton(8));
	numberBtn9.addEventListener('click', () => onNumberButton(9));
	commaBtn.addEventListener('click', () => onNumberButton('.'));
	divideBtn.addEventListener('click', () => onOpperationButton('/'));
	multiplyBtn.addEventListener('click', () => onOpperationButton('*'));
	addBtn.addEventListener('click', () => onOpperationButton('+'));
	subtractBtn.addEventListener('click', () => onOpperationButton('-'));
	equalBtn.addEventListener('click', () => onOpperationButton('='));
	clearBtn.addEventListener('click', () => onControlBtn('clear'));
	clearAllBtn.addEventListener('click', () => onControlBtn('clear-all'));
	backSpaceBtn.addEventListener('click', () => onControlBtn('backspace'));

	// Innitializes all global variables
	prevNum = 0;
	currentNum = 0;
	textField.value = '';
	opperationClicked = false;
	clearText = false;
	answere = 0;
}
