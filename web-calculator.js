let calcDisplay = document.getElementById('display')
	// container = document.getElementById('container').addEventListener('click', checkKeyPress ,false),
	keyOne = document.getElementById('one').addEventListener('click', function toDisplay() {
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
	} ,false);
