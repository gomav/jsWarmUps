//Putting all the previous exercises together into this calculator exercises
//The function below is executed on page load - this function is wired to the
//windows onload function.

var resultElements;
//The function setDefaultText adds the math functions - sin/cos/tan/log to the DOM
//by iterating through the array
function setDefaultText() {
	for (var i = 0; i < resultElements.length; i++) {
		var element = resultElements[i];
            //getAttribute('function') 'gets' value of the function which is then
            //evaluated by the functionName function on line 48.
		    element.innerText = element.getAttribute('function') + "(x) = ";
	}
}
//The user input is evaluated to ensure a number is entered. trim gets rid of
//leading or trailing white space.
function getUserInput() {
	var rawValue = document.getElementById('userInput').value.trim();

    //evaluates for any input
	if (rawValue.length === 0) {
		throw "You must enter a number."
	}
    //evaluates if input is a number, if not, error is thrown via an alert box.
	var num = Number(rawValue);
	if (isNaN(num)) {
		throw rawValue + " is not a number."
	}

	return num;
}
//evaluates the user input
function calculateResults() {
	try {
		var x = getUserInput();
        //if user input results in error, the error will be presented on the html.
        //e is the event.
	} catch(e) {
		alert("Error: " + e);
		return;
	}
    //This will keep from displaying the same answer over and over if the calculate
    //button is clicked; without setDefaultText() the calculate button will keep
    //appending the same answer indefinitely.
	setDefaultText();

	for (var i = 0; i < resultElements.length; i++) {
		var element = resultElements[i];
        //functionName looks for the function attribute in the html
        var functionName = element.getAttribute('function');
        //func invokes the Math function and is defined the function tag
        //accessed by the functionName funtion above
		var func = Math[functionName];
        //The results are rendered based on the user input
		var result = func(x);
        //The user input is captured here and input is evaluated and the results
        //added to the respective functions in the html - sin/cons/tan/log
		element.innerText = element.innerText + " " + result;

	}

}

window.onload = function() {
	resultElements = document.getElementsByClassName('result');
    //the setDefaultText function is called here, which renders the functions
    //added in the html.
    setDefaultText();
    //adding a listener to the calculate button.
	document.getElementById('btnCalculate')
            //The event that is being looked for is 'click', calculateResults is
            //the associated function once 'click' is invoked.
			.addEventListener('click', calculateResults);
};
