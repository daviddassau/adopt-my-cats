"use strict";


const apiAjaxRequest = require('./api');

$('#enterButton').click(() => {
	let userInput = $('#searchText').val();
	if ($.isNumeric(userInput)) {
		if (userInput > 9999) {
			// Your number is too big
			console.log("Your number is too big");
		} else {
			// Fire off ajax request w/the variable as the number of cats
			apiAjaxRequest.requestSomeCats(userInput);
		}
	} else {
		// Prompt user to enter a number and not a string
		console.log("Sorry, that is not a number");
	}
});

$('#searchText').keypress((e) => {
	if (e.key === 'Enter') {
		let userInput = $('#searchText').val();
		if ($.isNumeric(userInput)) {
			if (userInput > 9999) {
				// Your number is too big
				console.log("Your number is too big");
			} else {
				// Fire off ajax request w/the variable as the number of cats
				apiAjaxRequest.requestSomeCats(userInput);
			}
		} else {
			// Prompt user to enter a number and not a string
			console.log("Sorry, that is not a number");
		}
	}
});

module.exports = {};