let calcDisplay = document.getElementById('display');
	// container = document.getElementById('container').addEventListener('click', checkKeyPress ,false),


let keyOne = document.getElementById('one').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 1;
	} ,false),
	keyTwo = document.getElementById('two').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 2;
	} ,false),
	keyThree = document.getElementById('three').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 3;
	} ,false),
	keyFour = document.getElementById('four').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 4;
	} ,false),
	keyFive = document.getElementById('five').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 5;
	} ,false),
	keySix = document.getElementById('six').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 6;
	} ,false),
	keySeven = document.getElementById('seven').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 7;
	} ,false),
	keyEight = document.getElementById('eight').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 8;
	} ,false),
	keyNine = document.getElementById('nine').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 9;
	} ,false),
	keyZero = document.getElementById('zero').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += 0;
	} ,false),
	keyEquals = document.getElementById('equals').addEventListener('click', function toDisplay() {
		calcDisplay.textContent += '=';
	} ,false),
	keyClear = document.getElementById('clear').addEventListener('click', function toDisplay() {
		calcDisplay.textContent = '';
	} ,false),
	keyAdd = document.getElementById('addition').addEventListener('click', function toDisplay() {
		if (calcDisplay.textContent.length >= 1) {
			calcDisplay.textContent += '+';
		} else {
			// TODO: I need to make sure that when a user clicks a key when there is nothing on the screen, it would show a warning, maybe a red color
			calcDisplay.textContent = '';
		}
	} ,false),
	// TODO: There is a bug here that makes the subtraction button quite inefficient. 
	keySubtract = document.getElementById('subtraction').addEventListener('click', function toDisplay() {
		if (calcDisplay.textContent === '-') {
			console.log('hello');
		} else {
			calcDisplay.textContent = '-';
		}
	} ,false),
	keyDivide = document.getElementById('division').addEventListener('click', function toDisplay() {
		if (calcDisplay.textContent.length >= 1) {
			calcDisplay.textContent += '/';
		} else {
			calcDisplay.textContent = '';
		}
	} ,false),
	keyMultiply = document.getElementById('multiplication').addEventListener('click', function toDisplay() {
		if (calcDisplay.textContent.length >= 1) {
			calcDisplay.textContent += '*';
		} else {
			calcDisplay.textContent = '';
		}
	} ,false);



	if (calcDisplay.textContent.length >= 1) {
		calcDisplay.textContent = "Text entered";
	}
