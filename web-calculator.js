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
	keyClear = document.getElementById('clear').addEventListener('click', function toDisplay() {
		calcDisplay.textContent = '';
	} ,false),
	keyEquals = document.getElementById('equals'),
	keyAdd = document.getElementById('addition'),
	keySubtract = document.getElementById('subtraction'),
	keyDivide = document.getElementById('division'),
	keyMultiply = document.getElementById('multiplication');


// Adding the event listeners to the operator buttons
keyAdd.addEventListener('click', function toDisplay() {
		if (calcDisplay.textContent.length >= 1) {
			calcDisplay.textContent += '+';
		} else {
			// TODO: I need to make sure that when a user clicks a key when there is nothing on the screen, it would show a warning, maybe a red color
			calcDisplay.textContent = '';
		}
	} ,false);
keySubtract.addEventListener('click', function toDisplay() {
		// This logic checks if the subtract button is in is in the calculator display,
		// TODO: I need to check how to count the length of a characther in javascript. also to check if two characthers are side by side each other
			calcDisplay.textContent += '-';
	} ,false);
keyDivide.addEventListener('click', function toDisplay() {
		if (calcDisplay.textContent.length >= 1) {
			calcDisplay.textContent += '/';
		} else {
			calcDisplay.textContent = '';
		}
	} ,false);
keyMultiply.addEventListener('click', function toDisplay() {
		if (calcDisplay.textContent.length >= 1) {
			calcDisplay.textContent += '*';
		} else {
			calcDisplay.textContent = '';
		}
	} ,false);

// keyEquals.addEventListener('click', function toDisplay() {
// 		// toArray = calcDisplay.textContent.split('+')

// 		if (calcDisplay.textContent.split('+').length > 1) {
// 			toArray = calcDisplay.textContent.split('+')
// 			toInteger = new Array()
// 			result = 0

// 			for (var i = 0; i < toArray.length; i++) {
// 				if (toArray[i] == '') {
// 					toArray[i] = 0
// 				}
// 				toInteger.push(parseInt(toArray[i]))
// 				calcDisplay.textContent = result += parseInt(toArray[i])
// 			}

// 			console.log(toInteger, result)
// 			console.log(calcDisplay.textContent.split('+'), 'Addition');
// 		} else if (calcDisplay.textContent.split('-').length > 1) {
// 			console.log(calcDisplay.textContent.split('-'), 'Subtraction');
// 		} else if (calcDisplay.textContent.split('/').length > 1) {
// 			console.log(calcDisplay.textContent.split('/'), 'Division');
// 		} else if (calcDisplay.textContent.split('*').length > 1) {
// 			console.log(calcDisplay.textContent.split('*'), 'Multiplication');
// 		}


// 		// for (var i = toArray.length - 1; i >= 0; i--) {
// 		// 	parseInt(toArray[i]);
// 		// }
// 	} ,false);

keyEquals.addEventListener('click', function toDisplay() {
		// toArray = calcDisplay.textContent.split('+')

		if (calcDisplay.textContent.split('+').length > 1) {
			toArray = calcDisplay.textContent.split('+')
			result = 0

			// This is looping through every item in the 'toArray' array; checking if it is an empty string, if it is empty, it turns it number 0; converting it to an integer; and adding it to the result variable whose initial value is 0
			for (var i = 0; i < toArray.length; i++) {
				if (toArray[i] == '') {
					toArray[i] = 0
				}
				calcDisplay.textContent = result += parseInt(toArray[i])
			};
		} else if (calcDisplay.textContent.split('-').length > 1) {
			toArray = calcDisplay.textContent.split('-')
			result = 0
			for (var i = 0; i < toArray.length; i++) {
				if (toArray[i] == '') {
					toArray[i] = 0
				}
				calcDisplay.textContent = result -= parseInt(toArray[i])
			};
			console.log(calcDisplay.textContent.split('-'), 'Subtraction');
		} else if (calcDisplay.textContent.split('/').length > 1) {
			toArray = calcDisplay.textContent.split('/')
			toInteger = new Array()
			result = ''
			for (var i = 0; i < toArray.length; i++) {
				if (toArray[i] == '') {
					toArray[i] = 0
				}
				toInteger.push(parseInt(toArray[i]))
				calcDisplay.textContent = result /= parseInt(toArray[i])
			};
			/* This is having a bug, it is not dividing the numbe apropriately. This and the multiply function */
			console.log(toInteger, result)
			console.log(calcDisplay.textContent.split('/'), 'Division');
		} else if (calcDisplay.textContent.split('*').length > 1) {
			toArray = calcDisplay.textContent.split('*')
			toInteger = new Array()
			result = ''
			for (var i = 0; i < toArray.length; i++) {
				if (toArray[i] == '') {
					toArray[i] = 0
				}
				toInteger.push(parseInt(toArray[i]))
				calcDisplay.textContent = result *= parseInt(toArray[i])
			};
			console.log(toInteger, result)
			console.log(calcDisplay.textContent.split('*'), 'Multiplication');
		}


		// for (var i = toArray.length - 1; i >= 0; i--) {
		// 	parseInt(toArray[i]);
		// }
	} ,false);


// console.log(charAt(0))
